import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Leaf, Zap, Globe } from 'lucide-react';

const MissionSection = () => {
  const transitions = [
    {
      icon: <Leaf />,
      title: 'Transition Alimentaire',
      description: 'Favoriser la production et la transformation locale durable.',
    },
    {
      icon: <Zap />,
      title: 'Transition Énergétique',
      description: 'Accélérer l\'accès aux énergies renouvelables et bas-carbone.',
    },
    {
      icon: <Globe />,
      title: 'Infrastructure Durable',
      description: 'Bâtir des socles logistiques et numériques résilients.',
    },
  ];

  return (
    <section className="section mission-section" id="mission">
      <div className="container grid-2">
        <motion.div 
          className="mission-text"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Notre Impact</span>
          <h2>Accélérer le développement durable en Afrique</h2>
          <p className="lead">
            L'Afrique comptera 2,5 milliards d'habitants d'ici 2050. Aujourd'hui, le continent importe encore plus de 50 milliards USD de produits alimentaires par an.
          </p>
          <p>
            Coreline mobilise les expertises financières, industrielles et technologiques pour transformer ces défis en opportunités de valeur locale et de croissance durable.
          </p>
          <div className="mission-values">
            {['Respect & Éthique', 'Innovation & Excellence', 'Solidarité & Impact'].map((value, i) => (
              <div className="value-item" key={i}>
                <CheckCircle size={20} />
                <span>{value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="transition-grid">
          {transitions.map((item, i) => (
            <motion.div 
              className="transition-item" 
              key={i}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="transition-icon">{item.icon}</div>
              <div className="transition-info">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
