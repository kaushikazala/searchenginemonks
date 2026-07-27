import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import AboutHero from "../components/AboutHero";
import StorySection from "../components/StorySection";
import OurProcess from "../components/OurProcess";
import WhyChooseUs from "../components/WhyChooseUs";
import AboutCTA from "../components/AboutCTA";

export default function AboutPage() {
  return (
    <>
    
      <AboutHero />

      <StorySection/>

      <OurProcess/>

      <WhyChooseUs/>

      <AboutCTA/>

      <Footer />

      <BackToTop />
    </>
  );
}