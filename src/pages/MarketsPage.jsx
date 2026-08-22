import { usePageEffects } from "../hooks/usePageEffects";

export default function MarketsPage() {
  usePageEffects("markets", "Markets — TGAB | US equities, options &amp; multi-asset access", "Trade US equities, listed options, and ETFs at launch, with futures, FX, metals, and more on the TGAB roadmap. Market hours and instrument coverage.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <span className="eyebrow">01 / Markets</span>
          <h1>US markets first. The <span className="it">world</span> next.</h1>
          <p>TGAB launches with deep access to the world's most liquid market — US equities and listed options, cleared through regulated institutional infrastructure — and expands from there under a full-service dealer mandate.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <span className="eyebrow">02 / Live board</span>
              <h2>Today's <span className="it">tape.</span></h2>
            </div>
          </div>
          <ul aria-label="Indicative market quotes">
            <li>SPY: 634.12, up 0.42%</li>
            <li>QQQ: 562.88, up 0.61%</li>
            <li>AAPL: 228.40, down 0.32%</li>
            <li>MSFT: 512.70, up 0.28%</li>
            <li>NVDA: 171.35, up 1.24%</li>
          </ul>
          <p>Quotes may be delayed or indicative. Not for trading decisions.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <span className="eyebrow">03 / Coverage</span>
              <h2>Instrument <span className="it">coverage.</span></h2>
            </div>
          </div>
          <div className="rv">
            <table className="tbl">
              <thead><tr><th>Asset class</th><th>Venues / underlyings</th><th>Order types</th><th>Status</th></tr></thead>
              <tbody>
                <tr><td>US Equities</td><td>NYSE, Nasdaq, major US venues</td><td>Market, limit, stop, stop-limit</td><td className="mono">At launch</td></tr>
                <tr><td>Listed Options</td><td>US-listed single names, ETFs, indices</td><td>Single-leg &amp; multi-leg strategies</td><td className="mono">At launch</td></tr>
                <tr><td>ETFs</td><td>US-listed index, sector &amp; thematic funds</td><td>Market, limit, stop</td><td className="mono">At launch</td></tr>
                <tr><td>Futures</td><td>Index, rates, commodities</td><td>—</td><td className="mono">Roadmap</td></tr>
                <tr><td>Foreign Exchange</td><td>Majors, minors, EM crosses</td><td>—</td><td className="mono">Roadmap</td></tr>
                <tr><td>Metals &amp; Commodities</td><td>Precious metals, energy, softs</td><td>—</td><td className="mono">Roadmap</td></tr>
                <tr><td>Indices</td><td>Global benchmark indices</td><td>—</td><td className="mono">Roadmap</td></tr>
                <tr><td>Fixed Income</td><td>Government &amp; corporate debt</td><td>—</td><td className="mono">Roadmap</td></tr>
                <tr><td>Digital Assets</td><td>Subject to applicable approvals</td><td>—</td><td className="mono">Roadmap</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="block" id="hours">
        <div className="wrap">
          <div className="head-row rv">
            <div>
              <span className="eyebrow">04 / Market hours</span>
              <h2>US session <span className="it">times.</span></h2>
            </div>
          </div>
          <div className="rv">
            <table className="tbl">
              <thead><tr><th>Session</th><th>Eastern Time (ET)</th><th>London (UK)</th><th>Dubai (GST)</th></tr></thead>
              <tbody>
                <tr><td>Pre-market</td><td className="mono">04:00 – 09:30</td><td className="mono">09:00 – 14:30</td><td className="mono">12:00 – 17:30</td></tr>
                <tr><td>Regular session</td><td className="mono">09:30 – 16:00</td><td className="mono">14:30 – 21:00</td><td className="mono">17:30 – 00:00</td></tr>
                <tr><td>After-hours</td><td className="mono">16:00 – 20:00</td><td className="mono">21:00 – 01:00</td><td className="mono">00:00 – 04:00</td></tr>
                <tr><td>Options (regular)</td><td className="mono">09:30 – 16:00</td><td className="mono">14:30 – 21:00</td><td className="mono">17:30 – 00:00</td></tr>
              </tbody>
            </table>
          </div>
          <p className="sub rv">London and Dubai columns reflect standard offsets during US daylight saving time; times shift by one hour outside DST. US markets are closed on US public holidays and close early on certain days around holidays.</p>
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap rv">
          <h2>Ready when the <span className="it grad-text">bell</span> rings.</h2>
          <p>Open an account and be trading US markets from day one of launch.</p>
          <div className="hero-cta">
            <a className="btn btn-amber btn-lg" href="/register" data-cta="signup" data-magnetic>Open account</a>
            <a className="btn btn-ghost btn-lg" href="/pricing">See pricing</a>
          </div>
        </div>
      </section>
    </main>
    
  );
}
