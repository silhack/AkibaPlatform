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
