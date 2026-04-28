import { motion } from 'framer-motion';
import { Box, Leaf, Sprout, Target } from 'lucide-react';
import { useEffect, useState } from 'react';
import SEO from '../components/common/SEO';

const solutions = [
  {
    id: 'neper',
    title: 'Projet NEPER (Neper Ventures)',
    category: 'Agro-industrie',
    icon: Target,
    desc: "Accompagnement à la mise en place de 3 unités de transformation agroalimentaire durables (Manioc, Karité) pour créer de la valeur et de l'emploi localement.",
    image:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    color: '#0284c7',
  },
  {
    id: 'cassava',
    title: 'Projet Cassava (Coopérative Edissou)',
    category: 'Finance & Inclusion',
    icon: Box,
    desc: 'Inclusion financière et numérique pour 100 femmes productrices de la coopérative Edissou de Lolobo. Subvention de la fondation du Crédit Coopératif.',
    image:
      'https://images.unsplash.com/photo-1530836369250-ef71a3a5e48c?auto=format&fit=crop&w=800&q=80',
    color: '#16a34a',
  },
  {
    id: 'yellior',
    title: 'Projet YELLIOR',
    category: 'Agro-industrie',
    icon: Sprout,
    desc: "Accompagnement stratégique sur la transformation du manioc, de la banane plantain et de l'igname en farines à haute valeur ajoutée. +500 femmes impactées.",
    image:
      'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
    color: '#d97706',
  },
  {
    id: 'makore',
    title: 'Projet MAKORÉ',
    category: 'Environnement',
    icon: Leaf,
    desc: "Valorisation des produits forestiers non ligneux (Beurre de makoré) par un groupement de femmes de Zaipobly. Lutte contre la déforestation et création d'emplois.",
    image:
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&q=80',
    color: '#059669',
  },
];

const categories = ['Tous', 'Agro-industrie', 'Finance & Inclusion', 'Environnement'];

const SolutionsPage = () => {
  const [filter, setFilter] = useState('Tous');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredSolutions =
    filter === 'Tous' ? solutions : solutions.filter(s => s.category === filter);

  return (
    <main className="solutions-page" style={{ paddingTop: '100px' }}>
      <SEO
        title="Nos Missions"
        description="Découvrez le portfolio des missions réalisées par Coreline Alliance : agro-industrie, inclusion financière et projets environnementaux en Afrique."
      />
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}
          >
            <span className="badge">Nos Missions</span>
            <h2>Projets Réalisés</h2>
            <p className="lead" style={{ marginTop: '1.5rem', color: 'var(--gray-600)' }}>
              Découvrez nos missions concrètes menées depuis 2024 au service du développement
              durable africain.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '4rem',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                aria-label={`Filtrer par ${cat}`}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  border: filter === cat ? 'none' : '1px solid var(--gray-200)',
                  backgroundColor: filter === cat ? 'var(--primary)' : 'transparent',
                  color: filter === cat ? 'var(--white)' : 'var(--gray-600)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredSolutions.map((sol, index) => {
              const Icon = sol.icon;
              return (
                <motion.div
                  key={sol.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  style={{
                    backgroundColor: 'var(--white)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    boxShadow: 'var(--shadow)',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '1px solid var(--gray-100)',
                  }}
                  className="solution-card"
                >
                  <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={sol.image}
                      alt={sol.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        backgroundColor: 'rgba(255,255,255,0.9)',
                        padding: '4px 12px',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: 'bold',
                        color: sol.color,
                      }}
                    >
                      {sol.category}
                    </div>
                  </div>
                  <div
                    style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '1rem',
                      }}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          backgroundColor: `${sol.color}20`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: sol.color,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <h3
                        style={{
                          fontSize: '1.25rem',
                          fontWeight: '700',
                          color: 'var(--secondary)',
                          margin: 0,
                        }}
                      >
                        {sol.title}
                      </h3>
                    </div>
                    <p
                      style={{
                        color: 'var(--gray-600)',
                        lineHeight: '1.6',
                        marginBottom: '1.5rem',
                        flex: 1,
                      }}
                    >
                      {sol.desc}
                    </p>
                    {/* On cache le lien "En savoir plus" car nous n'avons pas fait les routes détaillées pour tous, mais ça reste préparé */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SolutionsPage;
