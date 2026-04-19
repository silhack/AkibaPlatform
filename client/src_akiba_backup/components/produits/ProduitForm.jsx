import React, { useState } from "react";
import axiosClient from "../../services/axiosClient";

const ProduitForm = ({ produitNom }) => {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    objet: `Commande de produit : ${produitNom}`,
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Nom requis.";
    if (!formData.telephone.trim()) newErrors.telephone = "Téléphone requis.";
    if (!formData.email.trim()) newErrors.email = "Email requis.";
    if (!formData.message.trim()) newErrors.message = "Message requis.";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axiosClient.post("/contacts/mail", formData);
        setSuccessMessage(response.data.message);
        setFormData({
          nom: "",
          telephone: "",
          email: "",
          objet: `Commande de produit : ${produitNom}`,
          message: "",
        });
        setErrors({});
        setTimeout(() => {
          setSuccessMessage("");
        }, 2000);
      } catch (error) {
        console.error(
          "Erreur lors de l’envoi du message",
          error.response?.data || error.message
        );
      }
    }
  };

  const inputClass =
    "text-base outline-none rounded-sm focus:ring-1 focus:border-none focus:ring-normal-blue border border-tertiary-dark p-3 w-full";

  return (
    <form onSubmit={handleSubmit} className="mt-5 space-y-6">
      <h2 className="text-2xl font-semibold">Passer une commande</h2>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {successMessage}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="nom"
            placeholder="Nom complet"
            value={formData.nom}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.nom && (
            <p className="text-sm text-red-500 mt-1">{errors.nom}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            name="telephone"
            placeholder="Numéro de téléphone"
            value={formData.telephone}
            onChange={handleChange}
            className={inputClass}
          />
          {errors.telephone && (
            <p className="text-sm text-red-500 mt-1">{errors.telephone}</p>
          )}
        </div>
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className={inputClass}
        />
        {errors.email && (
          <p className="text-sm text-red-500 mt-1">{errors.email}</p>
        )}
      </div>

      <input
        type="text"
        name="objet"
        value={formData.objet}
        readOnly
        className={`${inputClass} bg-gray-100 cursor-not-allowed`}
      />

      <div>
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className={`h-32 ${inputClass}`}
        ></textarea>
        {errors.message && (
          <p className="text-sm text-red-500 mt-1">{errors.message}</p>
        )}
      </div>

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
