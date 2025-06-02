import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import axiosClient from "../services/axiosClient";
import { pathToImage } from "../utils/utils";

const ArticleDetail = () => {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduit = async () => {
      try {
        const response = await axiosClient(`/actualites/${id}`);
        setArticle(response.data);
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

  if (!article) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Article introuvable
        </h2>
        <button
          onClick={() => navigate("/actualites")}
          className="bg-normal-blue text-white px-4 py-2 rounded hover:bg-normal-blue-hover transition"
        >
          Retour aux actualités
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
    <section className="px-6 md:px-12 lg:px-16 py-10 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{article.titre}</h1>
      <p className="text-gray-500 text-sm">Catégorie: {article.categorie}</p>
      <img
        src={pathToImage(article.image)}
        alt={article.titre}
        className="w-full h-auto my-6 rounded-md"
      />
      <p className="text-lg leading-relaxed">{article.description}</p>
      <p className="text-xl font-medium mt-4">Références</p>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
        {article.sources.map((source, index) => (
          <Link to={source} target="_blank">
            <li className="text-base hover:text-normal-blue hover:underline" key={index}>
              {source}
            </li>
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default ArticleDetail;
