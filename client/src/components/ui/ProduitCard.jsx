import React from "react";
import { useNavigate } from "react-router";
import { pathToImage } from "../../utils/utils";

const ProduitCard = ({ id, image, nom, accroche, description, avantages }) => {
  const navigate = useNavigate();

  const goToDetails = () => navigate(`${id}`)

  return (
    <div className="bg-white rounded-xl border  border-transparent hover:border-normal-blue/70 overflow-hidden flex flex-col transition duration-200">
      <img src={pathToImage(image)} alt={nom} loading="lazy" className="h-48 w-full object-cover" />

      <div className="p-5 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-semibold text-lg text-normal-blue mb-1">{nom}</h3>
          <p className="text-sm italic text-gray-500 mb-3">{accroche}</p>

          <p className="text-sm h-[40px] text-gray-700 mb-3">{description}</p>

          <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
            {avantages.slice(0, 1).map((avantage, index) => (
              <li key={index}>{avantage}</li>
            ))}
          </ul>
        </div>

        <button onClick={goToDetails} className="mt-6 self-start bg-normal-blue text-white w-full px-4 py-2 rounded hover:bg-normal-blue-hover text-sm transition">
          En savoir plus
        </button>
      </div>
    </div>
  );
};

export default ProduitCard;
