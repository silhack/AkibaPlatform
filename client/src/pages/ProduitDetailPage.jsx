import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import ProduitForm from "../components/produits/ProduitForm";
import axiosClient from "../services/axiosClient";
import { pathToImage } from "../utils/utils";

const ProduitDetailPage = () => {
  const [produit, setProduit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await axiosClient(`/produits/${id}`);
        setProduit(response.data);
      } catch (error) {
        setError(error.response?.data || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };
    fetchProduit();
  }, [id]);

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Chargement des produits...</p>
      </section>
    );
  }

  if (!produit) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Produit introuvable
        </h2>
        <button
          onClick={() => navigate("/produits")}
          className="bg-normal-blue text-white px-4 py-2 rounded hover:bg-normal-blue-hover transition"
        >
          Retour aux produits
        </button>
      </div>
    );
  }

  if (error) {
    return (
      <section className="py-20 text-center">
        <p className="text-red-500">Erreur : {error}</p>
        <button
          onClick={() => navigate("/produits")}
          className="bg-normal-blue text-white px-4 py-2 rounded hover:bg-normal-blue-hover transition"
        >
          Retour aux produits
        </button>
      </section>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{produit.nom}</h1>
      <p className="text-lg italic text-gray-600 mb-4">{produit.accroche}</p>

      <img
        src={pathToImage(produit.image)}
        alt={produit.nom}
        className="w-full max-w-xl rounded-lg mb-6"
      />

      <p className="text-gray-700 leading-relaxed mb-6">
        {produit.description}
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-800 mb-8">
        {produit.avantages.map((avantage, index) => (
          <li key={index}>{avantage}</li>
        ))}
      </ul>

      {/* Formulaire de commande */}
      <ProduitForm produitNom={produit.nom} />
    </div>
  );
};

export default ProduitDetailPage;
