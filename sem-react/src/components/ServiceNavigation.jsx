import { useEffect, useState } from "react";
import "../style/ServiceNavigation.css";

const services = [
  { id: "seo", label: "SEO", icon: "🔍" },
  { id: "web-design", label: "Web Design", icon: "💻" },
  { id: "branding", label: "Branding", icon: "🎨" },
  { id: "ai", label: "AI Solutions", icon: "🤖" },
  { id: "marketing", label: "Marketing", icon: "📈" },
];

export default function ServiceNavigation() {
  const [active, setActive] = useState("seo");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = "seo";

      services.forEach((service) => {
        const section = document.getElementById(service.id);

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top <= 180) {
          current = service.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 return (
  <section className="service-nav-wrapper">
    <div className="container">

      <div className="service-nav-heading">
        <span>OUR EXPERTISE</span>

        <h2>Explore Our Services</h2>

        <p>
          Choose a service below to learn how we help businesses
          achieve sustainable digital growth.
        </p>
      </div>

      <div className="service-nav">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => scrollToSection(service.id)}
            className={`service-link ${
              active === service.id ? "active" : ""
            }`}
          >
            <span>{service.icon}</span>
            {service.label}
          </button>
        ))}
      </div>

    </div>
  </section>
);
}