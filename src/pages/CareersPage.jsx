import { usePageEffects } from "../hooks/usePageEffects";

export default function CareersPage() {
  usePageEffects("careers", "Careers — TGAB | Building the founding team", "TGAB is in formation and building its founding team. No public job listings yet — write to us if you'd be a fit for a regulated brokerage build.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <h1>We're building the <span className="it">founding</span> team.</h1>
          <p>TGAB is in formation — there is no public job board yet, and we won't pretend otherwise. If you have relevant experience and want to be part of building a regulated brokerage from the ground up, we'd still like to hear from you.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="role-note rv">
            <p><b>No open roles are formally listed today.</b></p>
            <p>We're not going to invent job postings to look bigger than we are. What's true: TGAB is actively assembling the people needed to operate a licensed multi-asset brokerage — compliance, dealing, operations, and technology, among others — as our regulatory licensing process progresses. If that's the kind of build you want in on, send your background to <a href="mailto:accounts@tgab.net?subject=Careers">accounts@tgab.net</a> with "Careers" in the subject line and we'll keep it on file.</p>
          </div>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <h2>The kind of person who fits <span className="it">this</span> build.</h2>
            </div>
          </div>
          <div className="cards rv">
            <div className="card"><span className="glyph">/1</span><h3>Compliance-minded</h3><p>Comfortable with "we launch when it's approved" as a first principle, not a constraint to route around.</p></div>
            <div className="card"><span className="glyph">/2</span><h3>Institutional background</h3><p>Experience with regulated brokerages, clearing relationships, or dealer operations is directly relevant.</p></div>
            <div className="card"><span className="glyph">/3</span><h3>Plain communicators</h3><p>We write fees, risks, and process in language a client can actually follow — we look for the same internally.</p></div>
            <div className="card"><span className="glyph">/4</span><h3>Comfortable building early</h3><p>This is a pre-launch company. Process is still being written, not just executed.</p></div>
          </div>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap rv">
          <h2>Introduce <span className="it">yourself.</span></h2>
          <p>No formal application process yet — just a real inbox and a real read.</p>
          <div className="hero-cta">
            <a className="btn btn-amber btn-lg" href="mailto:accounts@tgab.net?subject=Careers">Email us</a>
            <a className="btn btn-ghost btn-lg" href="/company">About TGAB</a>
          </div>
        </div>
      </section>
    </main>
    
  );
}
