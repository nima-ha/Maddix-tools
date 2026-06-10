type EncryptParams = {
  plaintext: string;
  password: string;
};

type DecryptParams = {
  ciphertextB64: string;
  password: string;
};

const te = new TextEncoder();
const td = new TextDecoder();

function b64encode(bytes: Uint8Array): string {
  // browser-safe btoa
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function b64decode(b64: string): Uint8Array {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const baseKey = await crypto.subtle.importKey(
    "raw",
    te.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  // TypeScript sometimes complains about SharedArrayBuffer-like types.
  // Ensure we pass a plain Uint8Array buffer view.
  const saltFixed = new Uint8Array(salt);

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltFixed,
      iterations: 150_000,
      hash: "SHA-256",
    },
    baseKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"]
  );
}

// Output format: base64(salt || iv || ciphertext)
export async function encryptAESGCM({ plaintext, password }: EncryptParams): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const ivFixed = new Uint8Array(iv);

  const key = await deriveKey(password, salt);
  const plaintextBytes = te.encode(plaintext);
  const ciphertextBuf = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    new Uint8Array(plaintextBytes).buffer
  );
  const ciphertext = new Uint8Array(ciphertextBuf);

  const out = new Uint8Array(salt.length + iv.length + ciphertext.length);
  out.set(salt, 0);
  out.set(iv, salt.length);
  out.set(ciphertext, salt.length + iv.length);
  return b64encode(out);
}

export async function decryptAESGCM({ ciphertextB64, password }: DecryptParams): Promise<string> {
  const raw = b64decode(ciphertextB64);
  if (raw.length < 16 + 12) throw new Error("Invalid ciphertext");

  const salt = raw.subarray(0, 16);
  const iv = raw.subarray(16, 28);
  const ciphertext = raw.subarray(28);

  const key = await deriveKey(password, salt);
  const ivFixed = new Uint8Array(iv);
  const plaintextBuf = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: ivFixed },
    key,
    ciphertext.slice().buffer as ArrayBuffer
  );
  return td.decode(plaintextBuf);
}

