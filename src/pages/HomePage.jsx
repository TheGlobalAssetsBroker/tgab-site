import { Link } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";

const markets = [
  ["EQ", "US Equities", "At launch", "NYSE, Nasdaq and major US venues, cleared through regulated institutional infrastructure."],
  ["OPT", "Listed Options", "At launch", "Single-leg and multi-leg strategies on US-listed underlyings."],
  ["ETF", "ETFs", "At launch", "Index, sector, and thematic exposure through US-listed funds."],
  ["FUT", "Futures", "Roadmap", "Index, rates, and commodity futures on major global exchanges."],
  ["FX", "Foreign Exchange", "Roadmap", "Majors, minors, and EM crosses with institutional liquidity."],
  ["MTL", "Metals & Commodities", "Roadmap", "Precious metals and key commodity markets."],
  ["IDX", "Indices", "Roadmap", "Broad-market index exposure across global sessions."],
  ["FI", "Fixed Income", "Roadmap", "Government and corporate debt for yield-focused portfolios."],
  ["DA", "Digital Assets", "Roadmap", "Regulated digital-asset access, subject to applicable approvals."],
];

export default function HomePage() {
  usePageEffects("home", "TGAB — The Global Assets Broker | Institutional access to global markets", "Institutional-grade access to US equities, options, ETFs, and global markets through regulated infrastructure and transparent pricing.");
  return (
    <main>
      <section className="hero">
        <div className="wrap hero-grid">
          <div className="hero-inner rv">
            <span className="eyebrow">Multi-asset brokerage · In formation</span>
            <h1>Global markets.<br /><span className="it">Institutional access.</span></h1>
            <p className="lead">A multi-asset brokerage built on regulated infrastructure, transparent pricing, and institutional-grade execution.</p>
            <div className="hero-cta"><Link className="button button-orange" to="/register">Open account <span>↗</span></Link><Link className="text-link" to="/markets">Explore markets →</Link></div>
            <div className="hero-meta" aria-label="Launch market summary">
              <span><b>03</b> launch markets</span><span><b>09</b> asset classes planned</span><span><b>24/5</b> client coverage</span>
            </div>
          </div>
          <div className="hero-art rv" aria-label="Global market access illustration">
            <div className="terminal-label"><i /> Market access network <span>PREVIEW</span></div>
            <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
            <div className="floating-card card-price"><span>US equities</span><strong>From $0.003</strong><small>per share</small><em>AT LAUNCH</em></div>
            <div className="floating-card card-status"><i />Regulated-first infrastructure</div>
            <div className="floating-card card-markets"><span>Launch coverage</span><b>Equities</b><b>Options</b><b>ETFs</b></div>
          </div>
        </div>
      </section>
      <div className="trust-strip" role="note"><div className="ticker-track"><div className="ticker-group"><span>Regulated structure</span><span className="dot">●</span><span>Segregated client assets</span><span className="dot">●</span><span>Bank-grade KYC/AML</span><span className="dot">●</span><span>Transparent pricing</span><span className="dot">●</span></div><div className="ticker-group" aria-hidden="true"><span>Regulated structure</span><span className="dot">●</span><span>Segregated client assets</span><span className="dot">●</span><span>Bank-grade KYC/AML</span><span className="dot">●</span><span>Transparent pricing</span><span className="dot">●</span></div></div></div>
      <section className="block"><div className="wrap"><SectionHead eyebrow="01 / Account tiers" title={<>Two ways to <span className="it">access</span> the markets.</>} /><div className="tiers-grid rv"><Tier name="Core" tag="Full market access, straightforward terms." items={["US equities, options & ETFs from $0.003/share, $0.50/contract", "Free account opening, no minimum balance", "Trade through a proven third-party platform", "Standard support, 1–2 business day response"]} to="/register?tier=core" /><Tier featured name="Prime" tag="Priority service for active and professional traders." items={["Everything in Core, on the same transparent commission schedule", "Priority support routing over standard queues", "Priority access as new roadmap markets open", "Dedicated onboarding assistance"]} to="/register?tier=prime" /></div><p className="sub rv">Both tiers trade the same launch markets under the same regulatory structure — the difference is service priority, not market access.</p><div className="tiers-more rv"><Link to="/pricing-details">See pricing details →</Link></div></div></section>
      <div className="stats"><div className="stats-grid"><Stat value="From $0.003" label="Per share, equities" /><Stat value="From $0.50" label="Per contract, options" /><Stat value="Free" label="Account opening, no minimum" /><Stat value={<><span className="count" data-count="24">0</span>/5</>} label="Client coverage" /></div></div>
      <section className="platform-showcase block-dark"><div className="wrap"><div className="showcase-copy rv"><span className="eyebrow">Trading technology</span><h2>Pro-grade tools.<br />A cleaner way to trade.</h2><p>Access advanced charts, watchlists, options chains, and order management through proven third-party trading technology.</p><div className="platform-points"><span>Advanced charting</span><span>Options chains</span><span>Order management</span></div><Link className="button button-green" to="/platforms">Explore the platform <span>↗</span></Link></div><div className="platform-frame rv"><div className="window-bar"><i /><i /><i /><span>TGAB / Trading workspace</span><b>PREVIEW</b></div><img src="/images/trading-platform.png" alt="Professional multi-panel trading platform interface" /></div></div></section>
      <section className="block"><div className="wrap"><SectionHead eyebrow="02 / How it works" title={<>From registration to your <span className="it">first</span> trade.</>} action={<Link className="btn btn-ghost" to="/support">Full walkthrough →</Link>} /><div className="steps rv"><Step title="Register interest">Use “Open account” now to be prioritised for onboarding once TGAB is licensed and live.</Step><Step title="Verify & open">Complete digital KYC/AML in the TGAB client portal.</Step><Step title="Fund your account">Deposit through the client portal, held per TGAB’s segregation policy.</Step><Step title="Trade launch markets">Access US equities, options, and ETFs, with more asset classes as the roadmap opens.</Step></div></div></section>
      <section className="block"><div className="wrap"><SectionHead eyebrow="03 / Market access" title={<>A complete <span className="it">market access</span> suite.</>} /><div className="mgrid rv">{markets.map(([code, name, status, text], index) => <div className={`mcell${index < 3 ? " big" : ""}`} key={code}><span className="num">{code}</span><div className="mcell-head"><h3>{name}</h3><span className={`tag${status === "At launch" ? " live" : ""}`}>{status}</span></div><p>{text}</p></div>)}</div></div></section>
      <section className="block"><div className="wrap"><div className="split"><div className="rv"><span className="eyebrow">04 / Infrastructure</span><h2>Institutional <span className="it">plumbing,</span> not retail shortcuts.</h2><p className="sub">Every layer of the stack — clearing, custody, execution, onboarding — is chosen for durability and auditability.</p><ul className="checks"><li>Regulated institutional clearing partners</li><li>Licensed Investment Dealer application in progress</li><li>Bank-grade KYC / AML onboarding</li><li>Segregation of client assets</li></ul></div><div className="panel-art rv glow-edge">{[["CLEARING & CUSTODY", "Institutional clearing partners"], ["LICENCE", "Investment Dealer"], ["EXECUTION", "Third-party institutional platform"], ["ONBOARDING", "Full KYC / AML"], ["CLIENT PORTAL", "Regulated client portal"], ["DATA", "Real-time & historical feeds"]].map(([label, value]) => <div className="row" key={label}><span>{label}</span><b>{value}</b></div>)}</div></div></div></section>
      <section className="block"><div className="wrap"><SectionHead eyebrow="05 / Why TGAB" title={<>What we hold <span className="it">ourselves</span> to.</>} /><div className="cards rv">{[["01", "Transparent pricing", "A published fee schedule with no hidden spreads or surprise charges."], ["02", "Regulated structure", "Licensed operations first. We launch when approvals are in place — not before."], ["03", "Serious execution", "Institutional clearing and market access built for active traders."], ["04", "Global by design", "A group built to serve eligible clients across multiple jurisdictions."]].map(([number, title, text]) => <div className="card" key={number}><span className="glyph">{number}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>
      <section className="cta-band"><div className="wrap rv"><span className="eyebrow">06 / Get in early</span><h2>Be first through the <span className="it grad-text">door.</span></h2><p>Register your interest now and get priority onboarding when TGAB goes live.</p><div className="hero-cta"><Link className="btn btn-amber btn-lg" to="/register">Open account</Link><Link className="btn btn-ghost btn-lg" to="/contact">Talk to us</Link></div></div></section>
    </main>
  );
}

function SectionHead({ eyebrow, title, action }) { return <div className="head-row rv"><div><span className="eyebrow">{eyebrow}</span><h2>{title}</h2></div>{action}</div>; }
function Tier({ name, tag, items, to, featured }) { return <div className={`tier-card${featured ? " featured" : ""}`}>{featured && <span className="tier-badge">Priority tier</span>}<div className="tier-top"><span className="tier-name">{name}</span><span className="tier-index">{featured ? "02" : "01"}</span></div><span className="tier-tag">{tag}</span><ul className="checks">{items.map((item) => <li key={item}>{item}</li>)}</ul><p className="tier-why">Built for <b>{featured ? "frequent and professional traders" : "straightforward market access"}</b>.</p><Link className="btn btn-amber" to={to}>Open account <span>↗</span></Link></div>; }
function Stat({ value, label }) { return <div className="stat rv"><div className="v">{value}</div><div className="k">{label}</div></div>; }
function Step({ title, children }) { return <div className="step"><h3>{title}</h3><p>{children}</p></div>; }
