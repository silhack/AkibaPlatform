import { MessageCircle } from 'lucide-react';
import { FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer>
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <img src="/assets/logo_coreline.png" alt="Logo Coreline" className="logo-img" />
            ORE<span>LINE</span>
          </Link>
          <p>
            Alliance internationale pour l'investissement durable et la structuration de projets
            d'impact.
          </p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <FaLinkedinIn size={20} />
            </a>
            <a href="#" className="social-link" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div className="footer-col">
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
        </div>

        <div className="footer-col">
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
        </div>

        <div className="footer-col">
          <h4>Téléphone</h4>
          <ul>
            <li>+33 7 53 34 25 98</li>
            <li>+225 07 58 42 26 65</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© 2026 Coreline Alliance. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="#">Mentions légales</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
