import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import AccessibilityPage from "./pages/AccessibilityPage";
import CareersPage from "./pages/CareersPage";
import CompanyPage from "./pages/CompanyPage";
import ContactPage from "./pages/ContactPage";
import CookiesPage from "./pages/CookiesPage";
import FaqPage from "./pages/FaqPage";
import InsightsPage from "./pages/InsightsPage";
import LegalPage from "./pages/LegalPage";
import MarketsPage from "./pages/MarketsPage";
import PlatformsPage from "./pages/PlatformsPage";
import PricingDetailsPage from "./pages/PricingDetailsPage";
import PricingPage from "./pages/PricingPage";
import SecurityPage from "./pages/SecurityPage";
import SitemapPage from "./pages/SitemapPage";
import SupportPage from "./pages/SupportPage";

export default function App() {
  return (
    <Routes>
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
        <Route path="register" element={<RegisterPage />} />
        <Route path="cookies" element={<CookiesPage />} />
        <Route path="accessibility" element={<AccessibilityPage />} />
        <Route path="sitemap" element={<SitemapPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
