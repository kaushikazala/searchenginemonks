import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage"

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <FAQ />
      {/* <Contact /> */}
      <Footer />
      <BackToTop />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Services Page */}
      <Route path="/services" element={<ServicesPage/>} />

      {/* About Page */}
      <Route path="/about" element={<AboutPage />} />

      {/* Portfolio Page */}
      <Route path="/portfolio" element={<PortfolioPage />} />

      {/* FAQ Page */}
      <Route path="/faq" element={<FAQPage />} />

      {}
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}