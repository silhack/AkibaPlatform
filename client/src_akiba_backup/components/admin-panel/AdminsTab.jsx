import { useEffect, useState } from "react";
import axiosClient from "../../services/axiosClient";

/**
 * Composant pour la gestion des administrateurs dans le panneau d'administration.
 * Permet de lister, ajouter, modifier et supprimer des comptes admin avec support de l'email.
 */
const AdminsTab = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "", // Nouveau champ email
    password: "",
  });
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);

  // Chargement initial des administrateurs
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axiosClient.get("/admins");
        setData(response.data);
      } catch (error) {
        setError(error.response?.data?.detail || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Supprime un administrateur après confirmation.
   */
  const handleDelete = async (id) => {
    if (!window.confirm("Voulez-vous vraiment supprimer cet administrateur ?"))
      return;

    try {
      await axiosClient.delete(`/admins/${id}`);
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  /**
   * Prépare la modale pour la modification d'un admin.
   */
  const handleEditClick = (admin) => {
    setFormData({
      nom: admin.nom,
      email: admin.email, // Récupération de l'email existant
      password: "", // Le mot de passe reste vide pour le changement optionnel
    });
    setEditId(admin.id);
    setShowModal(true);
  };

  /**
   * Enregistre les modifications ou crée un nouvel admin.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Définition du payload JSON
    const payload = { 
        nom: formData.nom,
        email: formData.email 
    };
    
    // On n'ajoute le mot de passe que s'il est saisi
    if (formData.password) {
      payload.password = formData.password;
    }

    try {
      if (editId) {
        // Mise à jour partielle
        await axiosClient.patch(`/admins/${editId}`, payload);
      } else {
        if (!formData.password) {
            alert("Le mot de passe est obligatoire pour la création.");
            return;
        }
        await axiosClient.post("/admins", payload);
      }
      setShowModal(false);
      setEditId(null);
      setFormData({ nom: "", email: "", password: "" });
      
      // Rafraîchissement des données
      const res = await axiosClient.get("/admins");
      setData(res.data);
    } catch (err) {
      console.error("Erreur lors de l’envoi :", err);
      alert(err.response?.data?.detail || "Une erreur est survenue lors de l'enregistrement.");
    }
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500 italic">Chargement des administrateurs...</p>
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
    <div>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-black text-gray-800 uppercase tracking-tighter">Gestion des Administrateurs</h2>
        <button
          className="bg-normal-blue hover:bg-normal-blue-hover text-white px-6 py-2 rounded-full font-bold shadow-md transition"
          onClick={() => {
            setEditId(null);
            setFormData({ nom: "", email: "", password: "" });
            setShowModal(true);
          }}
        >
          + Nouvel Admin
        </button>
      </div>

      {/* Tableau élégant des admins */}
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Identité</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Email</th>
              <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-widest">Création</th>
              <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase tracking-widest">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((admin) => (
              <tr key={admin.id} className="hover:bg-blue-50/20 transition-colors">
                <td className="px-6 py-4">
                    <div className="flex flex-col">
                        <span className="font-bold text-gray-800">{admin.nom}</span>
                        <span className="text-[10px] text-gray-300 font-mono">{admin.id}</span>
                    </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 font-medium">{admin.email}</td>
                <td className="px-6 py-4 text-xs text-gray-400">
                  {new Date(admin.created_at).toLocaleDateString("fr-FR")}
                </td>

                <td className="px-6 py-4 text-center space-x-3">
                  <button
                    className="text-normal-blue hover:text-dark-blue font-bold text-sm"
                    onClick={() => handleEditClick(admin)}
                  >
                    Modifier
                  </button>

                  <button
                    className="text-red-500 hover:text-red-700 font-bold text-sm"
                    onClick={() => handleDelete(admin.id)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modale de formulaire */}
      {showModal && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg border">
            <h3 className="text-2xl font-black mb-6 text-gray-800">
              {editId ? "✍️ Modifier l'admin" : "👑 Nouvel admin"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-600">Nom d'utilisateur</label>
                <input
                    type="text"
                    name="nom"
                    placeholder="Nom complet ou pseudo"
                    required
                    onChange={handleChange}
                    value={formData.nom}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-normal-blue outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-600">Adresse E-mail</label>
                <input
                    type="email"
                    name="email"
                    placeholder="admin@akibasolution.com"
                    required
                    onChange={handleChange}
                    value={formData.email}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-normal-blue outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-600">
                    Mot de passe {editId && "(Laisser vide pour garder l'actuel)"}
                </label>
                <input
                    type="password"
                    name="password"
                    placeholder="********"
                    required={!editId}
                    onChange={handleChange}
                    value={formData.password}
                    className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-normal-blue outline-none"
                />
              </div>

              <div className="flex justify-end mt-8 space-x-4 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setEditId(null);
                  }}
                  className="px-6 py-2 text-gray-400 font-bold hover:bg-gray-50 rounded-lg transition"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-normal-blue text-white px-8 py-2 rounded-lg font-black hover:bg-normal-blue-hover shadow-lg transition"
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

export default AdminsTab;
