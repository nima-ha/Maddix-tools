(function() {
'use strict';

const LS_KEY = 'maddixPrefs';

// ── State ──────────────────────────────────────────────
const state = {
  lang: 'en',
  theme: 'auto',
  isDark: false,
  isMobile: window.innerWidth < 768,
  activeTool: null,
  activeCategory: null,
  searchQuery: '',
  drawerOpen: false,
};

// ── i18n ────────────────────────────────────────────────
const i18n = {
  en: {
    brand: 'Maddix Tools',
    tagline: 'Browser-based security workstation',
    navHome: 'Home',
    navTools: 'Tools',
    navAbout: 'About',
    search: 'Search tools...',
    footer: 'Built by Nima Ha',
    categories: {
      recon: 'Network & Reconnaissance',
      payload: 'Payload Generation',
      system: 'System & Shell',
      crypto: 'Crypto & Encoding',
      config: 'Config & Manipulation',
      utility: 'Utilities',
    },
    tools: {
      'ip-scanner': 'IP Scanner',
      'ip-scanner-desc': 'Scan IP ranges, CIDR blocks, and ports with real-time progress',
      'ip-info': 'IP Info',
      'ip-info-desc': 'Lookup IP geolocation, ISP, ASN, and coordinates',
      'dns-lookup': 'DNS Lookup',
      'dns-lookup-desc': 'Query A, AAAA, MX, CNAME, TXT, NS, SOA records',
      'network-checker': 'Network Checker',
      'network-checker-desc': 'Check connectivity and latency to multiple services',
      'port-scanner': 'Port Scanner',
      'port-scanner-desc': 'Scan common TCP ports on any host',
      'cdn-scanner': 'CDN Scanner',
      'cdn-scanner-desc': 'Scan CDN ranges from 5 major providers',
      'reverse-shell': 'Reverse Shell',
      'reverse-shell-desc': 'One-liner reverse shell payloads for multiple languages',
      'xss-payloads': 'XSS Payloads',
      'xss-payloads-desc': 'Cross-site scripting payloads by category',
      'sqli-payloads': 'SQLi Payloads',
      'sqli-payloads-desc': 'SQL injection payloads for different databases',
      'lfi-payloads': 'LFI Payloads',
      'lfi-payloads-desc': 'Local file inclusion paths and wrappers',
      'msf-venom': 'MSF Venom',
      'msf-venom-desc': 'Generate msfvenom and Metasploit handler commands',
      'linux-cmds': 'Linux Commands',
      'linux-cmds-desc': 'Privilege escalation and enumeration commands',
      'powershell-cmds': 'PowerShell Commands',
      'powershell-cmds-desc': 'Active Directory enumeration and exploitation cmdlets',
      'tty-shell': 'TTY Shell',
      'tty-shell-desc': 'Spawn interactive TTY shells from limited environments',
      'file-transfer': 'File Transfer',
      'file-transfer-desc': 'PowerShell one-liner file transfer methods',
      'encoder': 'Encoder',
      'encoder-desc': 'Base64, Hex, and URL encode/decode',
      'hash-generator': 'Hash Generator',
      'hash-generator-desc': 'MD5, SHA1, SHA256, SHA512 hash generation',
      'aes-crypto': 'AES Crypto',
      'aes-crypto-desc': 'AES-256-GCM encryption/decryption with PBKDF2',
      'uuid-gen': 'UUID Generator',
      'uuid-gen-desc': 'Generate UUIDs with customizable options',
      'v2ray-config': 'V2Ray Config',
      'v2ray-config-desc': 'Generate V2Ray routing configurations',
      'sni-spoof': 'SNI Spoof',
      'sni-spoof-desc': 'Modify SNI in VMESS, VLESS, and Trojan links',
      'http-repeater': 'HTTP Repeater',
      'http-repeater-desc': 'Send custom HTTP requests and view responses',
      'obfuscated-files': 'Obfuscated Files',
      'obfuscated-files-desc': 'Encode files as Base64 for Bash, CMD, or PowerShell',
      'rss-feeds': 'RSS Feeds',
      'rss-feeds-desc': 'Security news feeds from ExploitDB, Cisco, CVE, and CXSecurity',
      'notepad': 'Notepad',
      'notepad-desc': 'Markdown notepad with localStorage persistence',
      'mega-scanner': 'Mega Scanner',
      'mega-scanner-desc': '7-in-1 unified scanner: IP, Port, CDN, DNS, Network, Speed, Geo',
      'v2ray-modifier': 'V2Ray Modifier',
      'v2ray-modifier-desc': 'Modify IPs and ports in VMESS, VLESS, WireGuard, Trojan configs',
      'network-diag': 'Network Diag',
      'network-diag-desc': 'Ping, traceroute, MTR, HTTP headers, speed test, packet loss',
      'dns-hunter': 'DNS Hunter',
      'dns-hunter-desc': 'DNS records, latency check, leak test, reverse DNS, CIDR scan',
      'cdn-finder': 'CDN Finder',
      'cdn-finder-desc': 'Find fast CDN edge IPs from Cloudflare, Gcore, Akamai, Google, Azure',
      'nova-install': 'NovaProxy Wizard',
      'nova-install-desc': 'Step-by-step NovaProxy deploy wizard for Cloudflare Workers',
    },
    close: 'Close',
    loading: 'Loading...',
    langSwitch: 'فارسی',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeAuto: 'Auto',
  },
  fa: {
    brand: 'مادیکس تولز',
    tagline: 'ایستگاه کاری امنیتی مبتنی بر مرورگر',
    navHome: 'خانه',
    navTools: 'ابزارها',
    navAbout: 'درباره',
    search: 'جستجوی ابزارها...',
    footer: 'ساخته شده توسط محمد مهرانی',
    categories: {
      recon: 'شبکه و شناسایی',
      payload: 'تولید پیلود',
      system: 'سیستم و شل',
      crypto: 'رمزنگاری و انکود',
      config: 'تنظیمات و دستکاری',
      utility: 'ابزارهای کاربردی',
    },
    tools: {
      'ip-scanner': 'اسکنر آی‌پی',
      'ip-scanner-desc': 'اسکن رنج آی‌پی، CIDR و پورت با نمایش پیشرفت',
      'ip-info': 'اطلاعات آی‌پی',
      'ip-info-desc': 'موقعیت، ISP، ASN و مختصات آی‌پی',
      'dns-lookup': 'جستجوی DNS',
      'dns-lookup-desc': 'پرس‌وجوی رکوردهای A، AAAA، MX، CNAME، TXT، NS، SOA',
      'network-checker': 'بررسی شبکه',
      'network-checker-desc': 'بررسی اتصال و تأخیر سرویس‌ها',
      'port-scanner': 'اسکنر پورت',
      'port-scanner-desc': 'اسکن پورت‌های رایج TCP',
      'cdn-scanner': 'اسکنر CDN',
      'cdn-scanner-desc': 'اسکن رنج CDN پنج ارائه‌دهنده بزرگ',
      'reverse-shell': 'شل معکوس',
      'reverse-shell-desc': 'پیلودهای یک خطی شل معکوس',
      'xss-payloads': 'پیلودهای XSS',
      'xss-payloads-desc': 'پیلودهای اسکریپت بین سایتی دسته‌بندی شده',
      'sqli-payloads': 'پیلودهای SQLi',
      'sqli-payloads-desc': 'پیلودهای تزریق SQL برای دیتابیس‌های مختلف',
      'lfi-payloads': 'پیلودهای LFI',
      'lfi-payloads-desc': 'مسیرهای LFI و wrapperها',
      'msf-venom': 'MSF Venom',
      'msf-venom-desc': 'تولید دستورات msfvenom و Metasploit',
      'linux-cmds': 'دستورات لینوکس',
      'linux-cmds-desc': 'دستورات افزایش دسترسی و اطلاعات سیستم',
      'powershell-cmds': 'دستورات PowerShell',
      'powershell-cmds-desc': 'دستورات Active Directory و اکسپلویت',
      'tty-shell': 'شل TTY',
      'tty-shell-desc': 'اجرای شل تعاملی TTY',
      'file-transfer': 'انتقال فایل',
      'file-transfer-desc': 'روش‌های انتقال فایل با PowerShell',
      'encoder': 'انکودر',
      'encoder-desc': 'انکود/دیکود Base64، Hex و URL',
      'hash-generator': 'تولید هش',
      'hash-generator-desc': 'تولید هش MD5، SHA1، SHA256، SHA512',
      'aes-crypto': 'رمزنگاری AES',
      'aes-crypto-desc': 'رمزنگاری/رمزگشایی AES-256-GCM با PBKDF2',
      'uuid-gen': 'تولید UUID',
      'uuid-gen-desc': 'تولید UUID با گزینه‌های قابل تنظیم',
      'v2ray-config': 'تنظیمات V2Ray',
      'v2ray-config-desc': 'تولید کانفیگ مسیریابی V2Ray',
      'sni-spoof': 'جعل SNI',
      'sni-spoof-desc': 'تغییر SNI در لینک‌های VMESS، VLESS و Trojan',
      'http-repeater': 'تکرارکننده HTTP',
      'http-repeater-desc': 'ارسال درخواست‌های HTTP سفارشی',
      'obfuscated-files': 'فایل‌های مبهم',
      'obfuscated-files-desc': 'رمزگذاری فایل به Base64 برای Bash، CMD یا PowerShell',
      'rss-feeds': 'خوراک خبری',
      'rss-feeds-desc': 'خوراک اخبار امنیتی از ExploitDB، Cisco، CVE و CXSecurity',
      'notepad': 'یادداشت',
      'notepad-desc': 'یادداشت مارک‌داون با ذخیره در مرورگر',
      'mega-scanner': 'اسکنر یکپارچه',
      'mega-scanner-desc': '۷ ابزار اسکن در یک ابزار - IP، پورت، CDN، DNS، شبکه، سرعت، جغرافیا',
      'v2ray-modifier': 'تغییر کانفیگ V2Ray',
      'v2ray-modifier-desc': 'تغییر آی‌پی و پورت در کانفیگ‌های VMESS، VLESS، WireGuard، Trojan',
      'network-diag': 'تشخیص شبکه',
      'network-diag-desc': 'پینگ، traceroute، MTR، هدر HTTP، تست سرعت، بررسی packet loss',
      'dns-hunter': 'DNS هانتر',
      'dns-hunter-desc': 'رکوردهای DNS، بررسی latency، تست نشت، Reverse DNS، اسکن CIDR',
      'cdn-finder': 'یابنده CDN',
      'cdn-finder-desc': 'یافتن IPهای سریع CDN از Cloudflare، Gcore، Akamai، Google، Azure',
      'nova-install': 'ویزارد NovaProxy',
      'nova-install-desc': 'راهنمای گام به گام استقرار NovaProxy روی Cloudflare Workers',
    },
    close: 'بستن',
    loading: 'در حال بارگذاری...',
    langSwitch: 'English',
    themeLight: 'روشن',
    themeDark: 'تاریک',
    themeAuto: 'خودکار',
  },
};
function tr(key) { const keys = key.split('.'); let v = i18n[state.lang]; for (const k of keys) { v = v?.[k]; } return v ?? key; }

// ── Tool Registry ─────────────────────────────────────
const CATEGORIES = ['recon', 'payload', 'system', 'crypto', 'config', 'utility'];
const CATEGORY_EMOJI = { recon:'🌐', payload:'💣', system:'🖥️', crypto:'🔐', config:'⚙️', utility:'📦' };

const TOOLS = [
  { id:'ip-scanner',     cat:'recon' },  { id:'ip-info',        cat:'recon' },
  { id:'dns-lookup',     cat:'recon' },  { id:'network-checker',cat:'recon' },
  { id:'port-scanner',   cat:'recon' },  { id:'cdn-scanner',    cat:'recon' },
  { id:'reverse-shell',  cat:'payload' },{ id:'xss-payloads',   cat:'payload' },
  { id:'sqli-payloads',  cat:'payload' },{ id:'lfi-payloads',   cat:'payload' },
  { id:'msf-venom',      cat:'payload' },
  { id:'linux-cmds',     cat:'system' }, { id:'powershell-cmds',cat:'system' },
  { id:'tty-shell',      cat:'system' }, { id:'file-transfer',  cat:'system' }, { id:'obfuscated-files',cat:'system' },
  { id:'encoder',        cat:'crypto' }, { id:'hash-generator', cat:'crypto' },
  { id:'aes-crypto',     cat:'crypto' }, { id:'uuid-gen',       cat:'crypto' },
  { id:'v2ray-config',   cat:'config' }, { id:'sni-spoof',      cat:'config' },
  { id:'http-repeater',  cat:'config' },
  { id:'notepad',        cat:'utility' }, { id:'rss-feeds',      cat:'utility' },
  { id:'mega-scanner',   cat:'recon' },  { id:'network-diag',   cat:'recon' },
  { id:'dns-hunter',     cat:'recon' },  { id:'cdn-finder',     cat:'recon' },
  { id:'v2ray-modifier', cat:'config' }, { id:'nova-install',   cat:'config' },
];

const TOOL_MAP = {}; TOOLS.forEach(t => { TOOL_MAP[t.id] = t; });

const toolModules = {};
async function loadTool(id) {
  if (toolModules[id]) return toolModules[id];
  const mod = await import(`./tools/${id}.js`);
  toolModules[id] = mod;
  return mod;
}

// ── Render ─────────────────────────────────────────────
function render() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <nav id="navbar" style="position:fixed;top:env(safe-area-inset-top);left:0;right:0;z-index:40;height:56px;border-bottom:1px solid var(--border);background:color-mix(in srgb,var(--background) 80%,transparent);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);transition:transform .3s">
      <div style="display:flex;height:100%;align-items:center;gap:8px;padding:0 16px;max-width:1600px;margin:0 auto">
        <div style="display:flex;align-items:center;gap:6px">
          <button id="hamburgerBtn" class="btn btn-icon btn-ghost jn-mobile-only" aria-label="Menu" style="font-size:1.25rem;padding:6px">☰</button>
          <a href="#" id="logoBtn" style="display:inline-flex;align-items:center;gap:8px;padding:4px 8px;border-radius:8px;font-size:1.05rem;font-weight:600;text-decoration:none;color:var(--foreground);white-space:nowrap">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            <span class="tracking-tight"><span style="font-weight:700">Maddix</span> <span style="font-weight:300;opacity:.8">Tools</span></span>
          </a>
        </div>
        <div class="jn-desktop-only" style="display:flex;align-items:center;gap:2px;margin-left:12px" id="navLinks">
          <a href="#" class="nav-link" data-section="home"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>${tr('navHome')}</a>
          <a href="#" class="nav-link" data-section="tools"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>${tr('navTools')}</a>
          <a href="#" class="nav-link" data-section="about"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>${tr('navAbout')}</a>
        </div>
        <div style="margin-left:auto;display:flex;align-items:center;gap:6px">
          <button id="themeBtn" class="btn btn-icon btn-ghost" aria-label="Toggle theme" style="font-size:1.1rem;padding:6px">${state.isDark?'☀️':'🌙'}</button>
          <button id="langBtn" class="btn btn-ghost" style="font-size:.8125rem;padding:.375rem .625rem;white-space:nowrap">${tr('langSwitch')}</button>
        </div>
      </div>
    </nav>

    <main id="mainContent" class="jn-container" style="padding-top:16px">
      <!-- Home Section -->
      <section id="section-home" class="section" style="min-height:40vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:64px 16px">
        <h1 id="heroTitle" style="font-size:clamp(2rem,5vw,3.5rem);font-weight:700;margin:0 0 8px;letter-spacing:-.03em;display:flex;align-items:center;justify-content:center;gap:12px"><svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>${tr('brand')}</h1>
        <p id="heroTagline" style="font-size:1.125rem;color:var(--muted-foreground);margin:0 0 32px;max-width:500px">${tr('tagline')}</p>
        <div style="position:relative;width:100%;max-width:480px">
          <input id="searchInput" type="search" placeholder="${tr('search')}" style="width:100%;padding:12px 16px;border-radius:9999px;border:1px solid var(--input);background:var(--card);color:var(--foreground);font-size:1rem;outline:none;box-sizing:border-box;box-shadow:0 2px 8px rgba(0,0,0,.06)">
        </div>
      </section>

      <!-- Tools Section -->
      <section id="section-tools" class="section">
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:24px" id="categoryFilters">
          <button class="btn cat-filter active" data-cat="">${state.lang==='fa'?'همه':'All'}</button>
          ${CATEGORIES.map(c => `<button class="btn cat-filter" data-cat="${c}">${CATEGORY_EMOJI[c]} ${tr('categories.'+c)}</button>`).join('')}
        </div>
        <div id="toolGrid" class="grid grid-cols-1" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr))"></div>
        <div id="noResults" class="hidden" style="text-align:center;padding:48px 16px;color:var(--muted-foreground)">${state.lang==='fa'?'ابزاری یافت نشد':'No tools found'}</div>
      </section>

      <!-- About Section -->
      <section id="section-about" class="section" style="padding:32px 16px">
        <h2 class="section-title" id="aboutTitle">${state.lang==='fa'?'درباره مادیکس تولز':'About Maddix Tools'}</h2>
        <p id="aboutDesc" style="color:var(--muted-foreground);max-width:600px;line-height:1.6">${state.lang==='fa'?'مادیکس تولز یک ایستگاه کاری امنیتی مبتنی بر مرورگر است. این مجموعه شامل ابزارهای شناسایی، تولید پیلود، رمزنگاری، شبکه و ابزارهای کاربردی می‌باشد.':'Maddix Tools is a browser-based security workstation. Includes reconnaissance, payload generation, cryptography, networking, and utility tools.'}</p>
        <p style="margin-top:16px;color:var(--muted-foreground)">${state.lang==='fa'?'ساخته شده توسط':'Built by'} <a href="https://github.com/nima-ha" target="_blank" rel="noopener" style="text-decoration:underline;color:var(--action)">Nima Ha</a></p>
      </section>
    </main>

    <footer>${tr('footer')} &mdash; <a href="https://github.com/nima-ha/Maddix-tools" target="_blank" rel="noopener" style="text-decoration:underline">GitHub</a></footer>

    <!-- Mobile Menu -->
    <div id="mobileMenuOverlay" class="hidden" style="position:fixed;inset:0;z-index:70;background:rgba(0,0,0,.4)"></div>
    <div id="mobileMenu" class="hidden" style="position:fixed;top:0;left:0;bottom:0;z-index:71;width:280px;background:var(--background);box-shadow:2px 0 12px rgba(0,0,0,.15);padding:16px;overflow-y:auto">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <span style="font-weight:600;font-size:1.125rem">${tr('navTools')}</span>
        <button id="mobileMenuClose" class="btn btn-icon btn-ghost">✕</button>
      </div>
      <nav style="display:flex;flex-direction:column;gap:4px">
        <a href="#" class="nav-link mobile-nav-link" data-section="home" style="display:flex;align-items:center;gap:10px;padding:10px 12px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>${tr('navHome')}</a>
        <a href="#" class="nav-link mobile-nav-link" data-section="tools" style="display:flex;align-items:center;gap:10px;padding:10px 12px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>${tr('navTools')}</a>
        <a href="#" class="nav-link mobile-nav-link" data-section="about" style="display:flex;align-items:center;gap:10px;padding:10px 12px"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>${tr('navAbout')}</a>
      </nav>
    </div>

    <!-- Tool Drawer -->
    <div id="drawerOverlay" class="hidden" style="position:fixed;inset:0;z-index:60;background:rgba(0,0,0,.4);transition:opacity .35s ease"></div>
    <div id="drawer" class="hidden" style="position:fixed;bottom:0;left:0;right:0;z-index:61;background:var(--background);border-radius:var(--radius) var(--radius) 0 0;box-shadow:0 -4px 24px rgba(0,0,0,.15);display:flex;flex-direction:column;max-height:90vh;transition:transform .35s cubic-bezier(.32,.72,0,1)">
      <div style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-bottom:1px solid var(--border);flex-shrink:0">
        <span id="drawerEmoji" style="font-size:1.25rem"></span>
        <span id="drawerTitle" style="flex:1;font-size:1rem;font-weight:600"></span>
        <button id="drawerCloseBtn" class="btn btn-icon btn-ghost">✕</button>
      </div>
      <div id="drawerBody" style="flex:1;overflow-y:auto;padding:16px;min-height:200px"></div>
    </div>
  `;

  bindEvents();
  renderToolGrid();
  applyDir();
}

// ── Tool Grid ──────────────────────────────────────────
function renderToolGrid() {
  const grid = document.getElementById('toolGrid');
  const noRes = document.getElementById('noResults');
  let tools = TOOLS;
  if (state.activeCategory) tools = tools.filter(t => t.cat === state.activeCategory);
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    tools = tools.filter(tool => {
      const title = tr('tools.'+tool.id).toLowerCase();
      const desc = tr('tools.'+tool.id+'-desc').toLowerCase();
      return title.includes(q) || desc.includes(q) || tool.id.includes(q);
    });
  }
  if (tools.length === 0) { grid.innerHTML = ''; noRes.classList.remove('hidden'); return; }
  noRes.classList.add('hidden');
  grid.innerHTML = tools.map(tool => {
    const emoji = { recon:'🌐',payload:'💣',system:'🖥️',crypto:'🔐',config:'⚙️',utility:'📦' }[tool.cat]||'🔧';
    return `<div class="jn-card tool-card" data-tool="${tool.id}" style="cursor:pointer;padding:16px;border-radius:var(--radius)">
      <span class="card-emoji">${emoji}</span>
      <h3 style="margin:0 0 4px;font-size:1rem;font-weight:600;padding-right:2rem">${tr('tools.'+tool.id)}</h3>
      <p style="margin:0;font-size:.8125rem;color:var(--muted-foreground);line-height:1.4;padding-right:2rem">${tr('tools.'+tool.id+'-desc')}</p>
    </div>`;
  }).join('');
  grid.querySelectorAll('.tool-card').forEach(el => {
    el.addEventListener('click', () => openTool(el.dataset.tool));
  });
}

// ── Open Tool ──────────────────────────────────────────
async function openTool(id) {
  const info = TOOL_MAP[id];
  if (!info) return;
  state.activeTool = id;
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  const title = document.getElementById('drawerTitle');
  const emojiEl = document.getElementById('drawerEmoji');
  const body = document.getElementById('drawerBody');
  title.textContent = tr('tools.'+id);
  emojiEl.textContent = CATEGORY_EMOJI[info.cat]||'🔧';
  body.innerHTML = `<div style="text-align:center;padding:40px"><div class="jn-spinner"></div><p style="margin-top:12px;color:var(--muted-foreground)">${tr('loading')}</p></div>`;
  drawer.classList.remove('hidden');
  overlay.classList.remove('hidden');
  drawer.style.transform = 'translateY(100%)';
  overlay.style.opacity = '0';
  requestAnimationFrame(() => {
    drawer.style.transform = 'translateY(0)';
    overlay.style.opacity = '1';
  });
  try {
    const mod = await loadTool(id);
    const html = mod.default ? mod.default(state.lang) : '';
    body.innerHTML = `<div id="content" class="tool-content">${(typeof html === 'string') ? html : (html || '')}</div>`;
    if (mod.init && typeof mod.init === 'function') {
      setTimeout(() => mod.init(state.lang), 0);
    }
  } catch(e) {
    body.innerHTML = `<p style="color:var(--destructive);padding:20px">Error: ${e.message}</p>`;
  }
}

function closeDrawer() {
  const drawer = document.getElementById('drawer');
  const overlay = document.getElementById('drawerOverlay');
  drawer.style.transform = 'translateY(100%)'; overlay.style.opacity = '0';
  setTimeout(() => { drawer.classList.add('hidden'); overlay.classList.add('hidden'); }, 350);
  state.activeTool = null;
}

function closeMobileMenu() {
  document.getElementById('mobileMenu')?.classList.add('hidden');
  document.getElementById('mobileMenuOverlay')?.classList.add('hidden');
}

// ── Events ─────────────────────────────────────────────
function bindEvents() {
  // Theme toggle
  document.getElementById('themeBtn').addEventListener('click', () => {
    if (state.theme === 'auto') state.theme = 'dark';
    else if (state.theme === 'dark') state.theme = 'light';
    else state.theme = 'auto';
    applyTheme();
    savePrefs();
  });

  // Lang toggle
  document.getElementById('langBtn').addEventListener('click', () => {
    state.lang = state.lang === 'en' ? 'fa' : 'en';
    applyDir();
    rerender();
    savePrefs();
  });

  // Search
  document.getElementById('searchInput').addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderToolGrid();
  });

  // Category filters
  document.querySelectorAll('.cat-filter').forEach(el => {
    el.addEventListener('click', () => {
      document.querySelectorAll('.cat-filter').forEach(b => b.classList.remove('active'));
      el.classList.add('active');
      state.activeCategory = el.dataset.cat || null;
      renderToolGrid();
    });
  });

  // Nav links
  document.querySelectorAll('.nav-link').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const id = 'section-'+el.dataset.section;
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });

  // Logo click
  document.getElementById('logoBtn').addEventListener('click', (e) => {
    e.preventDefault();
    if (window.scrollY === 0) {
      document.getElementById('section-home').scrollIntoView({ behavior:'smooth' });
    } else {
      window.scrollTo({ top:0, behavior:'smooth' });
    }
  });

  // Hamburger menu
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('mobileMenuOverlay');
    if (menu) { menu.classList.remove('hidden'); if (overlay) overlay.classList.remove('hidden'); }
  });

  // Mobile menu close
  document.getElementById('mobileMenuClose')?.addEventListener('click', closeMobileMenu);
  document.getElementById('mobileMenuOverlay')?.addEventListener('click', closeMobileMenu);

  // Mobile nav links
  document.querySelectorAll('.mobile-nav-link').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
      const id = 'section-'+el.dataset.section;
      document.getElementById(id)?.scrollIntoView({ behavior:'smooth', block:'start' });
    });
  });

  // Drawer close
  document.getElementById('drawerCloseBtn').addEventListener('click', closeDrawer);
  document.getElementById('drawerOverlay').addEventListener('click', closeDrawer);

  // Keyboard: Escape to close drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Mobile detection
  const onResize = () => {
    state.isMobile = window.innerWidth < 768;
  };
  window.addEventListener('resize', onResize);
}

// ── Theme ──────────────────────────────────────────────
function applyTheme() {
  const t = state.theme;
  let isDark = t === 'dark' || (t === 'auto' && window.matchMedia('(prefers-color-scheme:dark)').matches);
  state.isDark = isDark;
  document.documentElement.classList.toggle('dark', isDark);
  document.getElementById('themeBtn').textContent = isDark ? '☀️' : '🌙';
}

// ── Dir ────────────────────────────────────────────────
function applyDir() {
  const dir = state.lang === 'fa' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = state.lang;
  // Show/hide lang-specific elements
  document.querySelectorAll('[lang]').forEach(el => {
    el.style.display = el.getAttribute('lang') === state.lang ? '' : 'none';
  });
}

// ── Prefs ──────────────────────────────────────────────
function savePrefs() {
  localStorage.setItem(LS_KEY, JSON.stringify({ theme:state.theme, lang:state.lang }));
}

function loadPrefs() {
  try {
    const p = JSON.parse(localStorage.getItem(LS_KEY) || '{}');
    state.theme = p.theme || 'auto';
    state.lang = p.lang || 'en';
  } catch(e) {}
}

// ── Rerender ───────────────────────────────────────────
function rerender() {
  // Update only text nodes that change with language
  document.getElementById('heroTitle').textContent = '🛠️ '+tr('brand');
  document.getElementById('heroTagline').textContent = tr('tagline');
  document.getElementById('searchInput').placeholder = tr('search');
  const navLinks = document.querySelectorAll('.nav-link');
  if (navLinks[0]) navLinks[0].textContent = tr('navHome');
  if (navLinks[1]) navLinks[1].textContent = tr('navTools');
  if (navLinks[2]) navLinks[2].textContent = tr('navAbout');
  document.getElementById('langBtn').textContent = tr('langSwitch');
  document.querySelectorAll('.cat-filter').forEach(el => {
    const cat = el.dataset.cat;
    if (!cat) el.textContent = state.lang==='fa'?'همه':'All';
    else el.textContent = CATEGORY_EMOJI[cat]+' '+tr('categories.'+cat);
  });
  document.querySelector('footer').innerHTML = tr('footer')+' &mdash; <a href="https://github.com/nima-ha/Maddix-tools" target="_blank" rel="noopener" style="text-decoration:underline">GitHub</a>';
  // About section
  const aboutTitle = document.getElementById('aboutTitle');
  const aboutDesc = document.getElementById('aboutDesc');
  if (aboutTitle) aboutTitle.textContent = state.lang==='fa'?'درباره مادیکس تولز':'About Maddix Tools';
  if (aboutDesc) aboutDesc.textContent = state.lang==='fa'?'مادیکس تولز یک ایستگاه کاری امنیتی مبتنی بر مرورگر است. شامل ابزارهای شناسایی، تولید پیلود، رمزنگاری، شبکه و اسکنر یکپارچه می‌باشد.':'Maddix Tools is a browser-based security workstation. Includes recon, payload, crypto, network, and unified scanner tools.';
  // Mobile menu
  const mobileTitle = document.querySelector('#mobileMenu > div > span');
  if (mobileTitle) mobileTitle.textContent = tr('navTools');
  document.querySelectorAll('.mobile-nav-link').forEach(el => {
    const s = el.dataset.section;
    if (s === 'home') el.textContent = tr('navHome');
    else if (s === 'tools') el.textContent = tr('navTools');
    else if (s === 'about') el.textContent = tr('navAbout');
  });
  renderToolGrid();
}

// ── Boot ───────────────────────────────────────────────
function boot() {
  try {
    loadPrefs();
    state.isDark = state.theme === 'dark' || (state.theme === 'auto' && window.matchMedia('(prefers-color-scheme:dark)').matches);
    render();
    applyTheme();
  } catch(e) {
    console.error('Maddix boot error:', e);
  }
  // Always remove loading screen
  removeLoading();
  // Watch OS theme
  window.matchMedia('(prefers-color-scheme:dark)').addEventListener('change', () => {
    if (state.theme === 'auto') applyTheme();
  });
  // Scroll-aware nav highlight
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-link').forEach(el => {
          el.classList.toggle('active', entry.target.id === 'section-'+el.dataset.section);
        });
      }
    });
  }, { threshold:0.3 });
  ['home','tools','about'].forEach(id => {
    const el = document.getElementById('section-'+id);
    if (el) observer.observe(el);
  });
}

function removeLoading() {
  const loading = document.getElementById('jn-loading');
  if (!loading) return;
  loading.classList.add('jn-loading-stage-1');
  setTimeout(() => {
    loading.classList.add('jn-loading-stage-2');
    setTimeout(() => {
      try { loading.remove(); } catch(e) {}
      const app = document.getElementById('app');
      if (app) app.classList.add('jn-app-enter');
    }, 250);
  }, 400);
}

document.addEventListener('DOMContentLoaded', boot);
if (document.readyState !== 'loading') boot();

})();
