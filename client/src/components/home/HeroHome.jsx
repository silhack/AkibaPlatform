import React from "react";

const HeroHome = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('src/assets/ImgBack.png')" }}
    >
      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-12 lg:px-16">
        <h1 className="text-white text-3xl md:text-5xl font-bold max-w-3xl leading-snug">
          <span className="text-normal-orange font-semibold text-5xl md:text-7xl">
            Akiba
          </span>{""}
          <span className="text-white">
            Solution — Votre allié stratégique dans l’agro
          </span>
        </h1>

        <p className="text-white text-xl mt-4 max-w-xl">
          <span className="text-normal-blue font-medium">Accédez</span> aux bons
          marchés. Décidez grâce aux bonnes données.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="bg-normal-orange px-6 py-3 rounded-full font-semibold shadow hover:bg-normal-orange-hover transition">
            Découvrir nos services
          </button>
          <button className="bg-normal-blue text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-normal-blue-hover transition">
            Contactez-Nous
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
