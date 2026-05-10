import SEO from '../components/common/SEO';

const MentionsLegales = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <SEO title="Mentions Légales" description="Mentions légales de Coreline Alliance." />
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ color: 'var(--secondary)', marginBottom: '3rem', fontWeight: '900', fontSize: '3rem' }}>Mentions Légales</h1>
        
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--secondary)', fontSize: '1.5rem', marginBottom: '1.2rem', fontWeight: '800' }}>
            <span style={{ color: 'var(--accent)' }}>1.</span> Édition du site
          </h2>
          <p style={{ color: 'var(--gray-600)' }}>Le présent site est édité par <strong>Coreline Alliance</strong>.</p>
          <p style={{ color: 'var(--gray-600)' }}>Responsable de la publication : <strong>Équipe Direction Coreline</strong>.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--secondary)', fontSize: '1.5rem', marginBottom: '1.2rem', fontWeight: '800' }}>
            <span style={{ color: 'var(--accent)' }}>2.</span> Hébergement
          </h2>
          <p style={{ color: 'var(--gray-600)' }}>Le site est hébergé par des serveurs sécurisés conformes aux normes de l'Alliance.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--secondary)', fontSize: '1.5rem', marginBottom: '1.2rem', fontWeight: '800' }}>
            <span style={{ color: 'var(--accent)' }}>3.</span> Propriété intellectuelle
          </h2>
          <p style={{ color: 'var(--gray-600)', lineHeight: '1.8' }}>L'ensemble de ce site relève de la législation internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés.</p>
        </section>
      </div>
    </main>
  );
};

export default MentionsLegales;
