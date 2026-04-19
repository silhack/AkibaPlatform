import { motion } from 'framer-motion';
import { Globe, Lightbulb, ShieldCheck, Target, Users } from 'lucide-react';
import { useEffect } from 'react';
import TeamSection from '../components/home/TeamSection';
import CeoWord from '../components/home/CeoWord';

const VisionPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="vision-page" style={{ paddingTop: '100px. ' }}>
      {/* Header Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}
          >
            <span className="badge">Notre ADN</span>
            <h2>L'Executive Summary</h2>
            <p
              className="lead"
              style={{
                fontSize: '1.25rem',
                color: 'var(--gray-600)',
                marginTop: '1.5rem',
                lineHeight: '1.8',
              }}
            >
              Coreline est une alliance internationale d'experts en finance, agro-industrie, énergie
              et technologies, œuvrant main dans la main pour accélérer le développement de projets
              durables au service des communautés locales africaines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Context Section */}
      <section className="section section-alt">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '4rem',
              alignItems: 'center',
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3
                style={{
                  fontSize: '2rem',
                  fontWeight: '800',
                  marginBottom: '1.5rem',
                  color: 'var(--secondary)',
                }}
              >
                À l'horizon 2050
              </h3>
              <p
                style={{
                  fontSize: '1.1rem',
                  color: 'var(--gray-600)',
                  lineHeight: '1.7',
                  marginBottom: '1rem',
                }}
              >
                L'Afrique comptera <strong>2,5 milliards d'habitants</strong>, avec une demande
                alimentaire et énergétique en très forte croissance.
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginTop: '2rem',
                }}
              >
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Globe className="text-primary" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>
                    Le continent importe encore plus de <strong>50 milliards USD</strong> de
                    produits alimentaires par an.
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Lightbulb className="text-primary" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>
                    Près de <strong>600 millions</strong> d'Africains vivent toujours sans accès à
                    l'électricité.
                  </span>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <Target className="text-primary" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span>
                    Seuls <strong>5%</strong> des financements climatiques mondiaux (2 800 Mds USD)
                    atteignent le continent.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              style={{
                background: 'var(--white)',
                padding: '3rem',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-premium)',
              }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4
                style={{
                  fontSize: '1.5rem',
                  fontWeight: '800',
                  marginBottom: '1.5rem',
                  color: 'var(--secondary)',
                }}
              >
                Notre Rôle de Catalyseur
              </h4>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                En connectant experts, partenaires et investisseurs, Coreline agit comme un
                catalyseur. Nous identifions, structurons et développons des projets durables à fort
                impact.
              </p>
              <div
                style={{
                  padding: '1.5rem',
                  background: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--primary)',
                }}
              >
                <strong
                  style={{ color: 'var(--primary)', display: 'block', marginBottom: '0.5rem' }}
                >
                  Notre Vision
                </strong>
                <span style={{ fontSize: '0.95rem' }}>
                  Mobiliser les expertises, les financements et l'innovation technologique au
                  service d'une industrialisation durable qui crée de la valeur locale.
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="section">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Core Values</h2>
            <p>Les piliers éthiques qui guident l'ensemble de nos actions.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            <motion.div
              style={{
                padding: '2.5rem',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--gray-100)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ShieldCheck size={40} className="text-secondary" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '1rem' }}>
                Respect
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                Agir dans le respect des personnes, des communautés et des écosystèmes, en plaçant
                l'éthique au cœur de nos actions.
              </p>
            </motion.div>

            <motion.div
              style={{
                padding: '2.5rem',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--gray-100)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Lightbulb size={40} className="text-secondary" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '1rem' }}>
                Innovation & Excellence
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                Encourager la créativité et les solutions innovantes tout en recherchant
                l'excellence absolue.
              </p>
            </motion.div>

            <motion.div
              style={{
                padding: '2.5rem',
                background: 'var(--gray-50)',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--gray-100)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Users size={40} className="text-secondary" style={{ marginBottom: '1rem' }} />
              <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '1rem' }}>
                Solidarité
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: '1.6' }}>
                Promouvoir l'entraide, la coopération et le partage des connaissances pour soutenir
                la création de valeur durable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* CEO Word Section */}
      <CeoWord />

      {/* Governance Section inserted here */}
      <TeamSection />
    </main>
  );
};

export default VisionPage;
