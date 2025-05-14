import BenefitsSection from "./components/BenefitsSection";
import CareSection from "./components/CareSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NewsletterSection from "./components/NewsletterSection";
import VacancySection from "./components/VacancySection";
import ValuesSection from "./components/ValuesSection";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ValuesSection />
      <BenefitsSection />
      <CareSection />
      <VacancySection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
