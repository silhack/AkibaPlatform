import React from "react";
import { faqs } from "../../data/data";

const FAQ = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-12">
      <h2 className="text-center text-xl md:text-2xl font-bold text-normal-orange mb-8">
        Questions fréquentes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div key={index} className="p-6 flex items-start">
            <div
              className={`w-12 h-12 flex items-center justify-center rounded-md ${
                faq.isBlue
                  ? "bg-light-orange-hover text-normal-orange"
                  : "bg-light-blue text-normal-blue"
              }`}
            >
              <faq.icon className="text-2xl" />
            </div>
            <div className="ml-4">
              <h4
                className={`font-bold text-lg ${
                  faq.isBlue ? "text-normal-orange" : "text-normal-blue"
                }`}
              >
                {faq.question}
              </h4>
              <p className="text-gray-600 text-base">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
