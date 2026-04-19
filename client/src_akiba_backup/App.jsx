import { lazy, Suspense } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router";
import AdminsTab from "./components/admin-panel/AdminsTab";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

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
const AdminPage = lazy(() => import("./pages/AdminPage"));
const LoginPage = lazy(() => import("./pages/LoginPage")); // ajout

const ActualitesTab = lazy(() =>
  import("./components/admin-panel/ActualitesTab")
);
const ProduitsTab = lazy(() => import("./components/admin-panel/ProduitsTab"));
const ContactsTab = lazy(() => import("./components/admin-panel/ContactsTab"));

function App() {
  const location = useLocation();

  const noLayoutRoutes = [
    "/404",
    "/login-for-admin-panel", // ajout
    "/admin-panel",
    "/admin-panel/produits",
    "/admin-panel/contacts",
    "/admin-panel/actualites",
    "/admin-panel/admins",
  ];
  const isNoLayout = noLayoutRoutes.includes(location.pathname);

  return (
    <AuthProvider>
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
            <Route path="/login-for-admin-panel" element={<LoginPage />} />
            <Route
              path="/admin-panel"
              element={
                <ProtectedRoute>
                  <AdminPage />
                </ProtectedRoute>
              }
            >
              <Route path="actualites" element={<ActualitesTab />} />
              <Route path="produits" element={<ProduitsTab />} />
              <Route path="contacts" element={<ContactsTab />} />
              <Route path="admins" element={<AdminsTab />} />
            </Route>
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
    </AuthProvider>
  );
}

export default App;
