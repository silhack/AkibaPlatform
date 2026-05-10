import SEO from '../components/common/SEO';

const PolitiqueConfidentialite = () => {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '60px' }}>
      <SEO title="Politique de Confidentialité" description="Politique de protection des données personnelles de Coreline Alliance." />
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ color: 'var(--secondary)', marginBottom: '3rem', fontWeight: '900', fontSize: '3rem' }}>Politique de Confidentialité</h1>
        
        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--secondary)', fontSize: '1.5rem', marginBottom: '1.2rem', fontWeight: '800' }}>
            <span style={{ color: 'var(--accent)', fontSize: '2rem', marginRight: '10px' }}>•</span> Collecte des informations
          </h2>
          <p style={{ color: 'var(--gray-600)', lineHeight: '1.8' }}>Nous collectons uniquement les informations nécessaires au traitement de vos demandes via le formulaire de contact sécurisé (Nom, Email Professionnel, Objet de la demande).</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--secondary)', fontSize: '1.5rem', marginBottom: '1.2rem', fontWeight: '800' }}>
            <span style={{ color: 'var(--accent)', fontSize: '2rem', marginRight: '10px' }}>•</span> Engagement de Confidentialité
          </h2>
          <p style={{ color: 'var(--gray-600)', lineHeight: '1.8' }}>Coreline Alliance s'engage à ne jamais vendre, louer ou céder vos données à des tiers. Vos informations sont traitées avec la plus grande rigueur institutionnelle.</p>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--secondary)', fontSize: '1.5rem', marginBottom: '1.2rem', fontWeight: '800' }}>
            <span style={{ color: 'var(--accent)', fontSize: '2rem', marginRight: '10px' }}>•</span> Vos Droits
          </h2>
          <p style={{ color: 'var(--gray-600)', lineHeight: '1.8' }}>Conformément au RGPD, vous disposez d'un droit permanent d'accès, de rectification et de suppression de vos données personnelles sur simple demande.</p>
        </section>
      </div>
    </main>
  );
};

export default PolitiqueConfidentialite;
