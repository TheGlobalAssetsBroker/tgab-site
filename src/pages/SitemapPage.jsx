import { usePageEffects } from "../hooks/usePageEffects";
import { articles, articleHeading, articlePath } from "../content/insights";

export default function SitemapPage() {
  usePageEffects("sitemap", "Sitemap — TGAB", "Full list of pages on the TGAB website.");
  return (
    <main>
      <section className="page-hero">
        <div className="wrap rv">
          <h1>Every page, <span className="it">one</span> list.</h1>
          <p>The complete TGAB website, organised by section.</p>
        </div>
      </section>
      <section className="block">
        <div className="wrap">
          <div className="sitemap-grid rv">
            <div>
              <h4>Main</h4>
              <a href="/">Home</a>
              <a href="/markets">Markets</a>
              <a href="/platforms">Platforms</a>
              <a href="/pricing">Pricing</a>
              <a href="/pricing-details">Pricing details (Core vs Prime)</a>
              <a href="/security">Security &amp; trust</a>
              <a href="/company">Company</a>
              <a href="/faq">FAQ</a>
              <a href="/contact">Contact</a>
              <a href="/register">Register interest</a>
            </div>
            <div>
              <h4>Company</h4>
              <a href="/company">About TGAB</a>
              <a href="/careers">Careers</a>
              <a href="/insights">Insights</a>
              <a href="/support">Help centre</a>
              <h4>Trading guides</h4>
              {articles.map((article) => <a key={article.slug} href={articlePath(article)}>{articleHeading(article)}</a>)}
            </div>
            <div>
              <h4>Legal</h4>
              <a href="/legal#regulatory">Regulatory status</a>
              <a href="/legal#risk">Risk disclosure</a>
              <a href="/legal#terms">Terms of use</a>
              <a href="/legal#privacy">Privacy</a>
              <a href="/legal#complaints">Complaints</a>
              <a href="/cookies">Cookie policy</a>
              <a href="/accessibility">Accessibility statement</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </section>
    </main>
    
  );
}
