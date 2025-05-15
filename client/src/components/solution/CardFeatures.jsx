const CardFeatures = ({ feature }) => {
  return (
    <div
      className={`
            bg-white rounded-xl p-6 text-center transition-all duration-300
            border border-transparent 
            hover:border ${
              feature.isBlue
                ? "hover:border-normal-blue"
                : "hover:border-normal-orange"
            }
            shadow-sm 
            ${
              feature.isBlue
                ? "hover:shadow-[0_4px_12px_rgba(59,130,246,0.15)]"
                : "hover:shadow-[0_4px_12px_rgba(251,146,60,0.15)]"
            }
          `}
    >
      <h3
        className={`text-lg font-semibold ${
          feature.isBlue ? "text-normal-blue" : "text-normal-orange"
        } mb-2`}
      >
        {feature.title}
      </h3>
      <p className="text-gray-700 text-sm">{feature.description}</p>
    </div>
  );
};

export default CardFeatures;
