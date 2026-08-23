import { useState } from "react";
import { Link } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";

export default function LoginPage() {
  usePageEffects("login", "Client Login — TGAB", "Secure client portal login for TGAB account holders.");
  const [showPassword, setShowPassword] = useState(false);
  const [notice, setNotice] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) {
      event.currentTarget.reportValidity();
      return;
    }
    setNotice("The TGAB client portal is not live yet. Register your interest and we’ll let you know when secure access opens.");
  };

  return (
    <main className="login-page">
      <section className="login-section">
        <div className="wrap login-grid">
          <div className="login-intro rv">
            <Link className="login-back" to="/">← Back to TGAB</Link>
            <span className="eyebrow">Client portal</span>
            <h1>Welcome <span className="it">back.</span></h1>
            <p>Secure access for TGAB clients to manage onboarding, funding, documents, and account settings.</p>
            <div className="login-assurance">
              <span aria-hidden="true">01</span>
              <div><b>Protected access</b><small>Two-factor authentication will be required for every live client account.</small></div>
            </div>
            <div className="login-assurance">
              <span aria-hidden="true">02</span>
              <div><b>Your details stay private</b><small>TGAB will never ask for your password by email or telephone.</small></div>
            </div>
          </div>

          <div className="login-card rv">
            <div className="form-heading">
              <span className="eyebrow">Account access</span>
              <h2>Log in.</h2>
              <p>Enter the details associated with your client account.</p>
            </div>
            <form className="login-form" onSubmit={submit} noValidate>
              <div className="form-field">
                <label htmlFor="login-email">Email address</label>
                <input id="login-email" name="email" type="email" autoComplete="username" required />
              </div>
              <div className="form-field">
                <div className="login-label-row">
                  <label htmlFor="login-password">Password</label>
                  <Link to="/support">Forgot password?</Link>
                </div>
                <div className="password-field">
                  <input id="login-password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required minLength="8" />
                  <button type="button" onClick={() => setShowPassword((value) => !value)} aria-label={`${showPassword ? "Hide" : "Show"} password`}>
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
              <label className="remember-field"><input type="checkbox" name="remember" /> <span>Keep me signed in on this device</span></label>
              <button className="btn btn-amber btn-lg submit-button" type="submit">Continue <span aria-hidden="true">→</span></button>
              {notice && <p className="login-notice" role="status">{notice}</p>}
            </form>
            <div className="login-register">
              <span>Not a client yet?</span>
              <Link to="/register">Register your interest →</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
