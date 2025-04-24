import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    objet: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [suggestions, setSuggestions] = useState([]);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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
    if (!formData.name.trim()) newErrors.name = "Nom requis.";
    if (!formData.phone.trim()) newErrors.phone = "Téléphone requis.";
    if (!formData.email.trim()) newErrors.email = "Email requis.";
    if (!formData.objet.trim()) newErrors.objet = "Objet requis.";
    if (!formData.message.trim()) newErrors.message = "Message requis.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Données envoyées :", formData);
      // Ici tu peux envoyer les données à une API, EmailJS, etc.
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md mx-auto">
      <div>
        <input
          type="text"
          name="name"
          placeholder="Votre nom et prénoms"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 outline-none border border-white bg-normal-orange placeholder-white text-white"
        />
        {errors.name && (
          <p className="text-sm text-red-100 mt-1">{errors.name}</p>
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
          name="phone"
          placeholder="01-05-40-00-00"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 outline-none border border-white bg-normal-orange placeholder-white text-white"
        />
        {errors.phone && (
          <p className="text-sm text-red-100 mt-1">{errors.phone}</p>
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
