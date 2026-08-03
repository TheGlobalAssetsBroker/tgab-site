// Cloudflare Pages Function — POST /api/register
// Receives the "Register interest" form and emails it via Resend.
//
// Required environment variable (set in Cloudflare Pages project settings,
// Settings -> Environment variables): RESEND_API_KEY
// Never hardcode the key here — it's read from context.env at request time.

const NOTIFY_TO = "accounts@tgab.net";
const NOTIFY_FROM = "TGAB Website <accounts@tgab.net>";

const TIER_LABELS = { core: "Core", prime: "Prime", unsure: "Not sure yet" };
const HEARD_LABELS = { search: "Search", social: "Social media", referral: "Referral", other: "Other" };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function escapeHtml(value) {
  return String(value || "").replace(/[<>&"]/g, (c) => (
    { "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]
  ));
}

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch (err) {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  // Honeypot — bots that fill every field will trip this. Pretend success
  // so they don't learn anything, without sending an email.
  if (data.company_website) {
    return json({ ok: true });
  }

  const required = ["fullName", "email", "country"];
  for (const field of required) {
    if (!data[field] || !String(data[field]).trim()) {
      return json({ ok: false, error: "Please fill in your name, email, and country — these are required." }, 400);
    }
  }

  if (!EMAIL_RE.test(String(data.email).trim())) {
    return json({ ok: false, error: "Please enter a valid email address." }, 400);
  }

  const apiKey = env.RESEND_API_KEY;
  // TEMPORARY DIAGNOSTIC — remove once the email-delivery issue is confirmed fixed.
  // Reveals only whether the var is present and its length, never the value itself.
  if (!apiKey) {
    return json({
      ok: false,
      error: "Registration is temporarily unavailable. Please email accounts@tgab.net directly.",
      debug: "RESEND_API_KEY_MISSING",
    }, 500);
  }

  const tierLabel = TIER_LABELS[data.tier] || "Not specified";
  const heardLabel = HEARD_LABELS[data.heard] || "Not specified";

  const html = `
    <h2>New TGAB interest registration</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      <tr><td><b>Full name</b></td><td>${escapeHtml(data.fullName)}</td></tr>
      <tr><td><b>Email</b></td><td>${escapeHtml(data.email)}</td></tr>
      <tr><td><b>Country</b></td><td>${escapeHtml(data.country)}</td></tr>
      <tr><td><b>Phone</b></td><td>${escapeHtml(data.phone) || "—"}</td></tr>
      <tr><td><b>Account tier interest</b></td><td>${escapeHtml(tierLabel)}</td></tr>
      <tr><td><b>Heard about TGAB via</b></td><td>${escapeHtml(heardLabel)}</td></tr>
    </table>
  `.trim();

  try {
    const resendResp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: NOTIFY_FROM,
        to: [NOTIFY_TO],
        reply_to: data.email,
        subject: `New interest registration — ${data.fullName}`,
        html,
      }),
    });

    // TEMPORARY DIAGNOSTIC — remove once the email-delivery issue is confirmed fixed.
    const resendBodyText = await resendResp.text().catch(() => "");
    if (!resendResp.ok) {
      return json({
        ok: false,
        error: "We couldn't send your registration. Please try again or email accounts@tgab.net.",
        debug: { resendStatus: resendResp.status, resendBody: resendBodyText.slice(0, 500) },
      }, 502);
    }

    return json({ ok: true, debug: { resendStatus: resendResp.status, resendBody: resendBodyText.slice(0, 500) } });
  } catch (err) {
    return json({
      ok: false,
      error: "We couldn't send your registration. Please try again or email accounts@tgab.net.",
      debug: "FETCH_THREW: " + String(err && err.message || err),
    }, 500);
  }
}

export async function onRequestGet() {
  return json({ ok: false, error: "Method not allowed." }, 405);
}
