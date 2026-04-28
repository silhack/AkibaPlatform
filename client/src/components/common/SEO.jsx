import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogType = 'website', 
  ogImage = '/assets/hero_bg.png',
  twitterHandle = '@coreline_alliance'
}) => {
  const siteName = 'Coreline Alliance';
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = "Coreline est une alliance internationale d'experts œuvrant pour accélérer le développement de projets durables et l'investissement institutionnel en Afrique.";

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph tags (Facebook, LinkedIn) */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || defaultDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content={twitterHandle} />
      <meta name="twitter:creator" content={twitterHandle} />
    </Helmet>
  );
};

export default SEO;
