import React from "react";
import AboutUs from "../components/a-propos/AboutUs";
import { PartnerUs, ProjectUs } from "../components/a-propos/ProjectUs";
import Hero from "../components/ui/Hero";

const AboutPage = () => {
  return (
    <main>
      <Hero title={"À Propos"} subtitle={"Présentation AKIBA SOLUTION"} />
      <AboutUs />
      <ProjectUs />
      <PartnerUs />
    </main>
  );
};

export default AboutPage;
