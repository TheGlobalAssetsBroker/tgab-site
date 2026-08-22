import { usePageEffects } from "../hooks/usePageEffects";

export default function ContactPage() {
  usePageEffects("contact", "Contact — TGAB | Talk to The Global Assets Broker", "Contact TGAB — enquiries, partnerships, and priority onboarding for launch.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <span className="eyebrow">01 / Contact</span>
          <h1>Straight answers, <span className="it">fast.</span></h1>
          <p>Whether you're a prospective client, a liquidity or technology partner, or press — write to us and a person will reply.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="contact-grid">
            <div className="rv">
              <span className="eyebrow">02 / Direct</span>
              <div className="contact-line"><span className="k">General</span><a href="mailto:accounts@tgab.net">accounts@tgab.net</a></div>
              <div className="contact-line"><span className="k">Partnerships</span><a href="mailto:accounts@tgab.net?subject=Partnerships">accounts@tgab.net</a></div>
              <div className="contact-line"><span className="k">Compliance &amp; legal</span><a href="mailto:accounts@tgab.net?subject=Compliance%20and%20legal">accounts@tgab.net</a></div>
              <div className="contact-line"><span className="k">Careers</span><a href="/careers">careers.html →</a></div>
              <div className="contact-line"><span className="k">Self-serve help</span><a href="/support">Help centre →</a></div>
              <div className="contact-line"><span className="k">Response time</span><span>Within 1–2 business days</span></div>
            </div>
            <div className="rv">
              <span className="eyebrow">03 / Before you write</span>
              <ul className="checks">
                <li>TGAB is in formation and not yet accepting clients or client money</li>
                <li>To be first in line at launch, use “Open account” to register interest</li>
                <li>Vendors and partners: include your firm, product, and regulatory standing</li>
                <li>We never ask for payments, deposits, or credentials by email</li>
              </ul>
              <div className="hero-cta">
                <a className="btn btn-amber" href="/register" data-cta="signup" data-magnetic>Register interest</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="form-card rv">
            <span className="eyebrow">04 / Register interest</span>
            <h2>Ready to get <span className="it">started?</span></h2>
            <p className="sub">Skip the email — register your interest directly with your name, email, and a few quick details, and we'll be in touch once TGAB is licensed and live.</p>
            <div className="hero-cta">
              <a className="btn btn-amber btn-lg" href="/register" data-magnetic>Register interest →</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  );
}
