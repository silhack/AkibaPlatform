import React from "react";

const WhyUsCard = ({ icon, titre, description }) => {
  return (
    <div className="p-6 flex flex-col rounded-md text-tertiary border-tertiary border justify-center items-center gap-5">
        <img src={icon} alt={titre} loading="lazy" className="w-30 object-cover h-30" />
      <h2 className="text-lg font-semibold text-center">{titre}</h2>
      <p className="text-sm text-justify md:h-[80px]">{description}</p>
    </div>
  );
};

export default WhyUsCard;
