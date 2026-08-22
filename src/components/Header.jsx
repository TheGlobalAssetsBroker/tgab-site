import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { siteConfig } from "../config";

const links = [
  ["Markets", "/markets"], ["Platforms", "/platforms"], ["Pricing", "/pricing"],
  ["Security", "/security"], ["Company", "/company"], ["FAQ", "/faq"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("menu-open", open);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <header className="site-header">
      <nav className="site-nav wrap" aria-label="Main navigation">
        <Link className="brand" to="/" aria-label="TGAB home">
          <span className="brand-symbol" aria-hidden="true"><i /><i /><i /></span>
          <span><strong>TGAB</strong><small>The Global Assets Broker</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-links" onClick={() => setOpen((value) => !value)}>{open ? "Close" : "Menu"}</button>
        <div className={`nav-drawer${open ? " open" : ""}`} id="primary-links">
          <div className="nav-links">{links.map(([label, to]) => <NavLink key={to} to={to}>{label}</NavLink>)}</div>
          <div className="nav-actions"><span className="locale-pill" aria-label="Global brokerage"><span aria-hidden="true">◎</span> Global</span><a className="nav-login" href={siteConfig.loginUrl}>Log In</a><Link className="button button-orange" to="/register">Open Account</Link></div>
        </div>
      </nav>
    </header>
  );
}
