import { motion } from 'framer-motion';
import { Link } from 'react-router';
import SEO from '../components/common/SEO';

const NotFound = () => {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <SEO
        title="Page non trouvée"
        description="Désolé, la page que vous recherchez n'existe pas."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 style={{ fontSize: '10rem', color: 'var(--accent)', margin: 0, fontWeight: '900' }}>404</h1>
        <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1.5rem', fontWeight: '800' }}>
          Oups ! Page introuvable.
        </h2>
        <p style={{ color: 'var(--secondary)', marginBottom: '2.5rem', maxWidth: '500px', fontSize: '1.1rem', opacity: 0.8 }}>
          La page que vous recherchez semble avoir été déplacée ou n'existe plus. 
          Retournez à l'accueil pour continuer votre navigation.
        </p>
        <Link to="/" className="btn-contact">
          Retour à l'Accueil
        </Link>
      </motion.div>
    </main>
  );
};

export default NotFound;
