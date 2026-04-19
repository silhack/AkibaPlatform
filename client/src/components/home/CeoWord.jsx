import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const CeoWord = () => {
  return (
    <section className="section" id="ceo-word">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem', alignItems: 'center' }}>
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Le Mot du Président</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--primary)', marginBottom: '2rem', lineHeight: '1.2' }}>
              Une nouvelle ère pour l'investissement en Afrique
            </h2>
            
            <div style={{ position: 'relative', paddingLeft: '3rem' }}>
              <Quote 
                size={40} 
                style={{ 
                  position: 'absolute', 
                  top: '-10px', 
                  left: 0, 
                  color: 'var(--accent)', 
                  opacity: 0.2 
                }} 
              />
              <p style={{ fontSize: '1.25rem', color: 'var(--secondary)', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                "Notre continent ne manque pas d'ambition, il manque de ponts entre le potentiel local et le capital institutionnel mondial. Avec Coreline Alliance, nous avons fait le choix de structurer ces ponts, projet par projet, pour bâtir une souveraineté alimentaire et énergétique durable."
              </p>
              
              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column' }}>
                <strong style={{ fontSize: '1.2rem', color: 'var(--primary)', fontWeight: '800' }}>Eric BROU</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--gray-600)', textTransform: 'uppercase', letterSpacing: '1px' }}>Président de Coreline Alliance</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative' }}
          >
            <div 
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-premium)',
                border: '1px solid rgba(212, 175, 55, 0.3)', // Gold subtle border
                aspectRatio: '4/5',
                background: 'var(--gray-100)'
              }}
            >
              <img 
                src="/assets/ceo.jpeg" 
                alt="Portrait de Eric BROU, Président du Bureau Exécutif" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            {/* Decorative element */}
            <div 
              style={{
                position: 'absolute',
                bottom: '-20px',
                left: '-20px',
                width: '100px',
                height: '100px',
                backgroundColor: 'var(--accent)',
                borderRadius: '20px',
                zIndex: -1,
                opacity: 0.5
              }}
            ></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default CeoWord;
