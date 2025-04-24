import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ComImg from "../../assets/ComProf.png";
import ComImg2 from "../../assets/CommentProfile.png";

// Animation de base
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
    },
  }),
};

const CommentSection = () => {
  const testimonials = [
    {
      name: "JANE DOE",
      role: "COMMERCANTE",
      text: "Lorem ipsum dolor sit amet consectetur. Ut aliquet gravida. Convallis luctus ornare tristique morbi mauris habitant nisl tellus.",
      image: ComImg2,
    },
    {
      name: "JOHN DOE",
      role: "DG AGRI",
      text: "Lorem ipsum dolor sit amet consectetur. Ut aliquet gravida. Convallis luctus ornare tristique morbi mauris habitant nisl tellus.",
      image: ComImg,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 bg-white">
      {/* Titre */}
      <motion.h2
        className="text-normal-orange text-lg font-bold md:text-2xl mb-4 uppercase"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        Ce qu'ils disent d'AKIBA SOLUTION...
      </motion.h2>

      {/* Sous-titre */}
      <motion.p
        className="md:w-1/2 text-base md:text-lg mb-8"
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Découvrez les retours de celles et ceux qui nous ont fait confiance pour
        transformer leurs idées en projets concrets.
      </motion.p>

      {/* Cartes */}
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 border border-tertiary-dark hover:bg-normal-orange hover:border-none rounded-sm hover:text-white transition-all duration-300 ease-in-out"
            variants={fadeUp}
            custom={index + 2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
                loading="lazy"
              />
              <div className="text-center">
                <h4 className="text-lg font-bold">{testimonial.name}</h4>
                <p className="text-sm font-medium">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-center mt-5 max-w-[500px] mx-auto">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CommentSection;
