import { usePageEffects } from "../hooks/usePageEffects";

export default function AccessibilityPage() {
  usePageEffects("accessibility", "Accessibility Statement — TGAB", "TGAB&#39;s accessibility commitment and how to report an accessibility issue on this website.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <span className="eyebrow">01 / Accessibility</span>
          <h1>Built to be usable by <span className="it">everyone.</span></h1>
          <p>An honest statement of where we're aiming and what's actually implemented today.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="legal-layout">
            <nav className="legal-nav" aria-label="Accessibility statement sections">
              <a href="#aim">Our aim</a>
              <a href="#implemented">What's implemented</a>
              <a href="#known">Known limitations</a>
              <a href="#contact">Report an issue</a>
            </nav>
            <div className="legal-body rv">
              <h2 id="aim">Our aim</h2>
              <p>We aim for this website to be usable by as many people as possible, and to work toward WCAG 2.1 Level AA as a practical target. This is a stated aim, not a certification — we have not undergone third-party accessibility audit or conformance testing.</p>
              <h2 id="implemented">What's implemented today</h2>
              <ul>
                <li>Semantic HTML landmarks and heading structure throughout</li>
                <li>Visible keyboard focus states on links, buttons, and interactive controls</li>
                <li>The site contains no animation, parallax, or auto-playing motion</li>
                <li>Colour is never the only signal (e.g. price moves pair colour with ▲/▼ glyphs, not colour alone)</li>
                <li>Interactive components (navigation menu, FAQ accordion) are operable by keyboard and expose <code>aria-expanded</code> / <code>aria-controls</code> state</li>
                <li>Text and background colours are chosen for contrast against the dark theme</li>
              </ul>
              <h2 id="known">Known limitations</h2>
              <p>As a pre-launch site under active development, some interior pages may not yet meet every WCAG success criterion. We treat accessibility issues as bugs, not feature requests, and prioritise fixes reported to us.</p>
              <h2 id="contact">Report an issue</h2>
              <p>If you encounter an accessibility barrier anywhere on this site, contact <a href="mailto:accounts@tgab.net?subject=Accessibility">accounts@tgab.net</a> with "Accessibility" in the subject line, including the page and what happened. We aim to acknowledge accessibility reports within five business days, in line with our <a href="/legal#complaints">complaints process</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  );
}
