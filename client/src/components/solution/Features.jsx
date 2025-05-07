import React from "react";
import CardFeatures from "./CardFeatures";
import { features } from "../../data/data";

const Features = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
      <h2 className="text-normal-orange text-2xl md:text-3xl font-bold text-center mb-6">
        Fonctionnalités clés
      </h2>
      <CardFeatures features={features} />
    </section>
  );
};

export default Features;
