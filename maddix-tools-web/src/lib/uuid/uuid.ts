export function uuidv4(): string {
  // Prefer native randomUUID
  const g = globalThis as unknown as {
    crypto?: { randomUUID?: () => string };
  };

  if (g.crypto?.randomUUID) return g.crypto.randomUUID();

  // Fallback UUIDv4 (RFC4122) using crypto.getRandomValues when possible
  const cryptoObj = (globalThis as unknown as {
    crypto?: { getRandomValues?: (arr: Uint8Array) => Uint8Array };
  }).crypto;

  const bytes = new Uint8Array(16);
  if (cryptoObj?.getRandomValues) cryptoObj.getRandomValues(bytes);
  else {
    for (let i = 0; i < 16; i++) bytes[i] = Math.floor(Math.random() * 256);
  }

  // Per RFC4122 v4
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;

  const hex = Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

