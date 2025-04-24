import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { whyUs } from "../../data/data";
import WhyUsCard from "./WhyUsCard";

// Animation de base pour les éléments qui montent
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Animation pour le header qui descend
const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

const WhyUsSection = () => {
  return (
    <section className="bg-normal-blue text-white w-full mt-12 py-8 sm:px-8 px-6 md:px-12 lg:px-16 flex flex-col justify-center items-center gap-8">
      {/* Titre & texte */}
      <motion.div
        className="max-w-lg text-center md:text-left"
        variants={slideDown}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center uppercase mb-4">
          Pourquoi nous choisir ?
        </h2>
        <p className="text-base sm:text-lg leading-relaxed text-center max-w-[600px]">
          Nous sommes un cabinet engagé aux côtés des acteurs de
          l’agro-industrie, des cosmétiques et de l’innovation en Afrique. Notre
          force repose sur une combinaison unique de terrain, d’expertise et de
          vision stratégique.
        </p>
      </motion.div>

      {/* Grille des éléments */}
      <div className="grid gap-10 sm:grid-cols-2 items-center mt-5 lg:grid-cols-3">
        {whyUs.map((element, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <WhyUsCard {...element} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyUsSection;
