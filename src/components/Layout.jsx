import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout() {
  const { pathname } = useLocation();
  return <><Header /><div className="page-shell" key={pathname}><Outlet /></div><Footer /></>;
}
