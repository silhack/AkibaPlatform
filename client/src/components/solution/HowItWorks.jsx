import React from "react";
import { steps } from "../../data/data";

const HowItWorks = () => {
  return (
    <section className="px-6 md:px-12 lg:px-16">
      <h2 className="text-center text-2xl font-bold text-normal-orange mb-8">
        Comment ça marche ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {steps.map((step, index) => (
          <div
            key={index}
            className="p-6 rounded-lg space-y-4 hover:bg-light-blue transition"
          >
            <h3 className="text-5xl font-bold text-normal-orange">
              {step.number}
            </h3>
            <h4 className="text-lg font-semibold text-normal-blue">
              {step.title}
            </h4>
            <p className="text-gray-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
