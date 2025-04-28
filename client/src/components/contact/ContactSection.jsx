import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactSection = () => {
  return (
    <section className="py-6 px-6 md:px-12 lg:px-16">
      <h2 className="text-center font-semibold text-2xl md:text-5xl m-12 text-normal-blue">
        Nous sommes à votre disposition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Colonne gauche : Infos de contact */}
        <div className="bg-normal-blue text-white p-8 flex font-medium text-base md:text-lg flex-col justify-center space-y-6">
          <ContactInfo
            Icon={FaMapMarkerAlt}
            titre="Adresse"
            text="28 BP 437 Abidjan 28, Cocody Angré 7è Tranche"
          />
          <ContactInfo
            Icon={FaPhone}
            titre="Téléphone"
            text="+ (225) 08 33 45 63 / + (33) 7 53 34 25 98"
          />
          <ContactInfo
            Icon={FaEnvelope}
            titre="Email"
            text="info@akibasolution.com"
          />
        </div>

        {/* Colonne droite : Formulaire */}
        <div className="bg-normal-orange p-8 flex flex-col text-base justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
