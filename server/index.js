// Microservizio form-to-mail self-hostato per Pintour Bus.
// - Captcha math firmato lato server (HMAC) + honeypot
// - Invio email via SMTP (Nodemailer)
// Config tramite variabili d'ambiente (mai commitare i segreti).
const express = require('express');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SECRET = process.env.CAPTCHA_SECRET || 'change-this-secret-in-production';
const SMTP_HOST = process.env.SMTP_HOST || '';
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587', 10);
const SMTP_USER = process.env.SMTP_USER || '';
const SMTP_PASS = process.env.SMTP_PASS || '';
const MAIL_TO = process.env.MAIL_TO || SMTP_USER;
const MAIL_FROM = process.env.MAIL_FROM || SMTP_USER;
const PORT = parseInt(process.env.PORT || '3000', 10);

// Honeypot + campi da escludere dal corpo della mail
const SKIP = new Set(['website', 'captchaId', 'captchaAnswer']);

function sign(payload) {
  return crypto.createHmac('sha256', SECRET).update(payload).digest('hex');
}

function verifyCaptcha(id, userAnswer) {
  if (!id || userAnswer === '' || userAnswer == null) return false;
  try {
    const sep = id.lastIndexOf('.');
    if (sep < 0) return false;
    const payloadB64 = id.slice(0, sep);
    const sig = id.slice(sep + 1);
    const payload = Buffer.from(payloadB64, 'base64').toString();
    const expected = sign(payload);
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return false;
    const parts = payload.split('|');
    const answer = parts[0];
    const exp = parseInt(parts[1], 10);
    if (Date.now() > exp) return false;
    return parseInt(answer, 10) === parseInt(userAnswer, 10);
  } catch (e) {
    return false;
  }
}

// --- Captcha challenge (10 min di validita) ---
app.get('/api/captcha', (req, res) => {
  const a = Math.floor(Math.random() * 8) + 1;
  const b = Math.floor(Math.random() * 8) + 1;
  const plus = Math.random() < 0.5;
  let answer, q;
  if (plus) { answer = a + b; q = `${a} + ${b}`; }
  else { const x = Math.max(a, b), y = Math.min(a, b); answer = x - y; q = `${x} - ${y}`; }
  const exp = Date.now() + 10 * 60 * 1000;
  const payload = `${answer}|${exp}`;
  const id = `${Buffer.from(payload).toString('base64')}.${sign(payload)}`;
  res.json({ id, q });
});

app.get('/api/health', (req, res) => res.json({ ok: true, smtp: !!SMTP_HOST }));

function buildText(kind, fields, meta) {
  const lines = [];
  lines.push(`Nuova richiesta (${kind}) - pintourbus.com`);
  lines.push('----------------------------------------');
  lines.push(`Data: ${new Date().toISOString()}`);
  lines.push(`IP: ${meta.ip}`);
  lines.push('----------------------------------------');
  for (const [k, v] of Object.entries(fields)) {
    if (SKIP.has(k) || !v) continue;
    lines.push(`${k}: ${v}`);
  }
  return lines.join('\n');
}

async function sendMail(kind, fields, meta) {
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });
  await transporter.sendMail({
    from: MAIL_FROM,
    to: MAIL_TO,
    subject: `[Pintour] Nuova richiesta ${kind}`,
    text: buildText(kind, fields, meta),
    replyTo: fields.email || MAIL_FROM,
  });
}

function handle(kind) {
  return async (req, res) => {
    const fields = (req.body && typeof req.body === 'object') ? req.body : {};
    const meta = { ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress || '' };
    // Honeypot: bot che compilano il campo nascosto vengono silenziosamente accettati senza mail
    if (fields.website && String(fields.website).trim() !== '') return res.json({ ok: true });
    if (!verifyCaptcha(fields.captchaId, fields.captchaAnswer)) {
      return res.status(400).json({ ok: false, error: 'captcha' });
    }
    if (!SMTP_HOST) {
      console.error('SMTP_HOST non configurato');
      return res.status(500).json({ ok: false, error: 'config' });
    }
    try {
      await sendMail(kind, fields, meta);
      res.json({ ok: true });
    } catch (e) {
      console.error('Mail error:', e.message);
      res.status(500).json({ ok: false, error: 'server' });
    }
  };
}

app.post('/api/contact', handle('contatti'));
app.post('/api/quote', handle('tour'));

app.listen(PORT, () => console.log(`pintourbus-api in ascolto su :${PORT}`));
