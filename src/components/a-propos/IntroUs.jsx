import React from "react";

const IntroUs = ({ title, subtitle }) => {
  return (
    <div className="max-w-2xl">
      <h2 className="text-normal-orange text-2xl md:text-3xl font-bold mb-6">
        {title}
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">{subtitle}</p>
    </div>
  );
};

export default IntroUs;
