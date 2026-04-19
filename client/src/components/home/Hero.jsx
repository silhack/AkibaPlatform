import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero" id="accueil">
      <div className="hero-bg"></div>
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="badge">Institutionnel & Stratégique</span>
          <h1>L'Alliance pour l'Investissement Durable en Afrique</h1>
          <p>
            Coreline Alliance structure des projets d'impact et mobilise des capitaux
            institutionnels pour transformer le potentiel continental en valeur partagée.
          </p>
          <div className="cta-group">
            <a href="#solutions" className="btn-contact">
              Découvrir nos Projets
            </a>
            <a href="#mission" className="btn-ghost">
              Notre Vision <ChevronRight size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
