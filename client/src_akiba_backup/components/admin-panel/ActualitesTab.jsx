import { useEffect, useState } from "react";
import axiosClient from "../../services/axiosClient";
import { pathToImage } from "../../utils/utils";

/**
 * Composant pour la gestion des actualités (articles, nouvelles, blog).
 * Permet l'affichage en tableau, l'ajout, la modification et la suppression.
 */
const ActualitesTab = () => {
  const [formData, setFormData] = useState({
    titre: "",
    categorie: "",
    description: "",
    image: null,
  });
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);
  const [sources, setSources] = useState([""]);

  // Chargement des articles au montage du composant
  useEffect(() => {
    const fetchActus = async () => {
      try {
        const response = await axiosClient.get("/actualites");
        setData(response.data);
      } catch (error) {
        setError(error.response?.data?.detail || "Erreur lors du chargement des actualités");
      } finally {
        setLoading(false);
      }
    };
    fetchActus();
  }, []);

  /**
   * Gestionnaire de changement pour les inputs classiques.
   */
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Gestion dynamique des sources (URL ou noms)
  const addSourceField = () => {
    setSources([...sources, ""]);
  };

  const removeSourceField = () => {
    setSources((prevSources) => prevSources.slice(0, -1));
  };

  const handleSourceChange = (index, value) => {
    const updated = [...sources];
    updated[index] = value;
    setSources(updated);
  };

  /**
   * Suppression d'une actualité.
   */
  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette actualité ?"))
      return;

    try {
      await axiosClient.delete(`/actualites/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      alert("La suppression a échoué.");
    }
  };

  /**
   * Passage en mode edition : remplit le formulaire avec les données existantes.
   */
  const handleEditClick = (actu) => {
    setFormData({
      titre: actu.titre,
      categorie: actu.categorie,
      description: actu.description,
      image: null, // Image non modifiable par pré-remplissage
    });
    setSources(actu.sources || []);
    setEditId(actu.id);
    setShowModal(true);
  };

  /**
   * Soumission du formulaire (Création ou Mise à jour).
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("titre", formData.titre);
    payload.append("categorie", formData.categorie);
    payload.append("description", formData.description);
    
    if (formData.image) {
      payload.append("image", formData.image);
    }
    
    // On n'inclut que les sources non vides
    sources.filter(s => s.trim() !== "").forEach((s) => payload.append("sources", s));

    try {
      if (editId) {
        // Mise à jour partielle
        await axiosClient.patch(`/actualites/${editId}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // Création
        await axiosClient.post("/actualites", payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      
      setShowModal(false);
      setEditId(null);
      setFormData({ titre: "", categorie: "", description: "", image: null });
      setSources([""]);

      // Rafraîchir les données localement
      const res = await axiosClient.get("/actualites");
      setData(res.data);
    } catch (err) {
      console.error("Erreur lors de l’envoi :", err);
      alert(err.response?.data?.detail || "Une erreur est survenue lors de l'enregistrement");
    }
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-400 italic">Chargement des actualités...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center text-red-500">
        Erreur : {error}
      </section>
    );
  }

  return (
    <div className="p-2">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-dark-blue">Actualités & Presse</h2>
        <button
          className="bg-normal-blue hover:bg-normal-blue-hover text-white px-5 py-2 rounded-lg font-semibold transition"
          onClick={() => {
              setEditId(null);
              setFormData({ titre: "", categorie: "", description: "", image: null });
              setSources([""]);
              setShowModal(true);
          }}
        >
          + Nouvelle Actualité
        </button>
      </div>

      {/* Liste des actualités sous forme de tableau */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-100">
        <table className="min-w-full text-left">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase">Titre</th>
              <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase">Catégorie</th>
              <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase">Sources</th>
              <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase">Dernière MAJ</th>
              <th className="px-5 py-3 text-xs font-bold text-gray-500 uppercase text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((actu) => (
              <tr key={actu.id} className="hover:bg-blue-50/30 transition">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={pathToImage(actu.image)}
                      alt="th"
                      className="w-10 h-10 object-cover rounded shadow-sm flex-shrink-0"
                    />
                    <span className="font-semibold text-gray-800 line-clamp-1">{actu.titre}</span>
                  </div>
                </td>
                <td className="px-5 py-4">
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-bold">
                      {actu.categorie}
                  </span>
                </td>
                <td className="px-5 py-4 max-w-xs">
                    <div className="text-xs text-gray-400 italic line-clamp-1">
                        {actu.sources?.join(", ") || "Aucune source"}
                    </div>
                </td>
                <td className="px-5 py-4 text-xs text-gray-500">
                  {new Date(actu.updated_at).toLocaleDateString("fr-FR")}
                </td>
                <td className="px-5 py-4 text-center space-x-3">
                  <button
                    className="text-normal-blue hover:text-dark-blue font-bold text-sm"
                    onClick={() => handleEditClick(actu)}
                  >
                    Modifier
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700 font-bold text-sm"
                    onClick={() => handleDelete(actu.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fenêtre Modale d'enregistrement */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-3xl overflow-y-auto max-h-[90vh]">
            <h3 className="text-2xl font-black mb-6 text-gray-800">
              {editId ? "✍️ Modifier l'actualité" : "🚀 Publier une actualité"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Titre de l'article</label>
                  <input
                    type="text"
                    name="titre"
                    required
                    onChange={handleChange}
                    value={formData.titre}
                    className="w-full border-gray-200 border p-3 rounded-lg focus:ring-2 focus:ring-normal-blue outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-sm font-bold text-gray-700">Catégorie</label>
                  <select
                    name="categorie"
                    required
                    onChange={handleChange}
                    value={formData.categorie}
                    className="w-full border-gray-200 border p-3 rounded-lg focus:ring-2 focus:ring-normal-blue outline-none"
                  >
                    <option value="">Sélectionner...</option>
                    <option value="Études">Études</option>
                    <option value="Analyses & tendances">Analyses & tendances</option>
                    <option value="Évènements">Évènements</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-bold text-gray-700">Contenu / Description</label>
                <textarea
                  name="description"
                  required
                  rows={6}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full border-gray-200 border p-3 rounded-lg focus:ring-2 focus:ring-normal-blue outline-none"
                ></textarea>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-bold text-gray-700 italic">🌐 Sources (liens ou noms)</label>
                {sources.map((src, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={src}
                    onChange={(e) => handleSourceChange(idx, e.target.value)}
                    placeholder={`Source n°${idx + 1}`}
                    className="w-full border-gray-200 border p-2 rounded-lg text-sm"
                  />
                ))}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={addSourceField}
                    className="text-xs font-bold text-normal-blue hover:underline"
                  >
                    + Ajouter une source
                  </button>
                  {sources.length > 1 && (
                    <button
                      type="button"
                      onClick={removeSourceField}
                      className="text-xs font-bold text-red-500 hover:underline"
                    >
                      - Supprimer le champ
                    </button>
                  )}
                </div>
              </div>

              <div className="space-y-2 pt-4">
                <label className="block text-sm font-bold text-gray-700">
                    📸 Image illustrative {editId && "(Optionnel si pas de changement)"}
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleChange}
                  accept="image/*"
                  required={!editId}
                  className="w-full text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditId(null);
                  }}
                  className="px-6 py-2 text-gray-500 font-bold hover:bg-gray-100 rounded-lg transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-normal-blue text-white px-8 py-2 rounded-lg font-black hover:bg-normal-blue-hover shadow-lg transition"
                >
                  Publier
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActualitesTab;
