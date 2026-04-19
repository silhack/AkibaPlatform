import { Route, Routes } from 'react-router';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import NewsPage from './pages/NewsPage';
import VisionPage from './pages/VisionPage';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vision" element={<VisionPage />} />
        <Route path="/actualites" element={<NewsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
