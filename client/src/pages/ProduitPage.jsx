import React from "react";
import ProduitSection from "../components/produits/ProduitSection";
import Hero from "../components/ui/Hero";

const ProduitPage = () => {
  return (
    <main>
      <Hero title={"Nos produits"} subtitle={"Des produits qui transforment l’agriculture africaine"} />
      <ProduitSection />
    </main>
  );
};

export default ProduitPage;
