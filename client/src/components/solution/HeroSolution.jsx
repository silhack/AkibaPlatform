/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const HeroSolution = () => {
  return (
    <motion.section
      className="bg-normal-blue text-white text-center py-12 px-6 sm:px-12 lg:px-24 space-y-7"
      variants={slideUp}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold">
          <span className="text-7xl md:text-8xl text-white">1</span> plateforme,
          PME structurée et financée
        </h1>

        <p className="text-lg md:text-xl mt-4">
          Optimisez votre gestion, accédez aux financements et développez votre
          marché grâce à notre solution tout-en-un.
        </p>
        <button className="mt-8 font-medium bg-dark-blue text-white px-6 py-3 cursor-pointer  rounded-full hover:border-2 hover:border-white hover:bg-transparent transition duration-300">
          Ouvrez un compte
        </button>
      </div>
    </motion.section>
  );
};

export default HeroSolution;
