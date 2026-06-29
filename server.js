const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { WebSocketServer } = require('ws');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
};

const ngrokTunnels = {};

function getShell(shellType) {
  const isWin = process.platform === 'win32';
  switch (shellType) {
    case 'cmd': return isWin ? { cmd: 'cmd.exe', args: ['/Q'] } : { cmd: 'cmd', args: ['/Q'] };
    case 'powershell': return isWin ? { cmd: 'powershell.exe', args: ['-NoLogo', '-NoProfile'] } : { cmd: 'pwsh', args: ['-NoLogo', '-NoProfile'] };
    case 'pwsh': return { cmd: 'pwsh', args: ['-NoLogo', '-NoProfile'] };
    case 'wsl': return { cmd: 'wsl.exe', args: ['--'] };
    case 'bash': return { cmd: 'bash', args: ['--norc'] };
    case 'zsh': return { cmd: 'zsh', args: ['--norc'] };
    case 'sh': return { cmd: 'sh', args: [] };
    default: return isWin ? { cmd: 'cmd.exe', args: ['/Q'] } : { cmd: 'bash', args: ['--norc'] };
  }
}

function getAvailableShells() {
  const isWin = process.platform === 'win32';
  const shells = [];
  if (isWin) {
    shells.push({ id: 'cmd', name: 'CMD (Windows)' });
    shells.push({ id: 'powershell', name: 'PowerShell 5.1' });
    try {
      const result = require('child_process').execSync('where pwsh 2>nul || echo notfound').toString().trim();
      if (result !== 'notfound') shells.push({ id: 'pwsh', name: 'PowerShell 7+' });
    } catch(e) {}
    try {
      const result = require('child_process').execSync('wsl.exe --version 2>nul || echo notfound').toString().trim();
      if (result !== 'notfound') shells.push({ id: 'wsl', name: 'WSL Linux' });
    } catch(e) {}
  } else {
    shells.push({ id: 'bash', name: 'Bash' });
    shells.push({ id: 'zsh', name: 'Zsh' });
    shells.push({ id: 'sh', name: 'SH' });
    try {
      const result = require('child_process').execSync('which fish 2>/dev/null || echo notfound').toString().trim();
      if (result !== 'notfound') shells.push({ id: 'fish', name: 'Fish' });
    } catch(e) {}
  }
  return shells;
}

const server = http.createServer((req, res) => {
  if (req.url === '/api/shells' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ shells: getAvailableShells(), platform: process.platform }));
    return;
  }
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || 'application/octet-stream';
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

const wss = new WebSocketServer({ server, path: '/terminal' });

wss.on('connection', (ws, req) => {
  let shellProcess = null;
  let shellType = 'auto';

  ws.on('message', (data) => {
    try {
      const msg = JSON.parse(data.toString());
      if (msg.type === 'resize') {
        if (shellProcess && shellProcess.stdin.writable) {
          try {
            shellProcess.stdout.setEncoding('utf-8');
          } catch(e) {}
        }
        return;
      }
      if (msg.type === 'shell') {
        shellType = msg.shell || 'auto';
        if (shellProcess) {
          shellProcess.kill();
          shellProcess = null;
        }
        const shell = getShell(shellType);
        shellProcess = spawn(shell.cmd, shell.args, {
          stdio: ['pipe', 'pipe', 'pipe'],
          env: { ...process.env, TERM: 'xterm-256color' },
          windowsHide: true,
        });
        const sendOutput = (chunk) => {
          if (ws.readyState === ws.OPEN) {
            ws.send(JSON.stringify({ type: 'output', data: chunk.toString() }));
          }
        };
        shellProcess.stdout.on('data', sendOutput);
        shellProcess.stderr.on('data', sendOutput);
        shellProcess.on('close', (code) => {
          if (ws.readyState === ws.OPEN) {
            ws.send(JSON.stringify({ type: 'exit', code }));
          }
          shellProcess = null;
        });
        ws.send(JSON.stringify({ type: 'info', message: `Shell started: ${shell.cmd}` }));
        return;
      }
      if (msg.type === 'input') {
        if (shellProcess && shellProcess.stdin.writable) {
          shellProcess.stdin.write(msg.data);
        }
        return;
      }
      if (msg.type === 'resize') {
        return;
      }
    } catch(e) {
      if (ws.readyState === ws.OPEN) {
        ws.send(JSON.stringify({ type: 'error', message: e.message }));
      }
    }
  });

  ws.on('close', () => {
    if (shellProcess) {
      shellProcess.kill();
      shellProcess = null;
    }
  });

  ws.on('error', () => {
    if (shellProcess) {
      shellProcess.kill();
      shellProcess = null;
    }
  });

  ws.send(JSON.stringify({ type: 'info', message: 'Connected to Maddix Terminal Server' }));
  ws.send(JSON.stringify({ type: 'info', message: `Platform: ${process.platform} ${process.arch}` }));
  ws.send(JSON.stringify({ type: 'info', message: 'Send: {"type":"shell","shell":"cmd|powershell|bash|zsh|sh|wsl"}' }));
});

server.listen(PORT, () => {
  console.log(`Maddix Tools running at http://localhost:${PORT}`);
  console.log(`WebSocket terminal at ws://localhost:${PORT}/terminal`);
});
