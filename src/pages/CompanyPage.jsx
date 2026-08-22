import { usePageEffects } from "../hooks/usePageEffects";

export default function CompanyPage() {
  usePageEffects("company", "Company — TGAB | About The Global Assets Broker", "About TGAB: a multi-asset brokerage group being built on a regulated Investment Dealer licence, institutional clearing, and a global structure.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <span className="eyebrow">01 / Company</span>
          <h1>Built like an institution. <span className="it">Run</span> like one.</h1>
          <p>The Global Assets Broker is being assembled the slow, correct way: regulated structure first, institutional counterparties second, clients third — and only once every approval is in hand.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <span className="eyebrow">02 / Mission</span>
              <h2>Serious market access for <span className="it">serious</span> traders.</h2>
              <p className="sub">Most offshore brokers compete on leverage and marketing. TGAB competes on structure: real clearing relationships, real regulatory standing, and pricing you can read in one page. We are building the brokerage we would want to trade through ourselves.</p>
            </div>
            <div className="panel-art rv glow-edge">
              <div className="row"><span>FOUNDED</span><b>2025 — in formation</b></div>
              <div className="row"><span>MANDATE</span><b>Full Service Dealer (ex. Underwriting)</b></div>
              <div className="row"><span>REGULATOR (APPLIED)</span><b>Licence application in progress</b></div>
              <div className="row"><span>CLEARING</span><b>Institutional clearing partners</b></div>
              <div className="row"><span>LAUNCH MARKETS</span><b>US equities &amp; options</b></div>
            </div>
          </div>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <span className="eyebrow">03 / Principles</span>
              <h2>How we <span className="it">operate.</span></h2>
            </div>
          </div>
          <div className="cards rv">
            <div className="card"><span className="glyph">/1</span><h3>Compliance before commerce</h3><p>No client is onboarded and no order is taken until licensing and approvals are complete.</p></div>
            <div className="card"><span className="glyph">/2</span><h3>Qualified people</h3><p>Dealing is overseen by qualified dealers meeting the regulator's fit-and-proper standards.</p></div>
            <div className="card"><span className="glyph">/3</span><h3>Institutional counterparties</h3><p>We partner with established clearing, banking, and technology providers — not the cheapest ones.</p></div>
            <div className="card"><span className="glyph">/4</span><h3>Plain dealing</h3><p>Fees, risks, and limitations in plain language. If we can't explain it simply, we don't offer it.</p></div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap rv">
          <h2>Follow the <span className="it grad-text">build.</span></h2>
          <p>Register your interest and we'll keep you informed as TGAB moves toward launch.</p>
          <div className="hero-cta">
            <a className="btn btn-amber btn-lg" href="/register" data-cta="signup" data-magnetic>Register interest</a>
            <a className="btn btn-ghost btn-lg" href="/contact">Contact us</a>
          </div>
        </div>
      </section>
    </main>
    
  );
}
