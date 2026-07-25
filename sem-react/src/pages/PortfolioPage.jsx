import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

import PortfolioHero from "../components/PortfolioHero";
import FeaturedProjects from "../components/FeaturedProjects";
import ExpertiseSection from "../components/ExpertiseSection";
import IndustriesSection from "../components/IndustriesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import PortfolioCTA from "../components/PortfolioCTA";

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <PortfolioHero />

      <FeaturedProjects />

      <ExpertiseSection />

      <IndustriesSection />

      <TestimonialsSection />

      <PortfolioCTA />

      <Footer />

      <BackToTop />
    </>
  );
}