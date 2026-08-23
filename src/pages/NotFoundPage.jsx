import { Link } from "react-router-dom";
import { usePageEffects } from "../hooks/usePageEffects";

export default function NotFoundPage() {
  usePageEffects("not-found", "Page not found — TGAB", "The requested TGAB page could not be found.");
  return <main><section className="page-hero"><div className="wrap rv"><h1>This page left the <span className="it">market.</span></h1><p>The address may have changed, or the page may no longer exist.</p><div className="hero-cta"><Link className="btn btn-amber btn-lg" to="/">Return home</Link><Link className="btn btn-ghost btn-lg" to="/contact">Contact us</Link></div></div></section></main>;
}
