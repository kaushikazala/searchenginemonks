import Reveal from './Reveal.jsx';
import { services } from '../data/content.js';

const serviceColors = [
  { accent: '#1F5A48', light: '#e7f7f2ff' },
  { accent: '#C8931F', light: '#FDF5E6' },
  { accent: '#2E86AB', light: '#e0f1f7ff' },
  { accent: '#8B5CF6', light: '#e7e2faff' },
  { accent: '#E53E3E', light: '#fdebebff' },
  { accent: '#38A169', light: '#e1fce8ff' },
  { accent: '#D69E2E', light: '#fcfcc6ff' },
  { accent: '#718096', light: '#e8f0f5ff' },
];

export default function Services() {
  return (
    <section id="services" className="services-premium">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-premium text-center">
          <Reveal as="span" className="section-tag">Capabilities</Reveal>
          <Reveal as="h2" className="section-title mt-3" delay={1}>
            SEO &amp; digital growth services
          </Reveal>
          <Reveal as="p" className="section-subtitle" delay={1}>
            Complete digital solutions to help Canadian businesses rank higher,
            generate quality leads, and grow online with measurable results.
          </Reveal>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((s, i) => {
            const color = serviceColors[i % serviceColors.length];
            return (
              <Reveal
                className="service-card-premium"
                delay={i % 4}
                key={s.title}
                style={{ '--accent': color.accent, '--accent-light': color.light }}
              >
                {/* Hover glow blob */}
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
                <div className="sc-arrow" aria-hidden="true">
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* CTA strip */}
        <Reveal className="services-cta-strip" delay={3}>
          <div className="scta-left">
            <span className="scta-emoji">🧘</span>
            <div>
              <h5>Not sure which service you need?</h5>
              <p>Book a free 30-minute strategy call — we'll map out exactly what will move the needle for your business.</p>
            </div>
          </div>
          <a href="#contact" className="btn btn-primary-premium scta-btn">
            Book Free Call <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
