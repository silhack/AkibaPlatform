import React from "react";
import CommentSection from "../components/home/CommentSection";
import HeroHome from "../components/home/HeroHome";
import ImpactHome from "../components/home/ImpactHome";
import ProduitsSection from "../components/home/ProduitSection";
import ServiceSection from "../components/home/ServiceSection";
import WhyUsSection from "../components/home/WhyUsSection";

const HomePage = () => {
  return (
    <main>
      <HeroHome />
      <ProduitsSection />
      <ServiceSection />
      <WhyUsSection />
      <CommentSection />
      <ImpactHome />
    </main>
  );
};

export default HomePage;
