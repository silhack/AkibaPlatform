import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash scrolling when navigating from another page
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const handleNavClick = (path, hash) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== path) {
      navigate(hash ? `${path}${hash}` : path);
    } else {
      if (hash) {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Accueil', path: '/', hash: '' },
    { name: 'À Propos', path: '/about', hash: '' },
    { name: 'Services', path: '/services', hash: '' },
    { name: 'Portfolio', path: '/solutions', hash: '' },
    { name: 'Actualités', path: '/actualites', hash: '' },
  ];

  return (
    <header className={isScrolled ? 'scrolled' : ''} id="main-header">
      <div className="container nav">
        <Link
          to="/"
          onClick={() => setIsMobileMenuOpen(false)}
          className="logo"
          aria-label="Coreline Alliance - Accueil"
        >
          <img src="/assets/logo_coreline.png" alt="" role="presentation" className="logo-img" />
          ORE<span>LINE</span>
        </Link>

        <nav aria-label="Navigation principale">
          <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`} id="nav-links">
            {navLinks.map(link => {
              const isActive =
                location.pathname === link.path &&
                ((link.hash && location.hash === link.hash) ||
                  (!link.hash && (!location.hash || location.hash === '#accueil')));

              return (
                <li key={link.name}>
                  <a
                    href={link.path + (link.hash || '')}
                    onClick={e => {
                      e.preventDefault();
                      handleNavClick(link.path, link.hash);
                    }}
                    className={isActive ? 'active-link' : ''}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
            <li>
              <Link
                to="/contact"
                className="btn-contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Nous Contacter
              </Link>
            </li>
          </ul>
        </nav>

        <button
          className={`nav-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          id="nav-toggle"
          aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="nav-links"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
