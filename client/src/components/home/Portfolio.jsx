import { motion } from 'framer-motion';
import { Leaf, Tractor, Zap } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      icon: <Leaf />,
      title: 'Projet Yellior',
      description:
        "Transformation du maïs en farine premium. Un modèle d'industrialisation verticale pour renforcer la souveraineté alimentaire régionale.",
      featured: true,
    },
    {
      icon: <Tractor />,
      title: 'Projet Makoré',
      description:
        "Accompagnement d'une coopérative de 500+ femmes vers la certification bio et l'exportation directe vers les marchés européens.",
      featured: false,
    },
    {
      icon: <Zap />,
      title: 'Projet Edissou',
      description:
        "Développement d'infrastructures solaires pour l'irrigation autonome, améliorant les rendements agricoles tout en réduisant l'empreinte carbone.",
      featured: false,
    },
  ];

  return (
    <section className="section section-alt" id="solutions">
      <div className="container">
        <div className="section-header">
          <span className="badge">Portfolio</span>
          <h2>Projets & Investissements</h2>
          <p>Des réalisations concrètes au service du développement durable.</p>
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
              <a href="#contact" className="service-link">
                Détails du projet →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
