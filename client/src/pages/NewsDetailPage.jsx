import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router';
import SEO from '../components/common/SEO';

const newsDB = [
  {
    id: 'iywf-2026',
    imgUrl: 'https://images.unsplash.com/photo-1595665593673-bf1ad72905c0?auto=format&fit=crop&w=1200&q=80',
    category: 'Événement',
    title: "Participation à l'IYWF 2026 : Le Plan d'Action",
    content: "Coreline Alliance est fière d'annoncer sa participation active à l'Année Internationale de la Femme Agricultrice (IYWF 2026). Notre mission est de structurer des financements dédiés aux coopératives féminines pour moderniser leurs outils de production et faciliter l'accès aux marchés internationaux.",
    date: '15 Avril 2026',
  },
  {
    id: 'impact-manioc',
    imgUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
    category: 'Marché',
    title: 'Impact de la transformation locale sur le PIB régional',
    content: "La transformation locale du manioc en Afrique de l'Ouest représente un levier de croissance majeur. Nos dernières unités industrielles ont permis de réduire les pertes post-récolte de 40% et de doubler les revenus des petits producteurs locaux.",
    date: '10 Avril 2026',
  },
  {
    id: 'partenariat-paris',
    imgUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
    category: 'Alliance',
    title: 'Nouveau partenariat stratégique à Paris',
    content: "Lors du dernier sommet sur le climat à Paris, Coreline a scellé une alliance avec trois fonds d'impact européens. Ce partenariat vise à injecter 50 millions d'euros dans des projets d'énergie renouvelable décentralisée en zone rurale d'ici 2028.",
    date: '02 Avril 2026',
  }
];

const NewsDetailPage = () => {
  const { id } = useParams();
  const article = newsDB.find(a => a.id === id) || newsDB[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main style={{ paddingTop: '100px', paddingBottom: '60px', background: 'var(--gray-50)', minHeight: '100vh' }}>
      <SEO title={article.title} description={article.content.substring(0, 160)} />
      <article className="container" style={{ maxWidth: '900px' }}>
        <Link to="/actualites" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--primary)', fontWeight: '600' }}>
          ← Retour aux actualités
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img 
            src={article.imgUrl} 
            alt={article.title} 
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', marginBottom: '2.5rem', boxShadow: 'var(--shadow-premium)' }} 
          />
          <span className="badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>{article.category}</span>
          <h1 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '1rem', fontWeight: '800' }}>{article.title}</h1>
          <p style={{ color: 'var(--gray-500)', marginBottom: '2.5rem' }}>Publié le {article.date}</p>
          
          <div style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--gray-700)', whiteSpace: 'pre-line' }}>
            {article.content}
            <br /><br />
            Coreline Alliance continue de monitorer ces avancées pour garantir un impact durable et mesurable sur le terrain. Restez connectés pour plus de détails sur nos prochaines étapes.
          </div>
        </motion.div>
      </article>
    </main>
  );
};

export default NewsDetailPage;
