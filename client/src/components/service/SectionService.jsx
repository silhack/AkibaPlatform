import React from "react";
import { services } from "../../data/data";
import CardService from "./CardService";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const SectionService = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      <h2 className="text-normal-orange text-center text-lg font-bold md:text-2xl uppercase">
        Découvrez les prestations que nous offrons à nos clients.
      </h2>
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <CardService {...service} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionService;
