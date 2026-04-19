import React from "react";
import ContactSection from "../components/contact/ContactSection";
import Hero from "../components/ui/Hero";

const ContactPage = () => {
  return (
    <main>
      <Hero
        title={"Nous contacter"}
        subtitle={"Besoin d’informations ? Nous contacter"}
      />
      <ContactSection />
    </main>
  );
};

export default ContactPage;
