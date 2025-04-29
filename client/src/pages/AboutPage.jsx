import React from "react";
import AboutUs from "../components/a-propos/AboutUs";
import { PartnerUs } from "../components/a-propos/ProjectUs";
import Hero from "../components/ui/Hero";

const AboutPage = () => {
  return (
    <main>
      <Hero title={"À Propos"} subtitle={"Présentation AKIBA SOLUTION"} />
      <AboutUs />
      <PartnerUs />
    </main>
  );
};

export default AboutPage;
