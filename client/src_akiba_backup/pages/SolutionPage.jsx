import React from "react";
import CallToAction from "../components/ui/CallToA";
import FAQ from "../components/solution/Faq";
import Features from "../components/solution/Features";
import HeroSolution from "../components/solution/HeroSolution";
import HowItWorks from "../components/solution/HowItWorks";
import IntroSolution from "../components/solution/IntroSolution";

const SolutionPage = () => {
  return (
    <main>
      <HeroSolution />
      <IntroSolution />
      <Features />
      <HowItWorks />
      <FAQ />
      <CallToAction
        text={
          "Rejoignez dès aujourd’hui les entreprises qui digitalisent et financent leur activité avec Akiba Platform !"
        }
        cta={"Créer un compte"}
      />
    </main>
  );
};

export default SolutionPage;
