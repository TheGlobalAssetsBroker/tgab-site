// Cloudflare Pages Function — POST /api/register
// Receives the "Register interest" form and emails it via Resend.

const NOTIFY_TO = "accounts@tgab.net";
const NOTIFY_FROM = "TGAB Website <accounts@tgab.net>";

const TIER_LABELS = { core: "Core", prime: "Prime", unsure: "Not sure yet" };
const HEARD_LABELS = { search: "Search", social: "Social media", referral: "Referral", other: "Other" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status = 200, headers = {}) {
  return Response.json(body, { status, headers });
}

function escapeHtml(value) {
  return String(value || "").replace(/[<>&"]/g, (character) => (
    { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[character]
  ));
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  // Honeypot: silently accept bot submissions without sending an email.
  if (data.company_website) {
    return json({ ok: true });
  }

  const required = ["fullName", "email", "country"];
  for (const field of required) {
    if (!data[field] || !String(data[field]).trim()) {
      return json(
        { ok: false, error: "Please fill in your name, email, and country — these are required." },
        400,
      );
    }
  }

  const email = String(data.email).trim();
  if (!EMAIL_RE.test(email)) {
    return json({ ok: false, error: "Please enter a valid email address." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  if (!apiKey) {
    return json(
      { ok: false, error: "Registration is temporarily unavailable. Please email accounts@tgab.net directly." },
      500,
    );
  }

  const tierLabel = TIER_LABELS[data.tier] || "Not specified";
  const heardLabel = HEARD_LABELS[data.heard] || "Not specified";
  const fullName = String(data.fullName).trim();

  const html = `
    <h2>New TGAB interest registration</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><b>Full name</b></td><td>${escapeHtml(fullName)}</td></tr>
      <tr><td><b>Email</b></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><b>Country</b></td><td>${escapeHtml(data.country)}</td></tr>
      <tr><td><b>Phone</b></td><td>${escapeHtml(data.phone) || "—"}</td></tr>
      <tr><td><b>Account tier interest</b></td><td>${escapeHtml(tierLabel)}</td></tr>
      <tr><td><b>Heard about TGAB via</b></td><td>${escapeHtml(heardLabel)}</td></tr>
    </table>
  `.trim();

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_TO],
        reply_to: email,
        subject: `New interest registration — ${fullName}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      return json(
        { ok: false, error: "We couldn't send your registration. Please try again or email accounts@tgab.net." },
        502,
      );
    }

    return json({ ok: true });
  } catch {
    return json(
      { ok: false, error: "We couldn't send your registration. Please try again or email accounts@tgab.net." },
      500,
    );
  }
}

export function onRequestGet() {
  return json(
    { ok: false, error: "Method not allowed." },
    405,
    { Allow: "POST" },
  );
}
