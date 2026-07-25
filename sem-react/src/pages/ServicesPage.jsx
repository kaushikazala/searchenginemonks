import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

import ServicesHero from "../components/ServicesHero";
import ServiceNavigation from "../components/ServiceNavigation";
import ServiceSection from "../components/ServiceSection";
import GooglePartner from "../components/GooglePartner";
import FAQ from "../components/FAQ";
import CTASection from "../components/CTASection";

import { servicesData } from "../data/servicesData";
import IndustriesSection from "../components/IndustriesSection";
import ResultsSection from "../components/ResultsSection";
import OurProcess from "../components/OurProcess";


export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <ServicesHero />

      <ServiceNavigation />

      {servicesData.map((service) => (
        <ServiceSection key={service.id} {...service} />
      ))}

      <OurProcess />

      <IndustriesSection/>

      <ResultsSection/>

      <GooglePartner />

      <FAQ />

      <CTASection />

      <Footer />

      <BackToTop />
    </>
  );
}

// export default function ServicesPage() {
//   return (
//     <>
//       <Navbar />

//       <ServicesHero />

//       <ServiceNavigation />

//       {servicesData.map((service) => (
//         <ServiceSection key={service.id} {...service} />
//       ))}

//       <GooglePartner />

//       <FAQ />

//       <CTASection />

//       <Footer />

//       <BackToTop />
//     </>
//   );
// }