import React, { useState } from "react";
import axiosClient from "../../services/axiosClient";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    objet: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const objetsList = [
    "Demande d'information",
    "Réclamation",
    "Problème technique",
    "Collaboration",
    "Autre",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Suggestions dynamiques pour "objet"
    if (name === "objet" && value) {
      const filtered = objetsList.filter((objet) =>
        objet.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
      setIsDropdownVisible(true);
    } else if (name === "objet") {
      setSuggestions([]);
      setIsDropdownVisible(false);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setFormData((prev) => ({ ...prev, objet: suggestion }));
    setSuggestions([]);
    setIsDropdownVisible(false);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Nom requis.";
    if (!formData.telephone.trim()) newErrors.telephone = "Téléphone requis.";
    if (!formData.email.trim()) newErrors.email = "Email requis.";
    if (!formData.objet.trim()) newErrors.objet = "Objet requis.";
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
          objet: "",
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
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          {successMessage}
        </div>
      )}

      <div>
        <input
          type="text"
          name="nom"
          placeholder="Votre nom et prénoms"
          value={formData.nom}
          onChange={handleChange}
          className="w-full p-3 outline-none border border-white bg-normal-orange placeholder-white text-white"
        />
        {errors.nom && (
          <p className="text-sm text-red-100 mt-1">{errors.nom}</p>
        )}
      </div>

      <div>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 outline-none border border-white bg-normal-orange placeholder-white text-white"
        />
        {errors.email && (
          <p className="text-sm text-red-100 mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <input
          type="tel"
          name="telephone"
          placeholder="01-05-40-00-00"
          value={formData.telephone}
          onChange={handleChange}
          className="w-full p-3 outline-none border border-white bg-normal-orange placeholder-white text-white"
        />
        {errors.telephone && (
          <p className="text-sm text-red-100 mt-1">{errors.telephone}</p>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          name="objet"
          placeholder="Objet"
          value={formData.objet}
          onChange={handleChange}
          className="w-full p-3 outline-none border border-white bg-normal-orange placeholder-white text-white"
        />
        {isDropdownVisible && suggestions.length > 0 && (
          <ul className="absolute bg-white border border-tertiary-dark w-full mt-1 rounded-md shadow-lg max-h-60 overflow-auto z-10">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="px-3 py-2 hover:bg-normal-blue hover:text-white cursor-pointer"
                onClick={() => handleSelectSuggestion(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
        {errors.objet && (
          <p className="text-sm text-red-100 mt-1">{errors.objet}</p>
        )}
      </div>

      <div>
        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 outline-none border border-white bg-normal-orange placeholder-white text-white"
        />
        {errors.message && (
          <p className="text-sm text-red-100 mt-1">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-normal-blue text-normal-orange px-6 py-3 font-semibold hover:bg-opacity-90 transition"
      >
        Envoyer
      </button>
    </form>
  );
};

export default ContactForm;
