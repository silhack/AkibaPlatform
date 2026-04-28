import { motion } from 'framer-motion';
import { Box, Sprout, Target } from 'lucide-react';
import { Link } from 'react-router';

const Portfolio = () => {
  const projects = [
    {
      icon: <Target />,
      title: 'Projet NEPER',
      description:
        'Accompagnement à la mise en place de 3 unités de transformation agroalimentaire durables pour Neper Ventures (Manioc & Karité).',
      featured: true,
      id: 'neper',
    },
    {
      icon: <Sprout />,
      title: 'Projet YELLIOR',
      description:
        'Stratégie de commercialisation et de financement pour la transformation locale du manioc et banane en farines premium à haute valeur ajoutée.',
      featured: false,
      id: 'yellior',
    },
    {
      icon: <Box />,
      title: 'Projet Cassava (Edissou)',
      description:
        "Projet d'inclusion financière et numérique pour 100 femmes de la coopérative de Lolobo, soutenu par la Fondation Crédit Coopératif.",
      featured: false,
      id: 'cassava',
    },
  ];

  return (
    <section className="section section-alt" id="solutions">
      <div className="container">
        <div className="section-header">
          <span className="badge">Portfolio</span>
          <h2>Nos missions réalisées</h2>
          <p>Aperçu de nos réalisations concrètes sur le terrain depuis 2024.</p>
        </div>

        <div className="services-grid">
          {projects.map((project, i) => (
            <motion.div
              className={`service-card ${project.featured ? 'featured' : ''}`}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="service-icon">{project.icon}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link to="/solutions" className="btn btn-primary">
            Découvrir tous nos projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
