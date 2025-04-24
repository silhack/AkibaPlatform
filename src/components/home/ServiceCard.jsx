import React from "react";

const ServiceCard = ({ icon, titre, description, isBlue }) => {
  return (
    <div className={`ring-2 p-6 flex flex-col rounded-md justify-center items-center gap-5 ${isBlue ? "ring-normal-blue/50" : "ring-normal-orange/50"}`}>
      <div className="border border-gray-300 p-3 rounded-lg flex items-center justify-center">
        <img src={icon} alt={titre} loading="lazy" className="w-12 object-cover h-12" />
      </div>
      <h2 className={`text-xl font-semibold text-center ${isBlue ? "text-normal-blue" : "text-normal-orange"} `}>{titre}</h2>
      <p className="text-sm text-justify md:h-[70px]">{description}</p>
    </div>
  );
};

export default ServiceCard;
