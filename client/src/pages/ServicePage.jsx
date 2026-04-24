import { motion } from 'framer-motion';
import { AreaChart, Compass, Lightbulb, Link as LinkIcon, Settings } from 'lucide-react';
import { useEffect } from 'react';
import BentoServices from '../components/home/BentoServices';
import { Link } from 'react-router';

const ServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="service-page" style={{ paddingTop: '100px' }}>
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
            <span className="badge">Nos Compétences</span>
            <h2>Services & Expertise</h2>
            <p className="lead" style={{ marginTop: '1.5rem', color: 'var(--gray-600)' }}>
              Coreline Alliance offre un accompagnement bout-en-bout, de la conception stratégique
              au déploiement opérationnel des grands projets africains.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Insert existing BentoServices section */}
      <BentoServices />

      {/* Process / Methodology Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Notre Méthodologie</h2>
            <p>Une approche rigoureuse et itérative garantissant le succès.</p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
            }}
          >
            {[
              {
                icon: Compass,
                title: '1. Audit & Stratégie',
                desc: 'Analyse des besoins locaux et conception du plan de déploiement en accord avec la vision institutionnelle.',
              },
              {
                icon: LinkIcon,
                title: '2. Structuration',
                desc: "Montage financier, identification des partenaires clés et consolidation de l'architecture du projet.",
              },
              {
                icon: Settings,
                title: '3. Implémentation',
                desc: 'Lancement opérationnel, gestion technique et pilotage de la chaîne de valeur sur le terrain.',
              },
              {
                icon: AreaChart,
                title: '4. Scaling & Mesure',
                desc: "Analyse d'impact, ajustement des KPIs et préparation au changement d'échelle.",
              },
            ].map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '2.5rem',
                    borderRadius: 'var(--radius)',
                    boxShadow: 'var(--shadow)',
                    borderBottom: '4px solid var(--primary)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '-10px',
                      opacity: 0.05,
                      transform: 'scale(3)',
                    }}
                  >
                    {index + 1}
                  </div>
                  <Icon size={40} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      color: 'var(--secondary)',
                      marginBottom: '1rem',
                      fontWeight: '800',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: 'var(--gray-600)', lineHeight: '1.6', margin: 0 }}>
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="section" style={{ padding: '0' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--secondary)',
              borderRadius: 'var(--radius-lg)',
              padding: '4rem',
              textAlign: 'center',
              color: 'var(--white)',
              backgroundImage:
                'radial-gradient(circle at top right, rgba(212, 175, 55, 0.15), transparent 50%)',
            }}
          >
            <Lightbulb size={48} color="white" style={{ marginBottom: '1.5rem' }} />
            <h2 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '2.5rem' }}>
              Prêt à accélérer votre projet ?
            </h2>
            <p
              style={{
                fontSize: '1.1rem',
                opacity: 0.9,
                maxWidth: '600px',
                margin: '0 auto 2rem auto',
              }}
            >
              Nos experts sont à votre disposition pour auditer vos besoins et proposer des
              solutions concrètes, durables et pérennes.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary"
              style={{ padding: '15px 30px', fontSize: '1.1rem', color: 'white' }}
            >
              Parler à un Expert Coreline
            </Link>
          </div>
        </div>
      </section>
      <div style={{ paddingBottom: '4rem' }}></div>
    </main>
  );
};

export default ServicePage;
