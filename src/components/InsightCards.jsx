import { Link } from "react-router-dom";
import { articleHeading, articlePath, articleReadTime } from "../content/insights";

export function InsightCards({ articles }) {
  return (
    <div className={`cards cards-${articles.length} insight-cards`}>
      {articles.map((article) => (
        <article className="card insight-card" key={article.slug}>
          <span className="glyph">{article.category} · {articleReadTime(article)} min read</span>
          <h3><Link to={articlePath(article)}>{articleHeading(article)}</Link></h3>
          <p>{article.summary}</p>
          <Link className="insight-card-link" to={articlePath(article)} aria-label={`Read ${articleHeading(article)}`}>Read guide <span aria-hidden="true">↗</span></Link>
        </article>
      ))}
    </div>
  );
}
