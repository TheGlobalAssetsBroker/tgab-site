import { Link } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";

export default function PlatformsPage() {
  usePageEffects("platforms", "Platforms — TGAB | Trading platform &amp; client portal", "TGAB clients trade through a licensed third-party trading platform, paired with a regulated client portal for onboarding, funding, and account management.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <h1>One account. A <span className="it">proven</span> platform.</h1>
          <p>TGAB doesn't build proprietary trading software — we integrate a licensed, established third-party platform for execution, and pair it with a dedicated client portal for everything around the trade. Two specialists, not one compromise.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <h2>Trade on <span className="it" data-platform-name>a proven platform</span>.</h2>
            </div>
            <span className="tag">Platform subject to final confirmation</span>
          </div>
          <p className="sub rv">TGAB clients execute through <span data-platform-name>an established third-party trading platform</span> — professional trading software, not a TGAB-built application. It ships with its own web, desktop, and mobile clients, so the same account works across every screen without TGAB maintaining separate native apps. The exact platform is not yet finalised; this page will be updated to name the confirmed provider before launch.</p>
          <div className="cards cards-3 rv">
            <div className="card">
              <span className="glyph">WEB</span>
              <h3>Web trading</h3>
              <p>Streaming quotes, charting, options chains, and order entry from any modern browser — nothing to install.</p>
            </div>
            <div className="card">
              <span className="glyph">DSK</span>
              <h3>Desktop application</h3>
              <p>The platform vendor's native desktop client for active traders — multi-monitor layouts, hotkeys, and fast order routing.</p>
            </div>
            <div className="card">
              <span className="glyph">MOB</span>
              <h3>Mobile app</h3>
              <p>The platform vendor's iOS/Android apps for monitoring positions and managing orders on the move.</p>
            </div>
          </div>
          <p className="sub rv">Trading-platform provider agreements typically require the underlying platform to be credited — we won't hide who actually powers execution, whichever platform is finally confirmed.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <h2>Everything around the trade, in <span className="it">one</span> portal.</h2>
              <p className="sub">Onboarding, funding, and account administration run through TGAB's client portal — institutional-grade account infrastructure, not custom-built software. That's a deliberate choice: proven infrastructure for the parts of the business that carry the most compliance weight.</p>
              <ul className="checks">
                <li>Digital KYC/AML onboarding with document upload, inside the client portal</li>
                <li>Multi-currency deposits and withdrawals</li>
                <li>Real-time balances, positions, and margin visibility</li>
                <li>Statements, trade confirmations, and tax documents</li>
                <li>Two-factor authentication as standard on every login</li>
              </ul>
              <div className="hero-cta">
                <a className="btn btn-amber" href="/register" data-cta="signup">Open account</a>
                <Link className="btn btn-ghost" to="/login" data-cta="login">Client login</Link>
              </div>
            </div>
            <div className="panel-art rv glow-edge">
              <div className="row"><span>PORTAL</span><b>Regulated client portal</b></div>
              <div className="row"><span>ACCOUNT</span><b>Verified · Active</b></div>
              <div className="row"><span>EQUITY</span><b>248,310.55 USD</b></div>
              <div className="row"><span>BUYING POWER</span><b>496,621.10 USD</b></div>
              <div className="row"><span>OPEN P/L</span><b>+4,182.20</b></div>
              <div className="row"><span>2FA</span><b>Enabled</b></div>
            </div>
          </div>
          <p className="sub rv">Sample cabinet figures shown for illustration only — no real accounts exist while TGAB remains in formation.</p>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap rv">
          <h2>Trade on infrastructure that's already <span className="it">proven.</span></h2>
          <p>Priority access to the platform and portal for early registrants at launch.</p>
          <div className="hero-cta">
            <a className="btn btn-amber btn-lg" href="/register" data-cta="signup">Open account</a>
          </div>
        </div>
      </section>
    </main>
    
  );
}
