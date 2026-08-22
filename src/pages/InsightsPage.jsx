import { usePageEffects } from "../hooks/usePageEffects";

export default function InsightsPage() {
  usePageEffects("insights", "Insights — TGAB | Market commentary, coming soon", "TGAB&#39;s market commentary and research will publish here as we approach launch. Nothing is posted yet.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <span className="eyebrow">01 / Insights</span>
          <h1>Market commentary, <span className="it">coming</span> soon.</h1>
          <p>This is where TGAB will publish market commentary and research once we're closer to launch. Nothing is posted yet — we'd rather leave the page empty than fill it with placeholder articles.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="coming-soon rv">
            <span className="eyebrow">02 / Status</span>
            <h2>Nothing published <span className="it">yet.</span></h2>
            <p className="sub">Register your interest to be notified when commentary starts publishing, or explore what's live today.</p>
            <div className="hero-cta">
              <a className="btn btn-amber btn-lg" href="/register" data-cta="signup">Get launch updates</a>
              <a className="btn btn-ghost btn-lg" href="/markets">Explore markets</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  );
}
