import { motion } from 'framer-motion';

const NewsSection = () => {
  const news = [
    {
      imgClass: 'news-img-1',
      category: 'Marché',
      title: "La Côte d'Ivoire consolide sa position mondiale",
      description: 'Analyse des opportunités record dans la filière cajou cette année.',
      date: '12 Juin 2025',
      featured: true,
    },
    {
      imgClass: 'news-img-2',
      category: 'Certification',
      title: 'Nouvelles normes GlobalGap 2025',
      description: 'Coreline Alliance vous accompagne dans la mise en conformité réglementaire.',
      date: '4 Juin 2025',
      featured: false,
    },
    {
      imgClass: 'news-img-3',
      category: 'Événement',
      title: 'Coreline au SIA de Paris',
      description: "Retrouvez nos experts au Salon International de l'Agriculture.",
      date: '28 Mai 2025',
      featured: false,
    },
  ];

  return (
    <section className="section section-alt" id="actualites">
      <div className="container">
        <div className="section-header">
          <span className="badge">Actualités</span>
          <h2>Dernières Analyses & Insights</h2>
          <p>Suivez l'évolution de nos projets et nos décryptages stratégiques.</p>
        </div>

        <div className="news-grid">
          {news.map((item, i) => (
            <motion.div
              className={`news-card ${item.featured ? 'featured-news' : ''}`}
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`news-img-placeholder ${item.imgClass}`}></div>
              <div className="news-content">
                <span className="news-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="news-meta">
                  <span className="news-date">{item.date}</span>
                  <a href="#" className="news-link">
                    Lire la suite
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
