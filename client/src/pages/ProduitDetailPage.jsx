import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Factory, TrendingUp, Users } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router';

// On simule une petite BDD mockée pour l'exemple
const solutionsDB = {
  'neper': {
    title: 'Projet NEPER (Neper Ventures)',
    category: 'Agro-industrie',
    desc: "Accompagnement à la mise en place de 3 unités de transformation agroalimentaire durables (Manioc, Karité) pour créer de la valeur et de l'emploi localement.",
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    impacts: [
      '3 unités de transformation opérationnelles',
      'Création de 150 emplois directs',
      'Structuration de la filière Karité locale',
    ],
    results: 'Production optimisée x2',
    beneficiaries: '300 familles rurales',
  },
  'cassava': {
    title: 'Projet Cassava (Coopérative Edissou)',
    category: 'Finance & Inclusion',
    desc: 'Inclusion financière et numérique pour 100 femmes productrices de la coopérative Edissou de Lolobo. Subvention de la fondation du Crédit Coopératif.',
    image: 'https://images.unsplash.com/photo-1530836369250-ef71a3a5e48c?auto=format&fit=crop&w=1200&q=80',
    impacts: [
      'Digitalisation des paiements pour 100 productrices',
      'Accès facilité au micro-crédit campagne',
      'Formation aux outils numériques financiers',
    ],
    results: '+25% de revenus nets',
    beneficiaries: '100 femmes entrepreneures',
  },
  'yellior': {
    title: 'Projet YELLIOR',
    category: 'Agro-industrie',
    desc: "Accompagnement stratégique sur la transformation du manioc, de la banane plantain et de l'igname en farines à haute valeur ajoutée.",
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=1200&q=80',
    impacts: [
      'Certification qualité pour les farines premium',
      'Déploiement du réseau de distribution national',
      'Accompagnement à la levée de fonds',
    ],
    results: 'Gamme de 5 produits lancée',
    beneficiaries: '+500 femmes impactées',
  },
  'makore': {
    title: 'Projet MAKORÉ',
    category: 'Environnement',
    desc: "Valorisation des produits forestiers non ligneux (Beurre de makoré) par un groupement de femmes de Zaipobly. Lutte contre la déforestation.",
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1200&q=80',
    impacts: [
      'Préservation de 500 hectares de forêt primaire',
      'Valorisation économique du Makoré sauvage',
      'Structuration du groupement de femmes de Zaipobly',
    ],
    results: 'Impact déforestation : -15%',
    beneficiaries: 'Groupement de 50 femmes',
  }
};

const ProduitDetailPage = () => {
  const { id } = useParams();
  const solution = solutionsDB[id] || solutionsDB['neper'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main className="product-detail-page" style={{ paddingTop: '80px' }}>
      {/* Hero Banner */}
      <section
        style={{
          position: 'relative',
          height: '50vh',
          minHeight: '400px',
          backgroundImage: `url(${solution.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(16,24,40,0.9), rgba(16,24,40,0.2))',
          }}
        ></div>
        <div
          className="container"
          style={{ position: 'relative', zIndex: 1, paddingBottom: '3rem' }}
        >
          <Link
            to="/solutions"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--white)',
              textDecoration: 'none',
              marginBottom: '1.5rem',
              opacity: 0.8,
              transition: 'opacity 0.2s',
            }}
          >
            <ArrowLeft size={20} /> Retour au portfolio
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                backgroundColor: 'var(--primary)',
                color: 'var(--white)',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.875rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                display: 'inline-block',
              }}
            >
              {solution.category}
            </span>
            <h1 style={{ color: 'var(--white)', fontSize: '3rem', fontWeight: '800', margin: 0 }}>
              {solution.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
              gap: '4rem',
            }}
          >
            {/* Left Column : Description & Impacts */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 style={{ fontSize: '2rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                À propos du projet
              </h2>
              <p
                style={{
                  fontSize: '1.125rem',
                  color: 'var(--gray-600)',
                  lineHeight: '1.8',
                  marginBottom: '3rem',
                }}
              >
                {solution.desc} <br />
                <br />
                Ce projet s'inscrit dans la vision de l'Alliance Coreline de structurer des
                solutions à forte valeur ajoutée locale. En combinant notre expertise internationale
                et notre ancrage continental, nous déployons une architecture robuste conçue pour la
                pérennité.
              </p>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)', marginBottom: '1.5rem' }}>
                Impacts clés
              </h3>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                {solution.impacts.map((impact, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                      padding: '1rem',
                      backgroundColor: 'var(--gray-50)',
                      borderRadius: 'var(--radius)',
                      border: '1px solid var(--gray-100)',
                    }}
                  >
                    <CheckCircle2 color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
                    <span
                      style={{ fontSize: '1.05rem', color: 'var(--gray-700)', fontWeight: '500' }}
                    >
                      {impact}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right Column : Metrics & Call To Action */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div
                style={{
                  backgroundColor: 'var(--white)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-premium)',
                  border: '1px solid var(--gray-100)',
                  position: 'sticky',
                  top: '120px',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: 'var(--secondary)',
                    marginBottom: '2rem',
                    borderBottom: '2px solid var(--gray-100)',
                    paddingBottom: '1rem',
                  }}
                >
                  Aperçu des Résultats
                </h3>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    marginBottom: '3rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        padding: '10px',
                        borderRadius: '10px',
                        color: 'var(--primary)',
                      }}
                    >
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--gray-500)',
                          margin: 0,
                          fontWeight: '600',
                        }}
                      >
                        Performance
                      </p>
                      <p
                        style={{
                          fontSize: '1.1rem',
                          color: 'var(--secondary)',
                          margin: 0,
                          fontWeight: '700',
                        }}
                      >
                        {solution.results}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        padding: '10px',
                        borderRadius: '10px',
                        color: 'var(--primary)',
                      }}
                    >
                      <Users size={24} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--gray-500)',
                          margin: 0,
                          fontWeight: '600',
                        }}
                      >
                        Bénéficiaires
                      </p>
                      <p
                        style={{
                          fontSize: '1.1rem',
                          color: 'var(--secondary)',
                          margin: 0,
                          fontWeight: '700',
                        }}
                      >
                        {solution.beneficiaries}
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        padding: '10px',
                        borderRadius: '10px',
                        color: 'var(--primary)',
                      }}
                    >
                      <Factory size={24} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--gray-500)',
                          margin: 0,
                          fontWeight: '600',
                        }}
                      >
                        Partenaire
                      </p>
                      <p
                        style={{
                          fontSize: '1.1rem',
                          color: 'var(--secondary)',
                          margin: 0,
                          fontWeight: '700',
                        }}
                      >
                        Coreline Alliance
                      </p>
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '0.9rem', color: 'var(--gray-600)', marginBottom: '1rem' }}>
                    Intéressé par ce type de déploiement ?
                  </p>
                  <Link
                    to="/contact"
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                      padding: '15px',
                    }}
                  >
                    Contactez-nous
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProduitDetailPage;
