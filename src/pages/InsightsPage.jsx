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
          <h1>Investing and trading guides. <span className="it">Clearer</span> decisions.</h1>
          <p>Learn how to start investing online and research stocks. Then compare ETFs, understand order types and explore listed options before you make a decision.</p>
        </div>
      </section>
      <section className="block" aria-labelledby="guides-title">
        <div className="wrap">
          <div className="head-row"><div><span className="section-kicker">The foundations</span><h2 id="guides-title">Five guides. <span className="it">Clearer decisions.</span></h2><p className="sub">Explore account basics, stock research, investment choices, order types and listed options. Each guide includes practical examples and links to primary investor education sources.</p></div></div>
          <InsightCards articles={articles} />
          <p className="sub">General education from TGAB. Examples are hypothetical and are not investment recommendations. Product availability remains subject to eligibility and final launch terms.</p>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap">
          <h2>Your next step starts with <span className="it grad-text">understanding.</span></h2>
          <p>Explore TGAB's planned market coverage and indicative pricing, or register to receive launch updates.</p>
          <div className="hero-cta"><Link className="btn btn-amber btn-lg" to="/markets/">Explore markets</Link><Link className="btn btn-ghost btn-lg" to="/register/">Get launch updates</Link></div>
        </div>
      </section>
    </main>
    
  );
}
