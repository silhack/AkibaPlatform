import { motion } from 'framer-motion';

const BentoServices = () => {
  return (
    <section className="section" id="produits">
      <div className="container">
        <div className="section-header">
          <span className="badge">Piliers Stratégiques</span>
          <h2>Notre Modèle Opérationnel</h2>
          <p>Une approche duale pour transformer le potentiel en valeur durable.</p>
        </div>

        <div className="bento-grid">
          <motion.div
            className="bento-item large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>Coreline Origine</h3>
            <p>
              Structuring Center : Identification, développement et ingénierie de projets
              agro-industriels et énergétiques à fort impact. Nous transformons les idées en
              opportunités bancables.
            </p>
            <span className="bento-tag">Ingénierie de Projet</span>
          </motion.div>

          <motion.div
            className="bento-item tall"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3>IYWF 2026</h3>
            <p>
              International Year of the Woman Farmer : Coreline s'engage au cœur de cette initiative
              mondiale pour renforcer les capacités des femmes dans l'agriculture durable.
            </p>
            <span className="bento-tag">Initiative 2026</span>
          </motion.div>

          <motion.div
            className="bento-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Coreline Invest</h3>
            <p>
              Capital Mobilization : Connexion entre les capitaux institutionnels et les projets
              durables en Afrique.
            </p>
            <span className="bento-tag">Assets & Finance</span>
          </motion.div>

          <motion.div
            className="bento-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Accompagnement Elite</h3>
            <p>Conseil stratégique pour les gouvernements et les grands groupes privés.</p>
            <span className="bento-tag">Gouvernance</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoServices;
