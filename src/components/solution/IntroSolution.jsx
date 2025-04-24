import React from "react";
import farmersImg from "../../assets/farmers1.png";

const IntroSolution = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-10">
      <h2 className="text-normal-orange text-2xl md:text-3xl font-bold text-center mb-8">
        Introduction à Akiba Platform
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          Akiba Platform est une solution tout-en-un conçue pour aider les PME
          agroalimentaires à se digitaliser, structurer leurs opérations et
          accéder aux financements et aux marchés. Grâce à l'intelligence
          artificielle et à l'analyse de données, elle permet aux entreprises de
          gérer efficacement leurs activités, tout en facilitant leur croissance
          et leur compétitivité.
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
