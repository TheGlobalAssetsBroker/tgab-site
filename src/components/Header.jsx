import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  { label: "Markets", to: "/markets" },
  { label: "Platforms", to: "/platforms" },
  {
    id: "pricing",
    label: "Pricing",
    children: [
      { label: "Pricing overview", to: "/pricing" },
      { label: "Core vs Prime", to: "/pricing-details" },
    ],
  },
  { label: "Security", to: "/security" },
  {
    id: "company",
    label: "Company",
    children: [
      { label: "About TGAB", to: "/company" },
      { label: "Careers", to: "/careers" },
      { label: "Insights", to: "/insights" },
    ],
  },
  {
    id: "support",
    label: "Support",
    children: [
      { label: "Help centre", to: "/support" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null);
  const navRef = useRef(null);
  const menuButtonRef = useRef(null);
  const groupButtons = useRef({});
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;
      if (openGroup) {
        const trigger = groupButtons.current[openGroup];
        setOpenGroup(null);
        requestAnimationFrame(() => trigger?.focus());
        return;
      }
      if (open) {
        setOpen(false);
        requestAnimationFrame(() => menuButtonRef.current?.focus());
      }
    };
    const closeOutside = (event) => {
      if (!navRef.current?.contains(event.target)) {
        setOpen(false);
        setOpenGroup(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    document.body.classList.toggle("menu-open", open);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      document.body.classList.remove("menu-open");
    };
  }, [open, openGroup]);

  const desktopCanHover = () => window.matchMedia("(min-width: 1001px) and (hover: hover)").matches;
  const closeNavigation = () => {
    setOpen(false);
    setOpenGroup(null);
  };
  const toggleDrawer = () => {
    setOpen((value) => {
      if (value) setOpenGroup(null);
      return !value;
    });
  };

  return (
    <header className="site-header">
      <nav className="site-nav wrap" aria-label="Main navigation" ref={navRef}>
        <Link className="brand" to="/" aria-label="TGAB home" onClick={closeNavigation}>
          <img className="brand-symbol" src="/images/tgab-nav-icon.png" alt="" aria-hidden="true" />
          <span><strong>TGAB</strong><small>The Global Assets Broker</small></span>
        </Link>
        <button ref={menuButtonRef} className="menu-toggle" type="button" aria-expanded={open} aria-controls="primary-links" onClick={toggleDrawer}>{open ? "Close" : "Menu"}</button>
        <div className={`nav-drawer${open ? " open" : ""}`} id="primary-links">
          <ul className="nav-links">
            {navigation.map((item) => {
              if (!item.children) {
                return <li className="nav-item" key={item.to}><NavLink className="nav-direct" to={item.to} onClick={closeNavigation}>{item.label}</NavLink></li>;
              }

              const expanded = openGroup === item.id;
              const current = item.children.some((child) => pathname === child.to);
              return (
                <li
                  className={`nav-item nav-group${expanded ? " open" : ""}${current ? " current" : ""}`}
                  key={item.id}
                  onMouseEnter={() => desktopCanHover() && setOpenGroup(item.id)}
                  onMouseLeave={() => desktopCanHover() && setOpenGroup(null)}
                  onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setOpenGroup(null)}
                >
                  <button
                    ref={(node) => { groupButtons.current[item.id] = node; }}
                    className="nav-group-toggle"
                    type="button"
                    aria-expanded={expanded}
                    aria-controls={`nav-${item.id}`}
                    onFocus={() => desktopCanHover() && setOpenGroup(item.id)}
                    onClick={() => setOpenGroup((value) => value === item.id ? null : item.id)}
                  >
                    <span>{item.label}</span>
                    <span className="nav-chevron" aria-hidden="true">⌄</span>
                  </button>
                  <ul className="nav-dropdown" id={`nav-${item.id}`} aria-label={`${item.label} pages`} aria-hidden={!expanded}>
                    {item.children.map((child) => (
                      <li key={child.to}><NavLink to={child.to} tabIndex={expanded ? 0 : -1} onClick={closeNavigation}>{child.label}<span aria-hidden="true">↗</span></NavLink></li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
          <div className="nav-actions"><Link className="nav-login" to="/login" onClick={closeNavigation}>Log In</Link><Link className="button button-orange" to="/register" onClick={closeNavigation}>Open Account</Link></div>
        </div>
      </nav>
    </header>
  );
}
