// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import { LogoGrid } from "./LogoSection";

const slideUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const ImpactHome = () => {
  return (
    <section className="py-6 px-6 md:px-12 lg:px-16 mx-auto">
      <div className="">
        <motion.h2
          className="text-normal-orange text-lg font-bold md:text-2xl mb-4 uppercase"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Nos partenaires & clients
        </motion.h2>

        <motion.p
          className="md:w-1/2 text-base md:text-lg mb-8"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Ils croient en notre mission et nous accompagnent
        </motion.p>

        <LogoGrid />
      </div>
    </section>
  );
};

export default ImpactHome;
