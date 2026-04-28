import SEO from '../components/common/SEO';
import BentoServices from '../components/home/BentoServices';
import ContactSection from '../components/home/ContactSection';
import Hero from '../components/home/Hero';
import ImpactMetrics from '../components/home/ImpactMetrics';
import MissionSection from '../components/home/MissionSection';
import NewsSection from '../components/home/NewsSection';
import Portfolio from '../components/home/Portfolio';

const Home = () => {
  return (
    <main>
      <SEO
        title="Accueil"
        description="Coreline Alliance structure des projets d'impact et mobilise des capitaux institutionnels pour transformer le potentiel africain en valeur partagée."
      />
      <Hero />
      <ImpactMetrics />
      <MissionSection />
      <BentoServices />
      <Portfolio />
      <NewsSection />
      <ContactSection />
    </main>
  );
};

export default Home;
