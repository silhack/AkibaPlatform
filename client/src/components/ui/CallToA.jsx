import React from "react";
import { useNavigate } from "react-router";

const CallToAction = ({ text, cta, link }) => {
  const navigate = useNavigate();

  const goToLink = () => navigate(`/${link}`);

  return (
    <section className="container mx-auto gap-8 px-6 md:px-12 lg:px-16  flex md:flex-row flex-col items-center justify-center">
      <h2 className="text-lg w-full md:w-1/2 md:text-xl  md:mb-0 ">{text}</h2>
      <button
        onClick={goToLink}
        className="mt-4 bg-normal-blue w-full md:w-1/2 text-white px-6 py-3 rounded-lg font-semibold hover:bg-normal-blue-hover transition"
      >
        {cta}
      </button>
    </section>
  );
};

export default CallToAction;
