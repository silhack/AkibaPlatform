import React from "react";
import farmersImg from "../../assets/farmers.png";
import { expertiseData } from "../../data/data";
import CardUs from "./CardUs";
import IntroUs from "./IntroUs";

const textStyle = "text-gray-700 text-lg leading-relaxed";

const AboutUs = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-normal-orange text-2xl md:text-3xl font-bold mb-4">
          Qui sommes-nous ?
        </h2>
        <p className={`${textStyle} mb-4`}>
          Akiba Solution est une entreprise de conseil et technologie qui aide
          les PME agroalimentaires africaines à se structurer, se digitaliser et
          accéder aux financements et marchés.
        </p>
        <p className={textStyle}>
          Grâce à l'IA et l'analyse de données, nous optimisons leur gestion et
          facilitons leur croissance. Convaincus que l'agroalimentaire est clé
          pour le développement économique et la sécurité alimentaire, nous
          offrons des solutions simples, performantes et adaptées aux réalités
          du terrain.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mt-12">
        <div className="max-w-2xl">
          <IntroUs
            title={"Notre mission et nos valeurs"}
            subtitle={
              "Notre mission est d’accompagner les PME agroalimentaires dans leur digitalisation, structuration et financement pour assurer leur compétitivité et leur durabilité."
            }
          />
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              <strong>Innovation :</strong> Exploiter la puissance des données
              et de l'IA pour des solutions performantes.
            </li>
            <li>
              <strong>Impact :</strong> Favoriser la sécurité alimentaire et la
              croissance économique en Afrique.
            </li>
            <li>
              <strong>Expertise et accompagnement :</strong> Offrir un conseil
              stratégique et technique sur mesure.
            </li>
            <li>
              <strong>Collaboration :</strong> Travailler avec des partenaires
              locaux et internationaux pour maximiser les opportunités.
            </li>
            <li>
              <strong>Transparence et éthique :</strong> Assurer la fiabilité et
              la sécurité des données de nos clients.
            </li>
          </ul>
        </div>
        <div className="flex justify-center w-full lg:w-auto">
          <img
            src={farmersImg}
            alt="Groupe d’agriculteurs africains souriants dans un champ"
            className="w-full h-92 max-w-md rounded-lg shadow-sm object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start gap-6 mt-12">
        <IntroUs
          title={"Notre expertise"}
          subtitle={
            "Nous combinons technologie et accompagnement stratégique pour offrir des solutions adaptées aux PME agroalimentaires"
          }
        />
        <div className="grid md:grid-cols-2 gap-6">
          {expertiseData.map((item, index) => (
            <CardUs key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
