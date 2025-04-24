import React from "react";
import { useNavigate } from "react-router";

const ArticleCard = ({ article }) => {
  const navigate = useNavigate();

  const goToDetail = () => navigate(`${article.id}`);

  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <p className="text-normal-orange font-semibold text-sm">
          {article.category}
        </p>
        <h3 className="font-bold text-lg mt-1">{article.title}</h3>
        <p className="text-gray-600 mt-2 text-sm">
          Lorem ipsum dolor sit amet consectetur. Augue ipsum lectus sit
          facilisi tortor nam.
        </p>
        <button
          onClick={goToDetail}
          className="mt-4 px-4 coursor-pointer py-2 bg-normal-blue text-white rounded-full"
        >
          Lire plus
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
