import { lazy, Suspense } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router";
import Layout from "./components/Layout/Layout";

// Pages dynamiques
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SolutionPage = lazy(() => import("./pages/SolutionPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ProduitPage = lazy(() => import("./pages/ProduitPage"));
const ProduitDetailPage = lazy(() => import("./pages/ProduitDetailPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  const location = useLocation();

  const noLayoutRoutes = ["/404"];
  const isNoLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center min-h-screen">
          Chargement...
        </div>
      }
    >
      {isNoLayout ? (
        <Routes>
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/produits" element={<ProduitPage />} />
            <Route path="/produits/:id" element={<ProduitDetailPage />} />
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="/actualites/:id" element={<ArticleDetail />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </Layout>
      )}
    </Suspense>
  );
}

export default App;
