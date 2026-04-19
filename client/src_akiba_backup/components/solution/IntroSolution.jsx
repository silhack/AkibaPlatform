// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import farmersImg from "../../assets/farmers1.png";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const IntroSolution = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-10">
      <motion.h2
        className="text-normal-orange text-2xl md:text-3xl font-bold text-center mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Introduction à Akiba Platform
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.p
          className="text-gray-700 text-lg leading-relaxed text-justify"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Akiba Platform est une solution numérique de veille économique dédiée
          au secteur agroalimentaire. Elle centralise automatiquement des
          données fiables pour fournir des indicateurs clés (prix, production,
          exportations) via des tableaux de bord intuitifs. Accessible et
          adaptée au contexte local, elle aide les PME, coopératives et acteurs
          agricoles à mieux comprendre le marché et à prendre des décisions
          éclairées.
        </motion.p>

        <motion.img
          src={farmersImg}
          alt="Deux agriculteurs souriants"
          className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </section>
  );
};

export default IntroSolution;
