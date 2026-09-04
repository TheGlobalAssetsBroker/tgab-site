import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const AccessibilityPage = lazy(() => import("./pages/AccessibilityPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const CompanyPage = lazy(() => import("./pages/CompanyPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CookiesPage = lazy(() => import("./pages/CookiesPage"));
const FaqPage = lazy(() => import("./pages/FaqPage"));
const InsightsPage = lazy(() => import("./pages/InsightsPage"));
const LegalPage = lazy(() => import("./pages/LegalPage"));
const MarketsPage = lazy(() => import("./pages/MarketsPage"));
const PlatformsPage = lazy(() => import("./pages/PlatformsPage"));
const PricingDetailsPage = lazy(() => import("./pages/PricingDetailsPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const SecurityPage = lazy(() => import("./pages/SecurityPage"));
const SitemapPage = lazy(() => import("./pages/SitemapPage"));
const SupportPage = lazy(() => import("./pages/SupportPage"));

export default function App() {
  return (
    <Suspense fallback={<main className="route-loading" aria-label="Loading page" />}><Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="markets" element={<MarketsPage />} />
        <Route path="platforms" element={<PlatformsPage />} />
        <Route path="pricing" element={<PricingPage />} />
        <Route path="pricing-details" element={<PricingDetailsPage />} />
        <Route path="security" element={<SecurityPage />} />
        <Route path="company" element={<CompanyPage />} />
        <Route path="careers" element={<CareersPage />} />
        <Route path="insights" element={<InsightsPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="legal" element={<LegalPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="cookies" element={<CookiesPage />} />
        <Route path="accessibility" element={<AccessibilityPage />} />
        <Route path="sitemap" element={<SitemapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes></Suspense>
  );
}
