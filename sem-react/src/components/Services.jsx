import "../style/Services.css";
import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { services } from "../data/content.js";


const serviceColors = [
  { accent: "#1F5A48", light: "#E7F7F2" },
  { accent: "#C8931F", light: "#FDF5E6" },
  { accent: "#2E86AB", light: "#E0F1F7" },
  { accent: "#8B5CF6", light: "#E7E2FA" },
  { accent: "#E53E3E", light: "#FDEBEB" },
  { accent: "#38A169", light: "#E1FCE8" },
  { accent: "#D69E2E", light: "#FCFCC6" },
  { accent: "#718096", light: "#E8F0F5" },
];

export default function Services() {
  return (
    <section id="services" className="services-premium">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-premium text-center">
          <Reveal as="span" className="section-tag">
            Capabilities
          </Reveal>

          <Reveal as="h2" className="section-title mt-3" delay={1}>
            SEO &amp; Digital Growth Services
          </Reveal>

          <Reveal as="p" className="section-subtitle" delay={1}>
            Complete digital solutions to help Canadian businesses rank
            higher, generate quality leads, and grow online with measurable
            results.
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((s, i) => {
            const color = serviceColors[i % serviceColors.length];

            return (
              <Link
                key={s.title}
                to="/services"
                className="service-link"
              >
                <Reveal
                  className="service-card-premium"
                  delay={i % 4}
                  style={{
                    "--accent": color.accent,
                    "--accent-light": color.light,
                  }}
                >
                  {/* Glow */}
                  <div className="sc-glow" aria-hidden="true"></div>

                  {/* Icon */}
                  <div className="sc-icon-wrap">
                    <i className={s.icon}></i>
                  </div>

                  {/* Content */}
                  <div className="sc-body">
                    <h4 className="sc-title">{s.title}</h4>

                    <p className="sc-text">{s.text}</p>
                  </div>

                  {/* Arrow */}
                  <div className="sc-arrow">
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                </Reveal>
              </Link>
            );
          })}
        </div>

        {/* CTA Strip */}
        <Reveal className="services-cta-strip" delay={3}>
          <div className="scta-left">
            <span className="scta-emoji">🧘</span>

            <div>
              <h5>Not sure which service you need?</h5>

              <p>
                Book a free 30-minute strategy call and we'll help you choose
                the right solution for your business.
              </p>
            </div>
          </div>

          <a href="#contact" className="btn btn-primary-premium scta-btn">
            Book Free Call
            <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </Reveal>
      </div>
    </section>
  );
}