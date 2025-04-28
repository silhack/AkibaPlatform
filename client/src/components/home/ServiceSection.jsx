import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { servicesHome } from "../../data/data";
import { Link } from "react-router";
import ServiceCard from "./ServiceCard";

// Animation fadeUp simple
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ServiceSection = () => {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-16 bg-white">
      {/* Header Section */}
      <h2
        className="text-normal-orange text-lg font-bold md:text-2xl mb-4 uppercase"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        variants={fadeUp}
      >
        Nos Services
      </h2>

      <motion.p
        className="md:w-1/2 text-base md:text-lg mb-8"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        Nous travaillons pour structurer votre activité, vous connecter aux
        marchés et faciliter l’accès aux financements.
      </motion.p>

      {/* Cartes de services */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-2">
        {servicesHome.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ServiceCard {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
