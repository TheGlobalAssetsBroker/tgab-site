import { usePageEffects } from "../hooks/usePageEffects";

export default function PricingDetailsPage() {
  usePageEffects("pricing-details", "Pricing Details — TGAB | Core vs Prime account comparison", "A side-by-side comparison of TGAB's Core and Prime account tiers — commissions, account minimums, platform access, support, and roadmap-market priority.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <h1>Core vs Prime, <span className="it">side by side.</span></h1>
          <p>Both tiers trade the same launch markets, under the same regulatory structure, on the same commission schedule. The difference is service priority. Here's exactly what that means.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <h2>Which tier <span className="it">fits</span> you.</h2>
            </div>
            <a className="btn btn-ghost" href="/pricing">Full fee schedule →</a>
          </div>
          <div className="rv">
            <table className="tbl">
              <thead><tr><th>Feature</th><th>Core</th><th>Prime</th></tr></thead>
              <tbody>
                <tr><td>Equities &amp; ETF commission</td><td className="mono">$0.003/share, $1.50 min</td><td className="mono">$0.003/share, $1.50 min</td></tr>
                <tr><td>Listed options commission</td><td className="mono">$0.50/contract, $1.00 min</td><td className="mono">$0.50/contract, $1.00 min</td></tr>
                <tr><td>Account minimum</td><td className="mono">None</td><td className="mono">None</td></tr>
                <tr><td>Account opening</td><td className="mono">Free</td><td className="mono">Free</td></tr>
                <tr><td>Trading platform</td><td>Via <span data-platform-name>a third-party platform</span></td><td>Via <span data-platform-name>a third-party platform</span></td></tr>
                <tr><td>Client portal</td><td>TGAB client portal</td><td>TGAB client portal</td></tr>
                <tr><td>Support response</td><td>Standard, 1–2 business days</td><td className="mono">Priority routing</td></tr>
                <tr><td>Onboarding</td><td>Standard KYC/AML</td><td>Dedicated onboarding assistance</td></tr>
                <tr><td>New roadmap markets</td><td>Standard rollout</td><td>Priority access as they open</td></tr>
              </tbody>
            </table>
          </div>
          <p className="sub rv">Roadmap markets — futures, FX, metals, indices, fixed income, digital assets — are not yet live for either tier and remain subject to regulatory approval. Commission figures are TGAB's indicative pre-launch schedule; the final, binding schedule is confirmed at onboarding. Tier terms will be confirmed at launch.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <h2>Ready to <span className="it">register?</span></h2>
            </div>
          </div>
          <div className="cards cards-2 rv">
            <div className="card">
              <span className="glyph">01</span>
              <h3>Core</h3>
              <p>Full market access, straightforward terms — for traders getting started.</p>
            </div>
            <div className="card">
              <span className="glyph">02</span>
              <h3>Prime</h3>
              <p>Priority service and roadmap access — for active, professional traders.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap rv">
          <h2>Pick your tier, <span className="it grad-text">register</span> your interest.</h2>
          <p>Both tiers are open for early registration — final terms confirmed at launch.</p>
          <div className="hero-cta">
            <a className="btn btn-amber btn-lg" href="/register" data-cta="signup" data-magnetic>Open account</a>
            <a className="btn btn-ghost btn-lg" href="/pricing">See fee schedule</a>
          </div>
        </div>
      </section>
    </main>
    
  );
}
