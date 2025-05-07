import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CATEGORIES } from "../../data/articles";
import axiosClient from "../../services/axiosClient";
import ArticleCard from "./ArticleCard";
import Pagination from "./pagination";

const NewsSection = () => {
  const [filter, setFilter] = useState("Tous");
  const [search, setSearch] = useState("");
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsPerPage] = useState(4);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosClient.get("/actualites");
        setNews(response.data);
      } catch (error) {
        setError(error.response?.data || "Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const filteredNews = news.filter(
    (article) =>
      (filter === "Tous" || article.categorie === filter) &&
      article.titre.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <section className="py-20 text-center">
        <p className="text-gray-500">Chargement des actualties...</p>
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
    <section className="px-6 md:px-12 lg:px-16 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3">
        <div className="flex flex-wrap gap-4 mb-6">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-full transition ${
                filter === item
                  ? "bg-normal-orange text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              aria-label={`Filtrer par ${item}`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Articles */}
        <div className="grid md:grid-cols-2 gap-6">
          {currentNews.length > 0 ? (
            currentNews.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))
          ) : (
            <p className="text-gray-500 col-span-2 text-center">
              Aucun article trouvé.
            </p>
          )}
        </div>
        <Pagination
          totalNews={news.length}
          newsPerPage={newsPerPage}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>

      <div className="lg:col-span-1">
        <div className="flex bg-white focus:border focus:border-normal-orange">
          <input
            type="text"
            placeholder="Rechercher des blogs"
            className="w-full p-4 outline-none border border-tertiary-dark focus:border focus:border-normal-orange"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="px-4 bg-normal-orange text-white border border-normal-orange">
            <FaSearch />
          </button>
        </div>

        <div className="bg-normal-blue p-6 mt-6 space-y-3">
          <h3 className="font-bold text-white text-lg">
            S'INSCRIRE À LA NEWSLETTER
          </h3>
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-3 mt-4 bg-white outline-none"
          />
          <button className="w-full bg-normal-orange text-white px-4 py-2 mt-4 ">
            S'ABONNER
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
