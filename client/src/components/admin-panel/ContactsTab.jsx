import { useEffect, useState } from "react";
import axiosClient from "../../services/axiosClient";

const ProduitsTab = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    message: "",
    telephone: "",
    objet: "",
  });
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const fetchproduits = async () => {
      try {
        const response = await axiosClient.get("/contacts");
        setData(response.data);
      } catch (error) {
        setError(error.response?.data || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };
    fetchproduits();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce contact ?")) return;

    try {
      await axiosClient.delete(`/contacts/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  const handleEditClick = (contact) => {
    setFormData({
      nom: contact.nom,
      email: contact.email,
      objet: contact.objet,
      telephone: contact.telephone,
      message: contact.message,
    });
    setEditId(contact.id);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("nom", formData.nom);
    payload.append("email", formData.email);
    payload.append("objet", formData.objet);
    payload.append("telephone", formData.telephone);
    payload.append("message", formData.message);

    try {
      if (editId) {
        await axiosClient.patch(`/contacts/${editId}`, payload);
      } else {
        await axiosClient.post("/contacts", payload);
      }
      setShowModal(false);
      setEditId(null);
      const res = await axiosClient.get("/contacts");
      setData(res.data);
      window.location.reload();
    } catch (err) {
      console.error("Erreur lors de l’envoi :", err);
    }
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Chargement des contacts...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center">
        <p className="text-red-500">Erreur : {error}</p>
      </section>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Contacts</h2>
        <button
          className="bg-normal-blue hover:bg-normal-blue-hover text-white px-4 py-2 rounded"
          onClick={() => setShowModal(true)}
        >
          + Ajouter
        </button>
      </div>

      {/* Tableau */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Nom</th>
              <th className="border px-4 py-2 text-left">email</th>
              <th className="border px-4 py-2 text-left">telephone</th>
              <th className="border px-4 py-2 text-left">email</th>
              <th className="border px-4 py-2 text-left">message</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((contact) => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{contact.nom}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.telephone}</td>
                <td className="border px-4 py-2">{contact.objet}</td>
                <td className="border px-4 py-2">{contact.message}</td>

                <td className="border px-4 py-2">
                  {new Date(contact.updated_at).toLocaleDateString()}
                </td>

                <td className="border px-4 py-2 space-x-2">
                  <button
                    className="text-normal-blue hover:underline"
                    onClick={() => handleEditClick(contact)}
                  >
                    Modifier
                  </button>

                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(contact.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modale d'ajout */}
      {showModal && (
        <div className="fixed inset-0 bg-[#1e1e1e] bg-opacity-40 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow w-full max-w-2xl">
            <h3 className="text-lg font-bold mb-4">Ajouter une produit</h3>
            <form className="space-y-4">
              <input
                type="text"
                name="nom"
                placeholder="Nom"
                onChange={handleChange}
                value={formData.nom}
                className="w-full border p-2 rounded"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                className="w-full border p-2 rounded"
              />
              <input
                type="tel"
                name="telephone"
                placeholder="Telephone"
                onChange={handleChange}
                value={formData.telephone}
                className="w-full border p-2 rounded"
              />
              <input
                type="text"
                name="objet"
                placeholder="Objet"
                onChange={handleChange}
                value={formData.objet}
                className="w-full border p-2 rounded"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="message"
                className="w-full border p-2 rounded"
              ></textarea>

              <div className="flex justify-end mt-4 space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditId(null);
                  }}
                  className="text-gray-600 hover:underline"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="bg-normal-blue text-white px-4 py-2 rounded hover:bg-normal-blue-hover"
                >
                  Enregistrer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitsTab;
