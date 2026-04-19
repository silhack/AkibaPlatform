import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import { infoContacts } from "../../data/config";

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
            text={infoContacts.adresse}
          />
          <ContactInfo
            Icon={FaPhone}
            titre="Téléphone"
            text={`${infoContacts.phone_civ} / ${infoContacts.phone_fr} `}
          />
          <ContactInfo
            Icon={FaEnvelope}
            titre="Email"
            text={infoContacts.email}
          />
        </div>

        <div className="bg-normal-orange p-8 flex flex-col text-base justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
