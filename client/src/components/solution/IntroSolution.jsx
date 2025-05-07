import React from "react";
import farmersImg from "../../assets/farmers1.png";

const IntroSolution = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-10">
      <h2 className="text-normal-orange text-2xl md:text-3xl font-bold text-center mb-8">
        Introduction à Akiba Platform
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <p className="text-gray-700 text-lg leading-relaxed text-justify">
          Akiba Platform est une solution numérique de veille économique dédiée
          au secteur agroalimentaire. Elle centralise automatiquement des
          données fiables pour fournir des indicateurs clés (prix, production,
          exportations) via des tableaux de bord intuitifs. Accessible et
          adaptée au contexte local, elle aide les PME, coopératives et acteurs
          agricoles à mieux comprendre le marché et à prendre des décisions
          éclairées.
        </p>
        <img
          src={farmersImg}
          alt="Deux agriculteurs souriants"
          className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default IntroSolution;
