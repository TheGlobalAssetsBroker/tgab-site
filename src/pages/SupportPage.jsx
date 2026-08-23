import { usePageEffects } from "../hooks/usePageEffects";

export default function SupportPage() {
  usePageEffects("support", "Help Centre — TGAB | Support topics &amp; how it works", "Self-serve help topics for TGAB: account &amp; KYC, funding, trading platform, fees, and security — plus how the onboarding flow will work at launch.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <h1>Find your answer, <span className="it">fast.</span></h1>
          <p>Browse by topic below, or skip straight to the <a href="/faq">FAQ</a> or <a href="/contact">contact us</a> directly.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <h2>Help by <span className="it">category.</span></h2>
            </div>
          </div>
          <div className="cards rv">
            <a className="card topic-card" href="/faq">
              <span className="glyph">/1</span><h3>Account &amp; KYC</h3>
              <p>Eligibility, verification documents, and how digital onboarding through the TGAB client portal will work.</p>
              <span className="tag-count">FAQ · Account &amp; KYC →</span>
            </a>
            <a className="card topic-card" href="/platforms">
              <span className="glyph">/2</span><h3>Funding &amp; withdrawals</h3>
              <p>Deposit and withdrawal methods, processing, and statements — all handled through the client portal.</p>
              <span className="tag-count">Platforms →</span>
            </a>
            <a className="card topic-card" href="/platforms">
              <span className="glyph">/3</span><h3>Trading platform</h3>
              <p>How execution, order types, and market data work on <span data-platform-name>the trading platform</span>.</p>
              <span className="tag-count">Platforms →</span>
            </a>
            <a className="card topic-card" href="/pricing">
              <span className="glyph">/4</span><h3>Fees &amp; pricing</h3>
              <p>Commission schedule, account fees, and how exchange pass-throughs are billed.</p>
              <span className="tag-count">Pricing →</span>
            </a>
            <a className="card topic-card" href="/security">
              <span className="glyph">/5</span><h3>Security</h3>
              <p>Asset segregation, KYC/AML, two-factor authentication, and data handling.</p>
              <span className="tag-count">Security &amp; trust →</span>
            </a>
            <a className="card topic-card" href="/legal">
              <span className="glyph">/6</span><h3>Legal &amp; regulatory</h3>
              <p>Regulatory status, risk disclosure, terms of use, privacy, and complaints handling.</p>
              <span className="tag-count">Legal centre →</span>
            </a>
          </div>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <h2>From registration to your <span className="it">first</span> trade.</h2>
            </div>
          </div>
          <div className="steps rv">
            <div className="step"><h3>Register interest</h3><p>Use "Open account" now to be prioritised for onboarding once TGAB is licensed and live.</p></div>
            <div className="step"><h3>Verify &amp; open</h3><p>Complete digital KYC/AML in the TGAB client portal — identity, address, and suitability checks.</p></div>
            <div className="step"><h3>Fund your account</h3><p>Deposit through the client portal; funds are cleared and held per TGAB's segregation policy.</p></div>
            <div className="step"><h3>Trade launch markets</h3><p>Access US equities, listed options, and ETFs via <span data-platform-name>the trading platform</span>, with more asset classes as the roadmap opens.</p></div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap rv">
          <h2>Didn't find it? <span className="it">Ask</span> a person.</h2>
          <p>Compliance, partnerships, and general enquiries all reach a real inbox.</p>
          <div className="hero-cta">
            <a className="btn btn-amber btn-lg" href="/contact">Contact us</a>
            <a className="btn btn-ghost btn-lg" href="/faq">Browse FAQ</a>
          </div>
        </div>
      </section>
    </main>
    
  );
}
