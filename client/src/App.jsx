import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";

// Chargement dynamique des pages
const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SolutionPage = lazy(() => import("./pages/SolutionPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const ArticleDetail = lazy(() => import("./pages/ArticleDetail"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const ProduitPage = lazy(() => import("./pages/ProduitPage"));
const ProduitDetailPage = lazy(() => import("./pages/ProduitDetailPage"));

// Importation du Layout
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            Loading
          </div>
        }
      >
        <Layout>
          <Routes>
            <Route path="/" index element={<HomePage />} />
            <Route path="/solution" element={<SolutionPage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/produits" element={<ProduitPage />} />
            <Route path="/produits/:id" element={<ProduitDetailPage />} />
            <Route path="/actualites" element={<NewsPage />} />
            <Route path="/actualites/:id" element={<ArticleDetail />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/contacts" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}

export default App;
