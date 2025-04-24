// eslint-disable-next-line no-unused-vars
import { animate, motion } from "framer-motion";
import React from "react";
import { Link } from "react-router";

const slideUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
};

const Hero = ({ title, subtitle }) => {
  return (
    <motion.section
      className="bg-[#539edd] text-white py-12 sm:px-12 px-6 md:px-12 lg:px-16 space-y-7"
      variants={slideUp}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <h4 className="font-bold text-xl sm:text-2xl">{title}</h4>
      <h2 className="font-bold text-3xl sm:text-4xl">{subtitle}</h2>
      <div className="flex items-center space-x-1">
        <Link
          to="/"
          className="text-lg hover:text-normal-orange-hover transition duration-200"
        >
          Accueil
        </Link>
        <p className="text-lg font-bold">/ {title}</p>
      </div>
    </motion.section>
  );
};

export default Hero;
