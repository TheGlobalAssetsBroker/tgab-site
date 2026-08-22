import { usePageEffects } from "../hooks/usePageEffects";

export default function CookiesPage() {
  usePageEffects("cookies", "Cookie Policy — TGAB", "How TGAB uses cookies and similar technologies on this website.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <span className="eyebrow">01 / Cookie policy</span>
          <h1>What this site <span className="it">stores</span> on your device.</h1>
          <p>A short, honest answer: not much.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="legal-layout">
            <nav className="legal-nav" aria-label="Cookie policy sections">
              <a href="#today">Today</a>
              <a href="#types">Cookie types</a>
              <a href="#changes">If this changes</a>
              <a href="#contact">Contact</a>
            </nav>
            <div className="legal-body rv">
              <h2 id="today">Current use</h2>
              <p>This website, as published, does not set analytics, advertising, or tracking cookies. It does not run third-party ad networks or behavioural tracking scripts. Any data fetched live (such as market quotes) is requested directly from the data provider by your browser and is not used to profile you.</p>
              <h2 id="types">Cookie types, for reference</h2>
              <ul>
                <li><b>Strictly necessary.</b> Not currently used by this marketing site. If the client portal (hosted separately) requires session cookies to keep you logged in, that will be disclosed at the point of login.</li>
                <li><b>Analytics / performance.</b> Not currently in use. If we add privacy-respecting analytics ahead of launch, this page will be updated first.</li>
                <li><b>Advertising / targeting.</b> Not used, and we don't plan to use them on this site.</li>
              </ul>
              <h2 id="changes">If this changes</h2>
              <p>Before launch, this policy will be reviewed alongside the client portal's own cookie usage, and — where legally required — a consent mechanism will be added. We won't silently start tracking without updating this page.</p>
              <h2 id="contact">Questions</h2>
              <p>Contact <a href="mailto:accounts@tgab.net">accounts@tgab.net</a> with any cookie or privacy question. See also our <a href="/legal#privacy">privacy notice</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  );
}
