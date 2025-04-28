import React, { useState } from "react";

const ProduitForm = ({ produitNom }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    objet: `Commande de produit : ${produitNom}`,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Données envoyées :", formData);
  };

  const inputClass =
    "text-base outline-none rounded-sm focus:ring-1 focus:border-none focus:ring-normal-blue border border-tertiary-dark p-3 w-full";

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-6">
      <h2 className="text-2xl font-semibold">Passer une commande</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nom complet"
          value={formData.name}
          onChange={handleChange}
          className={inputClass}
        />
        <input
          type="text"
          name="phone"
          placeholder="Numéro de téléphone"
          value={formData.phone}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className={inputClass}
      />

      <input
        type="text"
        name="objet"
        value={formData.objet}
        readOnly
        className={`${inputClass} bg-gray-100 cursor-not-allowed`}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className={`h-32 ${inputClass}`}
      ></textarea>

      <button
        type="submit"
        className="bg-normal-blue text-white py-3 px-6 w-full font-bold text-lg hover:bg-normal-blue-hover transition duration-200"
      >
        Nous contacter
      </button>
    </form>
  );
};

export default ProduitForm;
