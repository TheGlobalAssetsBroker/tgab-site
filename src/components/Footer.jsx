import { Link } from "react-router-dom";
import { siteConfig } from "../config";

const groups = [
  ["Trade", [["Markets", "/markets"], ["Platforms", "/platforms"], ["Pricing", "/pricing"], ["Core vs Prime", "/pricing-details"]]],
  ["Company", [["About TGAB", "/company"], ["Security", "/security"], ["Careers", "/careers"], ["Insights", "/insights"]]],
  ["Support", [["FAQ", "/faq"], ["Help centre", "/support"], ["Contact", "/contact"], ["Accessibility", "/accessibility"]]],
  ["Legal", [["Regulatory status", "/legal#regulatory"], ["Risk disclosure", "/legal#risk"], ["Privacy", "/legal#privacy"], ["Cookie policy", "/cookies"]]],
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-container footer-stage">
        <div className="footer-brand-card">
          <img className="footer-mark" src="/images/tgab-footer-wordmark.png" alt="TGAB — The Global Assets Broker" />
          <h2>Built for the next market move.</h2>
          <p>Institutional-grade market access, transparent pricing, and a regulated-first approach.</p>
          <Link className="button button-orange" to="/register">Register Interest <span aria-hidden="true">{"↗\uFE0E"}</span></Link>
        </div>
        <div className="footer-shell">
          <div className="footer-links">
            {groups.map(([title, links]) => <div className="footer-column" key={title}><h3>{title}</h3>{links.map(([label, to]) => <Link key={to} to={to}>{label}</Link>)}</div>)}
          </div>
          <div className="footer-contact"><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a><span>The Global Assets Broker</span></div>
        </div>
      </div>
      <div className="page-container footer-legal">
        <p><strong>Company in formation.</strong> TGAB does not offer investment services or accept clients until all required licences and approvals have been granted.</p>
        <p><strong>Risk warning.</strong> Trading in financial instruments involves significant risk and can result in the loss of invested capital.</p>
        <div><span>© {new Date().getFullYear()} The Global Assets Broker</span><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a><Link to="/sitemap">Sitemap</Link></div>
      </div>
    </footer>
  );
}
