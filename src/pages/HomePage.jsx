import { Link } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";

const advantages = [
  ["01", "Transparent pricing", "A published fee schedule with no hidden spreads or surprise charges."],
  ["02", "Regulated structure", "Licensed operations first. We launch when approvals are in place — not before."],
  ["03", "Serious execution", "Institutional clearing and market access built for active traders."],
  ["04", "Global by design", "A group built to serve eligible clients across multiple jurisdictions."],
  ["05", "Segregated assets", "Client assets held apart from TGAB operating capital under the applicable rules."],
  ["06", "24/5 coverage", "Client coverage aligned with the global trading week."],
];

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

const infrastructure = [
  ["CLEARING & CUSTODY", "Institutional clearing partners"],
  ["LICENCE", "Investment Dealer"],
  ["EXECUTION", "Third-party institutional platform"],
  ["ONBOARDING", "Full KYC / AML"],
  ["CLIENT PORTAL", "Regulated client portal"],
  ["DATA", "Real-time & historical feeds"],
];

export default function HomePage() {
  usePageEffects("home", "TGAB — The Global Assets Broker | Institutional access to global markets", "Institutional-grade access to US equities, options, ETFs, and global markets through regulated infrastructure and transparent pricing.");

  return (
    <main>
      <section className="hero hero-reference">
        <div className="page-container hero-reference-inner">
          <div className="hero-reference-copy rv">
            <span className="hero-reference-kicker">The Global Assets Broker</span>
            <h1>Global markets.<br /><span>Institutional access.</span></h1>
            <p>A multi-asset brokerage built on regulated infrastructure, transparent pricing, and institutional-grade execution.</p>
            <div className="hero-reference-actions">
              <Link className="button button-orange" to="/register">Open Account <span aria-hidden="true">↗</span></Link>
              <Link className="button button-green" to="/markets">Explore Markets</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="advantage-section">
        <div className="page-container rv">
          <p className="section-kicker light">TGAB · In formation</p>
          <h2>Trade globally, <span>access more</span></h2>
          <p className="advantage-lead">Institutional-grade structure from day one.</p>
          <div className="advantage-grid">
            {advantages.map(([code, title, text]) => (
              <article className="advantage-item" key={code}>
                <span className="advantage-icon">{code}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <Link className="button button-orange advantage-cta" to="/register">Get Started <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="proof-strip" aria-label="TGAB launch facts">
        <div className="page-container proof-grid rv">
          <div><strong>US Equities</strong><span>At launch</span></div>
          <div><strong>$0.003</strong><span>From, per share</span></div>
          <div><strong>$0.50</strong><span>From, per contract</span></div>
          <div><strong>No minimum</strong><span>Account balance</span></div>
          <div><strong>24/5</strong><span>Client coverage</span></div>
        </div>
      </section>

      <section className="roadmap-feature">
        <div className="page-container roadmap-grid">
          <div className="roadmap-copy rv">
            <span className="section-kicker light">Multi-asset roadmap</span>
            <h2>US markets first.<br /><span>The world next.</span></h2>
            <p>TGAB launches with US equities, listed options, and ETFs, then expands into futures, FX, metals, indices, fixed income, and digital assets as the roadmap opens.</p>
            <div className="button-row"><Link className="button button-orange" to="/markets">Explore Markets <span aria-hidden="true">↗</span></Link><Link className="button button-green" to="/register">Register Interest</Link></div>
          </div>
          <div className="orderbook-art rv" aria-label="Illustrative market depth graphic">
            <div className="orderbook-side asks">{[78,64,88,52,74,41].map((width, index) => <span key={index} style={{ "--bar": `${width}%` }}><i />{(6956 - index * .25).toFixed(2)}</span>)}</div>
            <div className="orderbook-mid">6,954.75</div>
            <div className="orderbook-side bids">{[45,60,83,71,55,38].map((width, index) => <span key={index} style={{ "--bar": `${width}%` }}><i />{(6954.5 - index * .25).toFixed(2)}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="page-container">
          <header className="editorial-heading rv">
            <h2>Build Your Trading Experience</h2>
            <p>For active and professional traders who want a cleaner route to global markets. Get the access, tools, and service model you need to stay on top of market moves.</p>
          </header>
          <div className="editorial-grid">
            <article className="editorial-card rv">
              <div className="editorial-media platform-crop"><img src="/images/trading-platform.png" alt="Professional multi-panel trading platform interface" /></div>
              <h3>One Account. A Proven Platform.</h3>
              <p>Access advanced charts, watchlists, options chains, and order management through proven third-party trading technology.</p>
              <Link to="/platforms">Learn More</Link>
            </article>
            <article className="editorial-card rv">
              <div className="editorial-media"><img src="/images/tgab-editorial.png" alt="Professional trader using an institutional trading workstation" /></div>
              <h3>Two Ways To Access The Markets.</h3>
              <p>Choose Core for straightforward market access or Prime for priority service, dedicated onboarding, and early roadmap access.</p>
              <Link to="/pricing-details">Compare Tiers</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="infrastructure-feature">
        <div className="page-container infrastructure-grid">
          <div className="infrastructure-copy rv">
            <span className="section-kicker muted">Regulated-first infrastructure</span>
            <h2>Institutional plumbing.<br />No retail shortcuts.</h2>
            <p>Every layer of the stack — clearing, custody, execution, onboarding — is chosen for durability and auditability.</p>
            <ul className="plain-list"><li>Regulated institutional clearing partners</li><li>Licensed Investment Dealer application in progress</li><li>Bank-grade KYC / AML onboarding</li><li>Segregation of client assets</li></ul>
            <Link className="button button-orange" to="/security">How We Protect You <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="infrastructure-panel rv">
            {infrastructure.map(([label, value]) => <div key={label}><span>{label}</span><b>{value}</b></div>)}
          </div>
        </div>
      </section>

      <section className="platform-stage">
        <div className="page-container">
          <h2 className="platform-intro rv">Advanced trading at your fingertips.</h2>
          <div className="platform-hero rv"><img src="/images/trading-platform.png" alt="Illustrative trading platform workspace" /></div>
          <p className="platform-caption rv"><b>Professional trading technology.</b> Advanced charting, live watchlists, options chains, and order management in one workspace.</p>
          <h2 className="platform-title rv">Power Meets Precision</h2>
          <div className="feature-carousel rv">
            <FeatureCard eyebrow="Advanced charting" title="Read the market with deeper context." position="48% 50%" />
            <FeatureCard eyebrow="Options chains" title="Build and manage listed-options strategies." position="76% 22%" />
            <FeatureCard eyebrow="Order management" title="Move from analysis to execution cleanly." position="24% 78%" />
            <FeatureCard eyebrow="Watchlists" title="Keep the instruments that matter in view." position="8% 38%" />
          </div>
        </div>
      </section>

      <section className="offers-section">
        <div className="page-container">
          <h2 className="offers-title rv">Choose how you access the markets</h2>
          <div className="offers-grid rv">
            <OfferCard name="Core" accent="lime" description="Full market access, straightforward terms." items={["US equities, options & ETFs from $0.003/share, $0.50/contract", "Free account opening, no minimum balance", "Trade through a proven third-party platform", "Standard support, 1–2 business day response"]} to="/register?tier=core" />
            <OfferCard name="Prime" accent="green" description="Priority service for active and professional traders." items={["Everything in Core, on the same transparent commission schedule", "Priority support routing over standard queues", "Priority access as new roadmap markets open", "Dedicated onboarding assistance"]} to="/register?tier=prime" />
            <OfferCard name="Both tiers" accent="orange" description="The same launch markets under the same regulatory structure." items={["US equities, listed options, and ETFs at launch", "The same transparent commission schedule", "Institutional clearing relationships", "Full KYC / AML onboarding"]} to="/pricing-details" />
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="page-container">
          <header className="editorial-heading rv"><h2>From Registration To Your First Trade</h2><p>Four clear steps from early interest to launch-market access.</p></header>
          <div className="process-grid rv">
            <Process number="01" title="Register interest">Use “Open account” now to be prioritised for onboarding once TGAB is licensed and live.</Process>
            <Process number="02" title="Verify & open">Complete digital KYC/AML in the TGAB client portal.</Process>
            <Process number="03" title="Fund your account">Deposit through the client portal, held per TGAB’s segregation policy.</Process>
            <Process number="04" title="Trade launch markets">Access US equities, options, and ETFs, with more asset classes as the roadmap opens.</Process>
          </div>
        </div>
      </section>

      <section className="markets-stage">
        <div className="page-container">
          <div className="markets-heading rv"><h2>Explore Our Markets</h2><Link className="button button-orange" to="/markets">All Markets <span aria-hidden="true">↗</span></Link></div>
          <div className="market-carousel rv">
            {markets.map(([code, name, status, text]) => <article className="market-slide" key={code}><span className="market-code">{code}</span><div><span className={`market-status ${status === "At launch" ? "launch" : ""}`}>{status}</span><h3>{name}</h3><p>{text}</p></div><Link to="/markets" aria-label={`Learn more about ${name}`}>+</Link></article>)}
          </div>
        </div>
      </section>

      <section className="final-campaign">
        <div className="page-container final-campaign-inner rv">
          <span className="section-kicker light">Get in early</span>
          <h2>Be first through<br /><span>the door.</span></h2>
          <p>Register your interest now and get priority onboarding when TGAB goes live.</p>
          <div className="button-row"><Link className="button button-orange" to="/register">Open Account <span aria-hidden="true">↗</span></Link><Link className="button button-green" to="/contact">Talk To Us</Link></div>
        </div>
      </section>
    </main>
  );
}

function FeatureCard({ eyebrow, title, position }) {
  return <article className="feature-card"><span>{eyebrow}</span><h3>{title}</h3><img src="/images/trading-platform.png" alt="" aria-hidden="true" style={{ objectPosition: position }} /><Link to="/platforms" aria-label={`Learn more about ${eyebrow}`}>+</Link></article>;
}

function OfferCard({ name, accent, description, items, to }) {
  return <article className={`offer-card ${accent}`}><span className="offer-label">Account tier</span><h3>{name}</h3><p>{description}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><Link className="button button-orange" to={to}>{name === "Both tiers" ? "Compare Tiers" : `Choose ${name}`} <span aria-hidden="true">↗</span></Link></article>;
}

function Process({ number, title, children }) {
  return <article><span>{number}</span><h3>{title}</h3><p>{children}</p></article>;
}
