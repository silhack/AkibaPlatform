import React from "react";

// eslint-disable-next-line no-unused-vars
const ContactInfo = ({ Icon, titre, text }) => {
  return (
    <div className="border border-tertiary-hover p-4 rounded">
      <div className="flex items-center space-x-3 text-normal-orange text-lg font-semibold">
        <Icon size={24} />
        <span>{titre}</span>
      </div>
      <p className="mt-2 uppercase">
        {text}
      </p>
    </div>
  );
};

export default ContactInfo;
