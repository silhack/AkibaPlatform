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
        <Route path="/actualites" element={<NewsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/:id" element={<ProduitDetailPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
