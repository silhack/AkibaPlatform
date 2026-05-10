import { motion } from 'framer-motion';
import { Clock, Mail } from 'lucide-react';
import { Link } from 'react-router';
import SEO from '../components/common/SEO';

const ComingSoon = ({ title = "Bientôt Disponible" }) => {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'var(--secondary)',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <SEO title={title} description="Cette section de Coreline Alliance est en cours de préparation." />
      
      {/* Decorative Gold Circles */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)',
        borderRadius: '50%'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <div style={{ 
            display: 'inline-flex', 
            padding: '20px', 
            backgroundColor: 'rgba(212, 175, 55, 0.15)', 
            borderRadius: '50%',
            marginBottom: '2rem',
            border: '1px solid var(--accent)'
          }}>
            <Clock size={48} color="var(--accent)" />
          </div>

          <h1 style={{ 
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            color: 'var(--white)', 
            fontWeight: '900',
            marginBottom: '1.5rem',
            lineHeight: '1.1'
          }}>
            <span style={{ color: 'var(--accent)' }}>{title}</span>
          </h1>

          <p style={{ 
            fontSize: '1.2rem', 
            color: 'rgba(255, 255, 255, 0.8)', 
            marginBottom: '3rem',
            lineHeight: '1.8'
          }}>
            Nos experts sont actuellement sur le terrain pour documenter nos dernières interventions et analyses stratégiques. 
            Revenez très prochainement pour découvrir l'impact de Coreline Alliance.
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '1.5rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link to="/contact" className="btn-contact" style={{ 
              backgroundColor: 'var(--accent)', 
              color: 'var(--secondary) !important',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <Mail size={18} /> Être informé par email
            </Link>
            <Link to="/" style={{ 
              color: 'var(--white)', 
              textDecoration: 'none', 
              fontWeight: '700',
              padding: '0.75rem 1.6rem',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '99px',
              transition: 'all 0.3s'
            }} onMouseOver={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'} 
               onMouseOut={e => e.target.style.backgroundColor = 'transparent'}>
              Retour à l'accueil
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
};

export default ComingSoon;
