import { useEffect, useState } from "react";
import axiosClient from "../../services/axiosClient";
import { pathToImage } from "../../utils/utils";

const ProduitsTab = () => {
  const [formData, setFormData] = useState({
    nom: "",
    accroche: "",
    description: "",
    image: null,
  });
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);
  const [avantages, setAvantages] = useState([""]);

  useEffect(() => {
    const fetchproduits = async () => {
      try {
        const response = await axiosClient.get("/produits");
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

  const addAvantageField = () => {
    setAvantages([...avantages, ""]);
  };

  const removeAvantageField = () => {
    setAvantages((prevAvantages) => prevAvantages.slice(0, -1));
  };

  const handleAvantageChange = (index, value) => {
    const updated = [...avantages];
    updated[index] = value;
    setAvantages(updated);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

    try {
      await axiosClient.delete(`/produits/${id}`);
      setData(data.filter((item) => item.id !== id));
      window.location.reload();
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  const handleEditClick = (produit) => {
    setFormData({
      nom: produit.nom,
      accroche: produit.accroche,
      description: produit.description,
      image: null, // image non modifiable ici
    });
    setAvantages(produit.avantages || []);
    setEditId(produit.id);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("nom", formData.nom);
    payload.append("accroche", formData.accroche);
    payload.append("description", formData.description);
    if (formData.image) {
      payload.append("image", formData.image);
    }
    avantages.forEach((s) => payload.append("avantages", s));

    try {
      if (editId) {
        await axiosClient.patch(`/produits/${editId}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axiosClient.post("/produits", payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      setShowModal(false);
      setEditId(null);
      const res = await axiosClient.get("/produits");
      setData(res.data);
      window.location.reload();
    } catch (err) {
      console.error("Erreur lors de l’envoi :", err);
    }
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Chargement des produits...</p>
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
        <h2 className="text-2xl font-bold">Produits</h2>
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
              <th className="border px-4 py-2 text-left">Accroche</th>
              <th className="border px-4 py-2 text-left">Description</th>
              <th className="border px-4 py-2 text-left">Avantages</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Image</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((produit) => (
              <tr key={produit.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{produit.nom}</td>
                <td className="border px-4 py-2">{produit.accroche}</td>
                <td className="border px-4 py-2">{produit.description}</td>
                <td className="border px-4 py-2">
                  {produit.avantages?.map((avantage, index) => (
                    <div key={index}>{avantage}</div>
                  ))}
                </td>

                <td className="border px-4 py-2">
                  {new Date(produit.updated_at).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  <img
                    src={pathToImage(produit.image)}
                    alt="miniature"
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    className="text-normal-blue hover:underline"
                    onClick={() => handleEditClick(produit)}
                  >
                    Modifier
                  </button>

                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(produit.id)}
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
                type="text"
                name="accroche"
                placeholder="Accroche"
                onChange={handleChange}
                value={formData.accroche}
                className="w-full border p-2 rounded"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border p-2 rounded"
              ></textarea>

              <div>
                <label className="block mb-2 font-medium">Avantages</label>
                {avantages.map((src, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={src}
                    onChange={(e) => handleAvantageChange(idx, e.target.value)}
                    placeholder={`Avantage ${idx + 1}`}
                    className="w-full mb-2 border p-2 rounded"
                  />
                ))}
                <div className="flex gap-8">
                  <button
                    type="button"
                    onClick={addAvantageField}
                    className="text-sm text-normal-blue hover:underline"
                  >
                    + Ajouter une autre avantage
                  </button>
                  <button
                    type="button"
                    onClick={removeAvantageField}
                    className="text-sm text-red-500 hover:underline"
                  >
                    - Retirer une autre avantage
                  </button>
                </div>
              </div>

              <input
                type="file"
                name="image"
                onChange={handleChange}
                accept="image/*"
                className="w-full border p-2 rounded"
              />

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
