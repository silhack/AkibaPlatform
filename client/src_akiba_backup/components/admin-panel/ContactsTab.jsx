import { useEffect, useState } from 'react';
import axiosClient from '../../services/axiosClient';

/**
 * Composant pour la gestion des messages de contact reçus.
 * Permet de lister, modifier et supprimer les demandes de contact.
 */
const ContactsTab = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: '',
    telephone: '',
    objet: '',
  });
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);

  // Chargement des contacts au montage du composant
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axiosClient.get('/contacts');
        setData(response.data);
      } catch (error) {
        setError(error.response?.data?.detail || 'Erreur lors du chargement');
      } finally {
        setLoading(false);
      }
    };
    fetchContacts();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /**
   * Action de suppression d'un contact.
   */
  const handleDelete = async id => {
    if (!window.confirm('Voulez-vous vraiment supprimer ce contact ?')) return;

    try {
      await axiosClient.delete(`/contacts/${id}`);
      setData(data.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erreur lors de la suppression :', error);
    }
  };

  /**
   * Prépare la modale pour l'édition d'un contact.
   */
  const handleEditClick = contact => {
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

  /**
   * Envoi du formulaire (Ajout ou Mise à jour).
   * Note : On utilise du JSON ici car il n'y a pas de fichiers à uploader.
   */
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      if (editId) {
        // Mode modification
        await axiosClient.patch(`/contacts/${editId}`, formData);
      } else {
        // Mode création
        await axiosClient.post('/contacts', formData);
      }

      setShowModal(false);
      setEditId(null);
      setFormData({ nom: '', email: '', message: '', telephone: '', objet: '' });

      // Rafraîchir la liste
      const res = await axiosClient.get('/contacts');
      setData(res.data);
    } catch (err) {
      console.error('Erreur lors de l’envoi :', err);
      alert(err.response?.data?.detail || "Une erreur est survenue lors de l'enregistrement.");
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
        <h2 className="text-2xl font-bold">Messages de Contact</h2>
        <button
          className="bg-normal-blue hover:bg-normal-blue-hover text-white px-4 py-2 rounded"
          onClick={() => {
            setEditId(null);
            setFormData({ nom: '', email: '', message: '', telephone: '', objet: '' });
            setShowModal(true);
          }}
        >
          + Ajouter manuellement
        </button>
      </div>

      {/* Tableau des contacts */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2 text-left">Nom</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Téléphone</th>
              <th className="border px-4 py-2 text-left">Objet</th>
              <th className="border px-4 py-2 text-left">Message</th>
              <th className="border px-4 py-2 text-left">Date</th>
              <th className="border px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(contact => (
              <tr key={contact.id} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{contact.nom}</td>
                <td className="border px-4 py-2">{contact.email}</td>
                <td className="border px-4 py-2">{contact.telephone}</td>
                <td className="border px-4 py-2 font-medium">{contact.objet}</td>
                <td className="border px-4 py-2 text-sm truncate max-w-xs">{contact.message}</td>
                <td className="border px-4 py-2 text-xs">
                  {new Date(contact.updated_at).toLocaleDateString('fr-FR')}
                </td>

                <td className="border px-4 py-2 space-x-2">
                  <button
                    className="text-normal-blue hover:underline text-sm"
                    onClick={() => handleEditClick(contact)}
                  >
                    Détails / Modifier
                  </button>
                  <button
                    className="text-red-600 hover:underline text-sm"
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

      {/* Modale de gestion d'un contact */}
      {showModal && (
        <div className="fixed inset-0 bg-[#1e1e1e] bg-opacity-40 flex items-center justify-center z-10">
          <div className="bg-white p-6 rounded shadow w-full max-w-2xl">
            <h3 className="text-lg font-bold mb-4">
              {editId ? 'Détails du contact' : 'Nouveau contact'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom complet"
                  required
                  onChange={handleChange}
                  value={formData.nom}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full border p-2 rounded"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="telephone"
                  placeholder="Téléphone"
                  required
                  onChange={handleChange}
                  value={formData.telephone}
                  className="w-full border p-2 rounded"
                />
                <input
                  type="text"
                  name="objet"
                  placeholder="Objet du message"
                  required
                  onChange={handleChange}
                  value={formData.objet}
                  className="w-full border p-2 rounded"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                required
                rows={5}
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
                  Fermer
                </button>
                <button
                  type="submit"
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

export default ContactsTab;
