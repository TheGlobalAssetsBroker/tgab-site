import { Link, useParams } from "react-router-dom";
import { InsightCards } from "../components/InsightCards";
import { articles, articleReadTime, formatArticleDate } from "../content/insights";
import { usePageEffects } from "../hooks/usePageEffects";
import NotFoundPage from "./NotFoundPage";

function ArticleTable({ table }) {
  return (
    <div className="article-table-scroll" role="region" aria-label={table.caption} tabIndex={0}>
      <table className="tbl article-table">
        <caption>{table.caption}</caption>
        <thead><tr>{table.headings.map((heading) => <th scope="col" key={heading}>{heading}</th>)}</tr></thead>
        <tbody>{table.rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th scope="row" key={index}>{cell}</th> : <td key={index}>{cell}</td>)}</tr>)}</tbody>
      </table>
    </div>
  );
}

function Article({ article }) {
  usePageEffects("insight-article", article.title, article.description, article);
  const related = articles.filter((item) => item.slug !== article.slug);

  return (
    <main id="main-content">
      <article>
        <header className="page-hero article-hero">
          <div className="wrap">
            <nav className="article-breadcrumb" aria-label="Breadcrumb">
              <ol><li><Link to="/">Home</Link></li><li><Link to="/insights">Insights</Link></li><li aria-current="page">{article.heading.replace(/:$/, "")}</li></ol>
            </nav>
            <span className="eyebrow">{article.category}</span>
            <h1>{article.heading} <span className="it">{article.accent}</span></h1>
            <p>{article.summary}</p>
            <div className="article-meta"><Link to="/company" rel="author">By TGAB</Link><span>Published <time dateTime={article.date}>{formatArticleDate(article.date)}</time></span><span>{articleReadTime(article)} min read</span></div>
          </div>
        </header>
        <div className="block article-body-block">
          <div className="wrap article-layout">
            <nav className="article-toc" aria-label="In this guide">
              <span className="section-kicker">In this guide</span>
              <ol>{article.sections.map((section) => <li key={section.id}><a href={`#${section.id}`}>{section.title}</a></li>)}<li><a href="#questions">Common questions</a></li><li><a href="#sources">Sources & further reading</a></li></ol>
              <Link className="article-back" to="/insights">← All insights</Link>
            </nav>
            <div className="article-copy">
              <aside className="article-takeaway" aria-label="Key takeaway"><span className="section-kicker">The key idea</span><p>{article.takeaway}</p></aside>
              {article.sections.map((section) => (
                <section className="article-section" id={section.id} key={section.id} aria-labelledby={`${section.id}-title`}>
                  <h2 id={`${section.id}-title`}>{section.title}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.table && <ArticleTable table={section.table} />}
                  {section.after?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
                  {section.sources && <p className="article-citations">Source{section.sources.length > 1 ? "s" : ""}: {section.sources.map((index, position) => <span key={index}>{position > 0 && "; "}<a href={article.sources[index].url}>{article.sources[index].label}</a></span>)}</p>}
                  {section.links && <ul className="article-links">{section.links.map((link) => <li key={link.href}><Link to={link.href}>{link.label} <span aria-hidden="true">→</span></Link></li>)}</ul>}
                </section>
              ))}
              <section className="article-section article-questions" id="questions" aria-labelledby="questions-title">
                <h2 id="questions-title">Common questions</h2>
                {article.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
              </section>
              <section className="article-section article-sources" id="sources" aria-labelledby="sources-title">
                <h2 id="sources-title">Sources & further reading</h2>
                <p>Prepared by TGAB using the investor education resources below. Sources checked on <time dateTime={article.date}>{formatArticleDate(article.date)}</time>. Examples are hypothetical and use US dollars.</p>
                <ul>{article.sources.map((source) => <li key={source.url}><a href={source.url}>{source.label}</a></li>)}</ul>
                <p className="article-disclosure">This guide provides general education, not a personal investment recommendation. Trading can result in loss of capital. Product access depends on eligibility, permissions and final launch terms. Read the <Link to="/legal#risk">risk disclosure</Link>.</p>
              </section>
            </div>
          </div>
        </div>
      </article>
      <section className="block" aria-labelledby="related-title">
        <div className="wrap">
          <div className="head-row"><div><span className="section-kicker">Keep learning</span><h2 id="related-title">Build your <span className="it">understanding.</span></h2></div></div>
          <InsightCards articles={related} />
        </div>
      </section>
      <section className="cta-band">
        <div className="wrap">
          <h2>Explore the markets <span className="it grad-text">ahead.</span></h2>
          <p>TGAB is preparing to launch US equities, ETFs and listed options. Explore the planned offering or register for launch updates.</p>
          <div className="hero-cta"><Link className="btn btn-amber btn-lg" to="/register">Get launch updates</Link><Link className="btn btn-ghost btn-lg" to="/markets">Explore markets</Link></div>
        </div>
      </section>
    </main>
  );
}

export default function InsightArticlePage() {
  const { slug } = useParams();
  const article = articles.find((item) => item.slug === slug);
  return article ? <Article key={article.slug} article={article} /> : <NotFoundPage />;
}
