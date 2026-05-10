import { Route, Routes, useLocation } from 'react-router';
import { useEffect } from 'react';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import SolutionsPage from './pages/SolutionsPage';
import ProduitDetailPage from './pages/ProduitDetailPage';
import ServicePage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import MentionsLegales from './pages/MentionsLegales';
import PolitiqueConfidentialite from './pages/PolitiqueConfidentialite';
import NewsDetailPage from './pages/NewsDetailPage';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      // Forcer le scroll instantané pour ignorer l'animation 'smooth' du CSS qui bloque le scroll au changement de page
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actualites" element={<ComingSoon title="Actualités & Insights" />} />
        <Route path="/solutions" element={<ComingSoon title="Nos Missions & Portfolio" />} />
        <Route path="/solutions/:id" element={<ComingSoon title="Détails du Projet" />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/actualites/:id" element={<ComingSoon title="Détail de l'Article" />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/politique-confidentialite" element={<PolitiqueConfidentialite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
