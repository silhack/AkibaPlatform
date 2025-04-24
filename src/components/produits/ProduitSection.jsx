import React from "react";
import { produits } from "../../data/data";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ProduitCard from "../ui/ProduitCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProduitSection = () => {
  return (
    <section className="bg-white px-6 md:px-12 lg:px-16 py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {produits.map((produit, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ProduitCard {...produit} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProduitSection;
