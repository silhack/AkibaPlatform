import React from "react";
import { LogoGrid } from "../home/LogoSection";
import IntroUs from "./IntroUs";

// eslint-disable-next-line no-unused-vars
const SectionUs = ({ title, subtitle, LogoComponent }) => {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-16 py-16">
      <IntroUs title={title} subtitle={subtitle} />
      <LogoComponent />
    </section>
  );
};

export const PartnerUs = () => (
  <SectionUs
    title="Nos partenaires & clients"
    subtitle="Nous collaborons avec des acteurs clés pour mener à bien notre mission"
    LogoComponent={LogoGrid}
  />
);
