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
              <a href="#accueil">Accueil</a>
            </li>
            <li>
              <a href="#mission">Mission</a>
            </li>
            <li>
              <a href="#produits">Piliers</a>
            </li>
            <li>
              <a href="#solutions">Portfolio</a>
            </li>
            <li>
              <a href="#actualites">Actualités</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Expertises</h4>
          <ul>
            <li>
              <a href="#produits">Origine (Ingénierie)</a>
            </li>
            <li>
              <a href="#produits">Invest (Financement)</a>
            </li>
            <li>
              <a href="#produits">Elite (Conseil)</a>
            </li>
            <li>
              <a href="#contact">Contact Business</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>🇫🇷 Paris: +33 7 53 34 25 98</li>
            <li>🇨🇮 Abidjan: +225 07 58 42 26 65</li>
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
