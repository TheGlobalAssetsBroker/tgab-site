import { usePageEffects } from "../hooks/usePageEffects";

export default function PricingPage() {
  usePageEffects("pricing", "Pricing — TGAB | Transparent commissions &amp; fees", "TGAB&#39;s indicative pre-launch fee schedule for US equities, options, and account services. Transparent pricing with no hidden spreads.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <span className="eyebrow">01 / Pricing</span>
          <h1>One schedule. No <span className="it">surprises.</span></h1>
          <p>The figures below are TGAB's indicative pre-launch schedule. The final, binding fee schedule will be published before launch and provided to every client during onboarding.</p>
          <p><a href="/pricing-details">Compare Core vs Prime account tiers →</a></p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <span className="eyebrow">02 / Trading</span>
              <h2><span className="it">Commissions.</span></h2>
            </div>
            <span className="tag">Indicative — subject to change</span>
          </div>
          <div className="rv">
            <table className="tbl">
              <thead><tr><th>Product</th><th>Commission</th><th>Minimum</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>US Equities</td><td className="mono">$0.003 / share</td><td className="mono">$1.50 / order</td><td>Exchange, regulatory &amp; clearing pass-throughs apply</td></tr>
                <tr><td>US Listed Options</td><td className="mono">$0.50 / contract</td><td className="mono">$1.00 / order</td><td>ORF, OCC and exchange fees passed through at cost</td></tr>
                <tr><td>ETFs</td><td className="mono">$0.003 / share</td><td className="mono">$1.50 / order</td><td>Priced as US equities</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <span className="eyebrow">03 / Account</span>
              <h2>Account &amp; service <span className="it">fees.</span></h2>
            </div>
          </div>
          <div className="rv">
            <table className="tbl">
              <thead><tr><th>Item</th><th>Fee</th><th>Notes</th></tr></thead>
              <tbody>
                <tr><td>Account opening</td><td className="mono">Free</td><td>Full digital onboarding</td></tr>
                <tr><td>Account maintenance</td><td className="mono">Free</td><td>No monthly or inactivity charge at launch</td></tr>
                <tr><td>Market data</td><td className="mono">At cost</td><td>Real-time exchange data subscriptions passed through</td></tr>
                <tr><td>Deposits</td><td className="mono">Free</td><td>Correspondent bank charges may apply</td></tr>
                <tr><td>Withdrawals (wire)</td><td className="mono">$25</td><td>Per outgoing international wire</td></tr>
                <tr><td>Statements &amp; confirmations</td><td className="mono">Free</td><td>Electronic delivery</td></tr>
              </tbody>
            </table>
          </div>
          <p className="sub rv">All fees are quoted in USD unless stated otherwise. Regulatory, exchange, and clearing charges are passed through at cost without markup. Margin lending rates, short locate fees, and roadmap asset classes will be published in the final schedule.</p>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap rv">
          <h2>Know your costs <span className="it grad-text">before</span> you trade.</h2>
          <p>Questions about the schedule? We'll answer them straight.</p>
          <div className="hero-cta">
            <a className="btn btn-amber btn-lg" href="/register" data-cta="signup" data-magnetic>Open account</a>
            <a className="btn btn-ghost btn-lg" href="/contact">Ask about pricing</a>
          </div>
        </div>
      </section>
    </main>
    
  );
}
