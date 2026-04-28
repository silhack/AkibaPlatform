import { MessageCircle } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer aria-label="Pied de page">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo" aria-label="Coreline Alliance - Accueil">
            <img src="/assets/logo_coreline.png" alt="" role="presentation" className="logo-img" />
            ORE<span>LINE</span>
          </Link>
          <p>
            Alliance internationale pour l'investissement durable et la structuration de projets
            d'impact.
          </p>
          <nav className="social-links" aria-label="Réseaux sociaux">
            <a
              href="https://linkedin.com/company/coreline-alliance"
              className="social-link"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
            <a
              href="https://wa.me/33753342598"
              className="social-link"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={20} />
            </a>
          </nav>
        </div>

        <nav className="footer-col" aria-label="Navigation secondaire">
          <h4>Navigation</h4>
          <ul>
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À Propos</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/solutions">Portfolio</Link>
            </li>
            <li>
              <Link to="/actualites">Actualités</Link>
            </li>
          </ul>
        </nav>

        <nav className="footer-col" aria-label="Liens rapides">
          <h4>Nos Pages</h4>
          <ul>
            <li>
              <Link to="/about">Notre ADN</Link>
            </li>
            <li>
              <Link to="/solutions">Nos Réalisations</Link>
            </li>
            <li>
              <Link to="/services">Piliers d'action</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="tel:+33753342598" aria-label="Appeler le +33 7 53 34 25 98">
                +33 7 53 34 25 98
              </a>
            </li>
            <li>
              <a href="tel:+2250758422665" aria-label="Appeler le +225 07 58 42 26 65">
                +225 07 58 42 26 65
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Coreline Alliance. Tous droits réservés.</p>
          <nav className="footer-legal" aria-label="Liens légaux">
            <a href="/mentions-legales">Mentions légales</a>
            <a href="/politique-confidentialite">Politique de confidentialité</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
