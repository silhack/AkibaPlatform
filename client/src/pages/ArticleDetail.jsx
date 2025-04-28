import React from "react";
import { useParams } from "react-router";
import { articles } from "../data/articles";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) {
    return <p className="text-center mt-10">Article introuvable.</p>;
  }

  return (
    <section className="px-6 md:px-12 lg:px-16 py-10 max-w-4xl mx-auto space-y-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-gray-500 text-sm">Catégorie: {article.category}</p>
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-auto my-6 rounded-md"
      />
      <p className="text-lg leading-relaxed">{article.content}</p>
    </section>
  );
};

export default ArticleDetail;
