// Password gate for client proposals at /p/<slug>.
// Passwords live in the PROPOSAL_PASSWORDS env var as JSON: {"dolci-piu": "secret"}.
// A correct password sets a cookie signed with PROPOSAL_SECRET; changing a
// password invalidates every cookie issued for that slug.

export const config = { matcher: ['/p', '/p/:path*'] };

const COOKIE_DAYS = 30;

export default async function middleware(request) {
  const url = new URL(request.url);
  const slug = url.pathname.split('/')[2] || '';
  const passwords = readPasswords();
  const password = passwords[slug];
  const secret = process.env.PROPOSAL_SECRET;

  if (!slug || !password || !secret) return notFound();

  const cookieName = `pp_${slug.replace(/[^a-z0-9-]/gi, '')}`;
  const expected = await sign(secret, `${slug}:${password}`);

  if (request.method === 'POST') {
    const form = await request.formData().catch(() => null);
    const attempt = String(form?.get('password') || '').trim();
    if (attempt && safeEqual(await sign(secret, `${slug}:${attempt}`), expected)) {
      return new Response(null, {
        status: 303,
        headers: {
          Location: `/p/${slug}`,
          'Set-Cookie': `${cookieName}=${expected}; Path=/p/${slug}; Max-Age=${COOKIE_DAYS * 86400}; HttpOnly; Secure; SameSite=Lax`,
          'Cache-Control': 'no-store',
        },
      });
    }
    return lockPage(slug, true);
  }

  const cookie = readCookie(request.headers.get('cookie') || '', cookieName);
  if (cookie && safeEqual(cookie, expected)) return; // let the static page through

  return lockPage(slug, false);
}

function readPasswords() {
  try {
    return JSON.parse(process.env.PROPOSAL_PASSWORDS || '{}');
  } catch {
    return {};
  }
}

async function sign(secret, value) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode(value));
  return [...new Uint8Array(sig)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

function safeEqual(a, b) {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

function readCookie(header, name) {
  const match = header.split(/;\s*/).find((c) => c.startsWith(`${name}=`));
  return match ? match.slice(name.length + 1) : null;
}

const baseHeaders = {
  'Content-Type': 'text/html; charset=utf-8',
  'Cache-Control': 'no-store',
  'X-Robots-Tag': 'noindex, nofollow',
};

function notFound() {
  return new Response('Not found', { status: 404, headers: { ...baseHeaders, 'Content-Type': 'text/plain' } });
}

function lockPage(slug, failed) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>Private proposal</title>
  <link rel="icon" href="/brand/maya/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Hanken+Grotesk:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="/maya.css?v=21" />
  <link rel="stylesheet" href="/proposal.css?v=1" />
</head>
<body class="lock">
  <main class="lock-card">
    <a href="/" class="logo"><span class="wm">humayun<span class="red">.</span></span></a>
    <p class="eyebrow">Private proposal</p>
    <h1 class="h3">This page is for its recipient.</h1>
    <p class="body">Enter the password from your email to read it.</p>
    <form method="POST" action="/p/${slug}">
      <label for="pw" class="meta-label">Password</label>
      <input id="pw" name="password" type="password" autocomplete="current-password" autofocus required />
      ${failed ? '<p class="lock-error">That password didn\'t work. Check the email and try again.</p>' : ''}
      <button type="submit" class="btn btn-primary">Open proposal</button>
    </form>
  </main>
</body>
</html>`;
  return new Response(html, { status: failed ? 401 : 200, headers: baseHeaders });
}
