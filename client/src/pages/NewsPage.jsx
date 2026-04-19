import { motion } from 'framer-motion';
import { useEffect } from 'react';

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const news = [
    {
      imgClass: 'news-img-1',
      category: 'Événement',
      title: "Participation à l'IYWF 2026 : Le Plan d'Action",
      description:
        "Découvrez comment Coreline structure ses interventions pour l'Année Internationale de la Femme Agricultrice.",
      date: '15 Avril 2026',
    },
    {
      imgClass: 'news-img-2',
      category: 'Marché',
      title: 'Impact de la transformation locale sur le PIB régional',
      description:
        "Une analyse des retombées économiques des unités de transformation de manioc en Afrique de l'Ouest.",
      date: '10 Avril 2026',
    },
    {
      imgClass: 'news-img-3',
      category: 'Alliance',
      title: 'Nouveau partenariat stratégique à Paris',
      description:
        "Coreline renforce ses liens avec les fonds d'investissements européens pour le climat.",
      date: '02 Avril 2026',
    },
    {
      imgClass: 'news-img-1',
      category: 'Marché',
      title: "La Côte d'Ivoire consolide sa position mondiale",
      description: 'Analyse des opportunités record dans la filière cajou cette année.',
      date: '12 Juin 2025',
    },
    {
      imgClass: 'news-img-2',
      category: 'Certification',
      title: 'Nouvelles normes GlobalGap 2025',
      description: 'Coreline Alliance vous accompagne dans la mise en conformité réglementaire.',
      date: '4 Juin 2025',
    },
    {
      imgClass: 'news-img-3',
      category: 'Événement',
      title: 'Coreline au SIA de Paris',
      description: "Retrouvez nos experts au Salon International de l'Agriculture.",
      date: '28 Mai 2025',
    },
  ];

  return (
    <main style={{ paddingTop: '100px. ', background: 'var(--gray-50)', minHeight: '100vh' }}>
      <section className="section">
        <div className="container">
          <motion.div
            className="section-header"
            style={{
              textAlign: 'center',
              marginBottom: '4rem',
              margin: '0 auto',
              maxWidth: '800px',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">Le Journal de l'Alliance</span>
            <h2>Actualités & Insights</h2>
            <p>
              Restez informé des avancées de Coreline et des tendances de l'investissement durable
              en Afrique.
            </p>
          </motion.div>

          <div className="news-grid">
            {news.map((item, i) => (
              <motion.article
                className="news-card"
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className={`news-img-placeholder ${item.imgClass}`}
                  style={{ height: '200px' }}
                ></div>
                <div className="news-content">
                  <span className="news-category">{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <a href="#" className="news-link">
                      Lire la suite →
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default NewsPage;
