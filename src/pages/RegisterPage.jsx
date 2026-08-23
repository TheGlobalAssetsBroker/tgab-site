import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";

export default function RegisterPage() {
  usePageEffects("register", "Register Interest — TGAB", "Register your interest in a TGAB account.");
  const [params] = useSearchParams();
  const requestedTier = ["core", "prime"].includes(params.get("tier")) ? params.get("tier") : "unsure";
  const [status, setStatus] = useState({ loading: false, error: "", success: false });

  const submit = async (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      setStatus({ loading: false, error: "Please check the highlighted fields.", success: false });
      return;
    }
    const data = Object.fromEntries(new FormData(event.currentTarget).entries());
    if (!data.fullName?.trim() || !data.email?.trim() || !data.country?.trim()) {
      setStatus({ loading: false, error: "Please fill in your name, email, and country.", success: false });
      return;
    }
    setStatus({ loading: true, error: "", success: false });
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || !result.ok) throw new Error(result.error || "Something went wrong. Please try again.");
      setStatus({ loading: false, error: "", success: true });
    } catch (error) {
      setStatus({ loading: false, error: error.message || "Something went wrong. Please try again.", success: false });
    }
  };

  return (
    <main className="register-page">
      <section className="page-hero register-hero">
        <div className="wrap rv">
          <h1>Be first through the <span className="it">door.</span></h1>
          <p>TGAB is in formation and not yet accepting clients or client money. Register now and we’ll keep you informed as we move toward launch.</p>
          <div className="register-steps"><span><b>01</b> Register interest</span><span><b>02</b> Receive launch updates</span><span><b>03</b> Priority onboarding</span></div>
        </div>
      </section>
      <section className="block register-block">
        <div className="wrap register-grid">
          <aside className="register-aside rv">
            <span className="eyebrow">What happens next</span>
            <h2>A direct line to <span className="it">launch.</span></h2>
            <p>Registering interest is not an account application and we do not collect money or identity documents at this stage.</p>
            <ul className="checks"><li>Priority launch updates</li><li>Early onboarding invitation</li><li>No account minimum</li><li>No payment or deposit today</li></ul>
            <div className="security-note"><i /> <span><b>Your security matters.</b> TGAB will never request passwords, payments, or deposits by email.</span></div>
          </aside>
          <div className="form-card rv">
            {status.success ? (
              <div className="form-success"><span className="success-mark">✓</span><span className="eyebrow">Interest registered</span><h2>Thanks — received.</h2><p>We’ve received your details and will be in touch via email.</p></div>
            ) : (
              <form className="interest-form" onSubmit={submit} noValidate>
                <div className="form-heading"><span className="eyebrow">Your details</span><h2>Register your interest.</h2><p>Fields marked with an asterisk are required.</p></div>
                <div className="form-grid">
                  <Field label="Full name" name="fullName" autoComplete="name" />
                  <Field label="Email address" name="email" type="email" autoComplete="email" />
                  <Field label="Country of residence" name="country" autoComplete="country-name" placeholder="e.g. United Kingdom" />
                  <Field label="Phone number (optional)" name="phone" type="tel" autoComplete="tel" />
                  <div className="form-field"><label htmlFor="tier">Which account are you interested in?</label><select key={requestedTier} id="tier" name="tier" defaultValue={requestedTier}><option value="core">Core</option><option value="prime">Prime</option><option value="unsure">Not sure yet</option></select></div>
                  <div className="form-field"><label htmlFor="heard">How did you hear about TGAB? (optional)</label><select id="heard" name="heard" defaultValue=""><option value="">Prefer not to say</option><option value="search">Search</option><option value="social">Social media</option><option value="referral">Referral</option><option value="other">Other</option></select></div>
                </div>
                <p className="form-disclaimer">We’ll be in touch by email once TGAB is licensed and live. We never ask for payments, deposits, or credentials by email.</p>
                <button className="btn btn-amber btn-lg submit-button" type="submit" disabled={status.loading}>{status.loading ? "Submitting…" : "Register interest"}<span aria-hidden="true">↗</span></button>
                {status.error && <p className="form-error" role="alert">{status.error}</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

function Field({ label, name, type = "text", ...props }) {
  return <div className="form-field"><label htmlFor={name}>{label}{name !== "phone" && <span aria-hidden="true"> *</span>}</label><input id={name} name={name} type={type} required={name !== "phone"} {...props} /></div>;
}
