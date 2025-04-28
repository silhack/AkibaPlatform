import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { LogosHome } from "./LogoSection";

// const fadeIn = {
//   initial: { opacity: 0 },
//   whileInView: { opacity: 1 },
//   transition: { duration: 0.8 },
// };

const slideUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

// const impactData = [
//     { value: 15, suffix: "+", label: "coopératives accompagnées" },
//     { value: 5, suffix: "M FCFA+", label: "de financements" },
//     { value: 2, suffix: "+", label: "pays" },
//     { value: 10, suffix: "M FCFA+", label: "d'investissements générés" }
// ];

const ImpactHome = () => {
  return (
    <section className="py-6 px-6 md:px-12 lg:px-16 mx-auto">
      {/* <motion.h3
                className="text-center text-lg text-normal-orange font-semibold"
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                AKIBA SOLUTION en chiffres
            </motion.h3>

            <motion.h2
                className="text-center text-2xl font-bold mt-2"
                variants={fadeIn}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                Des données qui témoignent de notre impact
            </motion.h2>

            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:-mx-28 md:grid-cols-4 gap-4 md:w-screen bg-normal-orange text-white py-6 mt-6 text-center"
                variants={slideUp}
                initial="initial"
                whileInView="whileInView"
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                {impactData.map((item, index) => (
                    <div key={index}>
                        <p className="text-2xl font-bold">
                            <CountUp start={0} end={item.value} duration={3} suffix={item.suffix} />
                        </p>
                        <p className="text-sm">{item.label}</p>
                    </div>
                ))}
            </motion.div> */}

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

        {/* Sous-texte */}
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
        <LogosHome />
      </div>
    </section>
  );
};

export default ImpactHome;
