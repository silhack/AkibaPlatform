import React from "react";

const CardUs = ({ title, options, isBlue }) => {
  return (
    <div
      className={`p-10 rounded-md text-center transition duration-300 ${
        isBlue ? "hover:border-normal-blue" : "hover:border-normal-orange"
      } hover:border`}
    >
      <h2
        className={`font-bold text-lg ${
          isBlue ? "text-normal-blue" : "text-normal-orange"
        }`}
      >
        {title}
      </h2>
      <ul className="list-disc list-inside mt-5 text-gray-700 space-y-2">
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default CardUs;
