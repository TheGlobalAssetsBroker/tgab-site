import { usePageEffects } from "../hooks/usePageEffects";

export default function SecurityPage() {
  usePageEffects("security", "Security &amp; Trust — TGAB | Client asset protection &amp; infrastructure", "How TGAB is built to protect client assets and data: segregation, KYC/AML, two-factor authentication, and regulated clearing infrastructure.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <span className="eyebrow">01 / Security &amp; trust</span>
          <h1>Protection built in, <span className="it">not</span> bolted on.</h1>
          <p>TGAB does not accept a single client or a single dollar until the structure protecting them is in place. This page sets out how — segregation, screening, access control, and regulated infrastructure.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <span className="eyebrow">02 / The essentials</span>
              <h2>Four things we won't <span className="it">compromise</span> on.</h2>
            </div>
          </div>
          <div className="cards rv">
            <div className="card">
              <h3>Client asset segregation</h3>
              <p>Client funds and positions are to be held separately from TGAB's own operating capital, in line with applicable regulatory requirements — never commingled to fund the business.</p>
            </div>
            <div className="card">
              <h3>KYC / AML on every account</h3>
              <p>Identity verification, source-of-funds checks, and sanctions/PEP screening run before any account is approved to trade — no exceptions for speed.</p>
            </div>
            <div className="card">
              <h3>Two-factor authentication</h3>
              <p>Every client cabinet login is protected by 2FA as standard, alongside encrypted transport for data moving between your device and the platform.</p>
            </div>
            <div className="card">
              <h3>Regulated infrastructure</h3>
              <p>Clearing and custody run through regulated institutional clearing partners — established counterparties, not a proprietary or offshore workaround.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="split">
            <div className="rv">
              <span className="eyebrow">03 / Regulatory posture</span>
              <h2>Licensed operations <span className="it">first.</span></h2>
              <p className="sub">TGAB's licensed dealing entity has applied for an Investment Dealer licence and does not yet hold it. Until it does, TGAB does not offer services, accept clients, or hold client money — this is a compliance floor, not a marketing line.</p>
              <ul className="checks">
                <li>Dealing overseen by qualified dealers meeting the regulator's fit-and-proper standards</li>
                <li>Compliance sign-off precedes commercial launch, not the other way round</li>
                <li>Group governance, capital, and compliance standards set at the holding-company level</li>
                <li><span>Full detail in the <a href="/legal#regulatory">regulatory status</a> section of our legal centre</span></li>
              </ul>
            </div>
            <div className="panel-art rv">
              <div className="row"><span>REGULATOR (APPLIED)</span><b>Licence application in progress</b></div>
              <div className="row"><span>LICENCE STATUS</span><b>Application in progress</b></div>
              <div className="row"><span>LICENCE NUMBER</span><b>To be confirmed on approval</b></div>
              <div className="row"><span>CLEARING &amp; CUSTODY</span><b>Institutional clearing partners</b></div>
              <div className="row"><span>INVESTOR PROTECTION SCHEME</span><b>To be confirmed by regulator</b></div>
            </div>
          </div>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <span className="eyebrow">04 / Data &amp; platform</span>
              <h2>How your <span className="it">data</span> is handled.</h2>
            </div>
          </div>
          <div className="cards rv">
            <div className="card"><span className="glyph">/1</span><h3>Encryption in transit</h3><p>Connections between your device and the client portal and trading platform are encrypted.</p></div>
            <div className="card"><span className="glyph">/2</span><h3>Access controls</h3><p>Internal access to client data and systems is role-restricted and logged.</p></div>
            <div className="card"><span className="glyph">/3</span><h3>Vendor diligence</h3><p>Clearing, portal, and platform providers are chosen for institutional standing, not lowest cost.</p></div>
            <div className="card"><span className="glyph">/4</span><h3>Data minimisation</h3><p>We collect what onboarding and regulation require — see our <a href="/legal#privacy">privacy notice</a>.</p></div>
          </div>
          <p className="sub rv">Specific technical certifications (e.g. SOC 2, ISO 27001) will be listed here if and when held — none are claimed today.</p>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap rv">
          <span className="eyebrow">05 / Questions</span>
          <h2>Ask us <span className="it">anything</span> about how this works.</h2>
          <p>Compliance and security questions go straight to the team building this structure.</p>
          <div className="hero-cta">
            <a className="btn btn-amber btn-lg" href="/contact">Contact compliance</a>
            <a className="btn btn-ghost btn-lg" href="/faq">Read the FAQ</a>
          </div>
        </div>
      </section>
    </main>
    
  );
}
