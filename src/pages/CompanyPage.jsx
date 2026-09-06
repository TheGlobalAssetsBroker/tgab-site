import { usePageEffects } from "../hooks/usePageEffects";

export default function CompanyPage() {
  usePageEffects("company", "Company — TGAB | About The Global Assets Broker", "About TGAB: a licensed Investment Dealer (Full Service Dealer, excluding Underwriting) built around institutional clearing and a global structure.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <h1>Built like an institution. <span className="it">Run</span> like one.</h1>
          <p>The Global Assets Broker is built on a licensed structure, institutional counterparties, and a compliance-first approach to serving clients.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <h2>Serious market access for <span className="it">serious</span> traders.</h2>
              <p className="sub">Most offshore brokers compete on leverage and marketing. TGAB competes on structure: real clearing relationships, real regulatory standing, and pricing you can read in one page. We are building the brokerage we would want to trade through ourselves.</p>
            </div>
            <div className="panel-art rv glow-edge">
              <div className="row"><span>FOUNDED</span><b>2025</b></div>
              <div className="row"><span>LICENCE TYPE</span><b>Investment Dealer (Full Service Dealer, excluding Underwriting)</b></div>
              <div className="row"><span>REGULATOR</span><b>Financial Services Commission, Mauritius · Licence No. GB26206568</b></div>
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
              <h2>How we <span className="it">operate.</span></h2>
            </div>
          </div>
          <div className="cards rv">
            <div className="card"><span className="glyph">/1</span><h3>Compliance before commerce</h3><p>Client onboarding and trading are governed by TGAB's regulatory obligations and internal approvals.</p></div>
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
