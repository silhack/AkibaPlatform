import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import ProduitCard from "../ui/ProduitCard";
import axiosClient from "../../services/axiosClient";

// Animation fade up
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const ProduitsSection = () => {
  const [produits, setProduits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduits = async () => {
      try {
        const response = await axiosClient.get("/produits");
        setProduits(response.data);
      } catch (error) {
        setError(error.response?.data || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };
    fetchProduits();
  }, []);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Chargement des produits...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center">
        <p className="text-red-500">Erreur : {error}</p>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 md:px-12 lg:px-16 bg-white">
      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-normal-orange text-lg font-bold md:text-2xl uppercase">
          Nos Produits
        </h2>
        <Link
          to="/produits"
          className="text-sm text-gray-700 underline hover:text-normal-blue"
        >
          Voir tous nos produits
        </Link>
      </motion.div>

      {/* Sous-texte */}
      <motion.p
        className="md:w-1/2 text-base md:text-lg mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Nous vous fournissons une large gamme de produits agricoles, prêts à
        être commercialisés ou transformés.
      </motion.p>

      {/* Cards produits animées */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {produits.slice(0, 3).map((produit, index) => (
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

export default ProduitsSection;
