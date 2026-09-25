import { usePageEffects } from "../hooks/usePageEffects";
import { Link } from "react-router-dom";
import { articles, insightsMeta } from "../content/insights";
import { InsightCards } from "../components/InsightCards";

export default function InsightsPage() {
  usePageEffects("insights", insightsMeta.title, insightsMeta.description);
  return (
    <main>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">TGAB Insights</span>
          <h1>Know the market. <span className="it">Understand</span> the trade.</h1>
          <p>Practical guides to US stocks, ETFs and listed options. Understand what you own, how orders work and where the risks sit before you make a decision.</p>
        </div>
      </section>
      <section className="block" aria-labelledby="guides-title">
        <div className="wrap">
          <div className="head-row"><div><span className="section-kicker">The foundations</span><h2 id="guides-title">Three guides. <span className="it">Clearer decisions.</span></h2><p className="sub">Start with the investment, move to the order, then explore the mechanics of listed options. Each guide includes worked examples and links to primary investor education sources.</p></div></div>
          <InsightCards articles={articles} />
          <p className="sub">General education from TGAB. Examples are hypothetical and are not investment recommendations. Product availability remains subject to eligibility and final launch terms.</p>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap">
          <h2>Your next step starts with <span className="it grad-text">understanding.</span></h2>
          <p>Explore TGAB's planned market coverage and indicative pricing, or register to receive launch updates.</p>
          <div className="hero-cta"><Link className="btn btn-amber btn-lg" to="/markets">Explore markets</Link><Link className="btn btn-ghost btn-lg" to="/register">Get launch updates</Link></div>
        </div>
      </section>
    </main>
    
  );
}
