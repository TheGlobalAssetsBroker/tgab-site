import { usePageEffects } from "../hooks/usePageEffects";

const marketQuotes = [
  { symbol: "SPY", name: "S&P 500 ETF", price: "634.12", change: "+0.42%", direction: "up" },
  { symbol: "QQQ", name: "Nasdaq 100 ETF", price: "562.88", change: "0.00%", direction: "flat" },
  { symbol: "AAPL", name: "Apple", price: "228.40", change: "−0.32%", direction: "down" },
  { symbol: "MSFT", name: "Microsoft", price: "512.70", change: "−0.28%", direction: "down" },
  { symbol: "NVDA", name: "NVIDIA", price: "171.35", change: "+1.24%", direction: "up" },
];

function TrendIcon({ direction }) {
  if (direction === "flat") {
    return (
      <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
        <path d="M2 7h9M8 4l3 3-3 3" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 14 14" aria-hidden="true" focusable="false">
      <path d={direction === "up" ? "M3 11 11 3M6 3h5v5" : "M3 3l8 8M11 6v5H6"} />
    </svg>
  );
}

export default function MarketsPage() {
  usePageEffects("markets", "Markets — TGAB | US equities, options & multi-asset access", "Trade US equities, listed options, and ETFs at launch, with futures, FX, metals, and more on the TGAB roadmap. Market hours and instrument coverage.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <h1>US markets first. The <span className="it">world</span> next.</h1>
          <p>TGAB launches with deep access to the world's most liquid market — US equities and listed options, cleared through regulated institutional infrastructure — and expands from there under its Investment Dealer (Full Service Dealer, excluding Underwriting) licence.</p>
        </div>
      </section>
      <section className="block market-tape-section">
        <div className="wrap">
          <div className="head-row market-tape-heading rv">
            <div>
              <span className="section-kicker muted">Market snapshot</span>
              <h2>Today's <span className="it">tape.</span></h2>
            </div>
            <span className="market-tape-status"><i aria-hidden="true" /> Indicative pricing · USD</span>
          </div>
          <div className="market-tape-board rv">
            <div className="market-tape-board-header" aria-hidden="true">
              <span>Instrument</span><span>Last price / Change</span>
            </div>
            <ul className="market-quote-grid" aria-label="Indicative market quotes">
              {marketQuotes.map((quote) => (
                <li className={`market-quote market-quote-${quote.direction}`} key={quote.symbol}>
                  <div className="market-quote-label">
                    <strong>{quote.symbol}</strong>
                    <span>{quote.name}</span>
                  </div>
                  <div className="market-quote-value">
                    <span className="market-quote-price">{quote.price}</span>
                    <span className="market-quote-change"><TrendIcon direction={quote.direction} />{quote.change}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <p className="market-tape-disclaimer"><span aria-hidden="true">i</span> Quotes may be delayed or indicative and are provided for general information only. Not for trading decisions.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="head-row rv">
            <div>
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
      <section className="block">
        <div className="wrap rv">
          <div className="head-row"><div><span className="section-kicker">Before the first trade</span><h2>Understand the <span className="it">instruments.</span></h2></div><a className="btn btn-ghost" href="/insights">All trading guides →</a></div>
          <div className="cards cards-3">
            <div className="card"><span className="glyph">Stocks &amp; ETFs</span><h3><a href="/insights/stocks-vs-etfs">Stocks vs ETFs</a></h3><p>Compare ownership, diversification, costs and the research behind each investment.</p></div>
            <div className="card"><span className="glyph">Trading essentials</span><h3><a href="/insights/market-vs-limit-orders">Market vs limit orders</a></h3><p>See how order types affect execution, price control and unfilled trades.</p></div>
            <div className="card"><span className="glyph">Listed options</span><h3><a href="/insights/options-trading-basics">Options trading basics</a></h3><p>Understand calls, puts, premiums and the obligations around expiration.</p></div>
          </div>
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
