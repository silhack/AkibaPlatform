import { useEffect, useState } from "react";
import axiosClient from "../../services/axiosClient";
import { pathToImage } from "../../utils/utils";

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

  useEffect(() => {
    const fetchActus = async () => {
      try {
        const response = await axiosClient.get("/actualites");
        setData(response.data);
      } catch (error) {
        setError(error.response?.data || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };
    fetchActus();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

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

  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cette actualité ?"))
      return;

    try {
      await axiosClient.delete(`/actualites/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  const handleEditClick = (actu) => {
    setFormData({
      titre: actu.titre,
      categorie: actu.categorie,
      description: actu.description,
      image: null, // image non modifiable ici
    });
    setSources(actu.sources || []);
    setEditId(actu.id);
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = new FormData();
    payload.append("titre", formData.titre);
    payload.append("categorie", formData.categorie);
    payload.append("description", formData.description);
    if (formData.image) {
      payload.append("image", formData.image);
    }
    sources.forEach((s) => payload.append("sources", s));

    try {
      if (editId) {
        await axiosClient.patch(`/actualites/${editId}`, payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        await axiosClient.post("/actualites", payload, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      setShowModal(false);
      setEditId(null);
      const res = await axiosClient.get("/actualites");
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
        <h2 className="text-2xl font-bold">Actualités</h2>
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
              <th className="border px-4 py-2 text-left">Titre</th>
              <th className="border px-4 py-2 text-left">Catégorie</th>
              <th className="border px-4 py-2 text-left">Sources</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Image</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((actu) => (
              <tr key={actu.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{actu.titre}</td>
                <td className="border px-4 py-2">{actu.categorie}</td>
                <td className="border px-4 py-2">
                  {actu.sources?.map((source, index) => (
                    <div key={index}>{source}</div>
                  ))}
                </td>

                <td className="border px-4 py-2">
                  {new Date(actu.updated_at).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2">
                  <img
                    src={pathToImage(actu.image)}
                    alt="miniature"
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="border px-4 py-2 space-x-2">
                  <button
                    className="text-normal-blue hover:underline"
                    onClick={() => handleEditClick(actu)}
                  >
                    Modifier
                  </button>

                  <button
                    className="text-red-600 hover:underline"
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

      {/* Modale d'ajout */}
      {showModal && (
        <div className="fixed inset-0 bg-[#1e1e1e] bg-opacity-40 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow w-full max-w-2xl">
            <h3 className="text-lg font-bold mb-4">Ajouter une actualité</h3>
            <form className="space-y-4">
              <input
                type="text"
                name="titre"
                placeholder="Titre"
                onChange={handleChange}
                value={formData.titre}
                className="w-full border p-2 rounded"
              />
              <select
                name="categorie"
                onChange={handleChange}
                value={formData.categorie}
                placeholder="Catégorie"
                className="w-full border p-2 rounded"
              >
                <option value="">--Choisir une catégorie--</option>
                <option value="Études">Études</option>
                <option value="Analyses & tendances">
                  Analyses & tendances
                </option>
                <option value="Évènements">Évènements</option>
              </select>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                className="w-full border p-2 rounded"
              ></textarea>

              <div>
                <label className="block mb-2 font-medium">Sources</label>
                {sources.map((src, idx) => (
                  <input
                    key={idx}
                    type="text"
                    value={src}
                    onChange={(e) => handleSourceChange(idx, e.target.value)}
                    placeholder={`Source ${idx + 1}`}
                    className="w-full mb-2 border p-2 rounded"
                  />
                ))}
                <div className="flex gap-8">
                  <button
                    type="button"
                    onClick={addSourceField}
                    className="text-sm text-normal-blue hover:underline"
                  >
                    + Ajouter une autre source
                  </button>
                  <button
                    type="button"
                    onClick={removeSourceField}
                    className="text-sm text-red-500 hover:underline"
                  >
                    - Retirer une autre source
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

export default ActualitesTab;
