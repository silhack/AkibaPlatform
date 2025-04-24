import React from "react";
import SectionService from "../components/service/SectionService";
import Hero from "../components/ui/Hero";
import CallToAction from "../components/ui/CallToA";

const ServicePage = () => {
  return (
    <main>
      <Hero title={"Nos Services"} subtitle={"Ce que nous savons faire"} />
      <SectionService />
      <CallToAction
        text={
          `Chez Akiba Solution, nous ne faisons pas que conseiller. 
          Nous mettons en mouvement des solutions concrètes, 
          durables et sur-mesure. Prêt à passer à l’action ?`
        }
        cta={"Nous contacter"}
        link={"contacts"}
      />
    </main>
  );
};

export default ServicePage;
