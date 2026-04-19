import { useEffect, useState } from "react";
import axiosClient from "../../services/axiosClient";
import { pathToImage } from "../../utils/utils";

/**
 * Composant de gestion des produits dans l'espace administration.
 * Gère l'affichage, la création, la modification et la suppression de produits.
 */
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

  // Chargement des produits depuis l'API au démarrage
  useEffect(() => {
    const fetchproduits = async () => {
      try {
        const response = await axiosClient.get("/produits");
        setData(response.data);
      } catch (error) {
        setError(error.response?.data?.detail || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };
    fetchproduits();
  }, []);

  /**
   * Gère les changements dans les champs du formulaire standard.
   */
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Gestion dynamique des champs d'avantages
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

  /**
   * Supprime un produit après confirmation.
   */
  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer ce produit ?")) return;

    try {
      await axiosClient.delete(`/produits/${id}`);
      setData(data.filter((item) => item.id !== id));
      // Pas idéal de recharger toute la page, mais on garde la logique actuelle si nécessaire
      // window.location.reload(); 
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  /**
   * Prépare l'édition d'un produit.
   */
  const handleEditClick = (produit) => {
    setFormData({
      nom: produit.nom,
      accroche: produit.accroche,
      description: produit.description,
      image: null, // L'image ne peut être que remplacée
    });
    setAvantages(produit.avantages || []);
    setEditId(produit.id);
    setShowModal(true);
  };

  /**
   * Enregistre les données du produit (FormData requis pour l'upload d'image).
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("nom", formData.nom);
    payload.append("accroche", formData.accroche);
    payload.append("description", formData.description);
    
    // Ajout de l'image si sélectionnée
    if (formData.image) {
      payload.append("image", formData.image);
    }
    
    // Ajout de la liste d'avantages (FastAPI les recevra comme une liste)
    avantages.filter(v => v.trim() !== "").forEach((s) => payload.append("avantages", s));

    try {
      if (editId) {
        // Mise à jour (PATCH)
        await axiosClient.patch(`/produits/${editId}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // Création (POST)
        await axiosClient.post("/produits", payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      
      setShowModal(false);
      setEditId(null);
      setFormData({ nom: "", accroche: "", description: "", image: null });
      setAvantages([""]);
      
      // Re-chargement des données pour mise à jour de la liste
      const res = await axiosClient.get("/produits");
      setData(res.data);
    } catch (err) {
      console.error("Erreur lors de l’envoi :", err);
      alert(err.response?.data?.detail || "Une erreur est survenue.");
    }
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500 italic">Chargement des produits...</p>
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
          className="bg-normal-blue hover:bg-normal-blue-hover text-white px-4 py-2 rounded transition-colors"
          onClick={() => {
              setEditId(null);
              setFormData({ nom: "", accroche: "", description: "", image: null });
              setAvantages([""]);
              setShowModal(true);
          }}
        >
          + Ajouter un produit
        </button>
      </div>

      {/* Tableau de visualisation */}
      <div className="overflow-x-auto shadow-sm border rounded">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-semibold">Nom</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Accroche</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Description</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Avantages</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Dernière modification</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Image</th>
              <th className="px-4 py-2 text-left text-sm font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {data.map((produit) => (
              <tr key={produit.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 font-medium">{produit.nom}</td>
                <td className="px-4 py-3 text-sm">{produit.accroche}</td>
                <td className="px-4 py-3 text-sm truncate max-w-xs">{produit.description}</td>
                <td className="px-4 py-3">
                  <ul className="text-xs list-disc list-inside">
                    {produit.avantages?.map((avantage, index) => (
                      <li key={index}>{avantage}</li>
                    ))}
                  </ul>
                </td>
                <td className="px-4 py-3 text-xs">
                  {new Date(produit.updated_at).toLocaleDateString("fr-FR")}
                </td>
                <td className="px-4 py-3">
                  <img
                    src={pathToImage(produit.image)}
                    alt={produit.nom}
                    className="w-12 h-12 object-cover rounded shadow-sm border"
                  />
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    className="text-normal-blue hover:underline text-sm"
                    onClick={() => handleEditClick(produit)}
                  >
                    Modifier
                  </button>
                  <button
                    className="text-red-600 hover:underline text-sm"
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

      {/* Modale d'ajout / modification */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-2xl overflow-y-auto max-h-[90vh]">
            <h3 className="text-xl font-bold mb-6">
              {editId ? "Modifier le produit" : "Nouveau produit"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Nom du produit</label>
                  <input
                    type="text"
                    name="nom"
                    placeholder="Ex: Akiba Agri"
                    required
                    onChange={handleChange}
                    value={formData.nom}
                    className="w-full border p-2 rounded focus:ring-1 focus:ring-normal-blue"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Accroche commerciale</label>
                  <input
                    type="text"
                    name="accroche"
                    placeholder="La solution pour..."
                    required
                    onChange={handleChange}
                    value={formData.accroche}
                    className="w-full border p-2 rounded focus:ring-1 focus:ring-normal-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Détails du produit..."
                  required
                  rows={4}
                  className="w-full border p-2 rounded focus:ring-1 focus:ring-normal-blue"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Avantages clés</label>
                {avantages.map((val, idx) => (
                  <div key={idx} className="flex mb-2 gap-2">
                    <input
                      type="text"
                      value={val}
                      onChange={(e) => handleAvantageChange(idx, e.target.value)}
                      placeholder={`Avantage éco-responsable ${idx + 1}`}
                      className="flex-1 border p-2 rounded focus:ring-1 focus:ring-normal-blue"
                    />
                  </div>
                ))}
                <div className="flex gap-4 mt-2">
                  <button
                    type="button"
                    onClick={addAvantageField}
                    className="text-sm font-semibold text-normal-blue hover:text-normal-blue-hover"
                  >
                    + Ajouter un champ
                  </button>
                  {avantages.length > 1 && (
                    <button
                      type="button"
                      onClick={removeAvantageField}
                      className="text-sm font-semibold text-red-500 hover:text-red-600"
                    >
                      - Retirer le dernier
                    </button>
                  )}
                </div>
              </div>

              <div className="border-t pt-4">
                <label className="block text-sm font-medium mb-1">
                  Image du produit {editId && "(Optionnel, remplace l'existante)"}
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                  required={!editId}
                  className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                />
              </div>

              <div className="flex justify-end mt-8 space-x-4 border-t pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditId(null);
                  }}
                  className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-normal-blue text-white px-6 py-2 rounded font-bold hover:bg-normal-blue-hover shadow transition-all"
                >
                  Sauvegarder
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
