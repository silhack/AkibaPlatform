import React from "react";
import NewsSection from "../components/news/NewsSection";
import Hero from "../components/ui/Hero";

const NewsPage = () => {
  return (
    <main>
      <Hero
        title={"Actualités"}
        subtitle={"Restez informés sur l’innovation du secteur agroalimentaire"}
      />
      <NewsSection />
    </main>
  );
};

export default NewsPage;
