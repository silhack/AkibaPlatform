import React from "react";

const CardService = ({ image, icon, titre, description, options, reverse }) => {
  return (
    <section
      className={`py-16 px-6 bg-white flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center gap-16 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl rounded-2xl`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={image}
            alt={titre}
            loading="lazy"
            className="relative w-full max-w-[300px] md:max-w-[400px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

      {/* Texte */}
      <div className="w-full md:w-1/2 flex flex-col items-center  md:items-start gap-6">
        {/* Badge icône */}
        <div className="bg-normal-orange/20 inset-shadow-sm inset-shadow-normal-orange/25 p-4 rounded-full w-fit flex items-center justify-center">
          <img
            src={icon}
            alt={titre}
            loading="lazy"
            className="w-10 object-cover h-10"
          />
        </div>

        {/* Titre */}
        <h3 className="text-xl md:text-2xl font-bold mb-3">{titre}</h3>

        {/* Paragraphe */}
        <p className="text-gray-600 mb-4 text-center md:text-justify leading-relaxed">{description}</p>

        {/* Liste à puces */}
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CardService;
