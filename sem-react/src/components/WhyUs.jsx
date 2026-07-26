import Reveal from './Reveal.jsx';
import { features } from '../data/content.js';
import monk from '../assests/Monk-2.svg';
import "./WhyUs.css";

const metrics = [
  { value: '214%', label: 'Avg. Traffic Increase' },
  { value: '98%', label: 'Client Retention Rate' },
  { value: '50+', label: 'Canadian Clients Served' },
  { value: '4.9★', label: 'Average Rating' },
];

export default function WhyUs() {
  return (
    <section className="whyus-premium">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left — Visual */}
          <div className="col-lg-5">
            <Reveal className="whyus-visual-wrap">
              {/* Decorative blobs */}
              <div className="wv-blob wv-blob-1" aria-hidden="true"></div>
              <div className="wv-blob wv-blob-2" aria-hidden="true"></div>

              {/* Enso rings + monk, grouped so they can overlap on mobile */}
              <div className="enso-monk-stack">
                <div className="enso whyus-enso" aria-hidden="true">
                  <svg viewBox="0 0 300 300" width="100%" height="100%">
                    <circle className="enso-circle enso-gold" cx="150" cy="150" r="126" strokeWidth="2.5" transform="rotate(-60 150 150)"></circle>
                    <circle className="enso-circle enso-moss" cx="150" cy="150" r="112" strokeWidth="7" transform="rotate(-30 150 150)"></circle>
                  </svg>
                </div>

                <img src={monk} alt="Why Choose Search Engine Monks" loading="lazy" decoding="async" className="whyus-monk-img" />
              </div>

              {/* Metric chips floating over image */}
              <div className="wv-metrics">
                {metrics.map((m, i) => (
                  <div className={`wv-metric-chip metric-${i + 1}`} key={m.label}>
                    <span className="wv-metric-value">{m.value}</span>
                    <span className="wv-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right — Content */}
          <div className="col-lg-7">
            <Reveal as="span" className="section-tag">Why Choose Us</Reveal>
            <Reveal as="h2" className="section-title text-start mt-3" delay={1}>
              Why businesses choose<br />
              <span className="whyus-brand-name">Search Engine Monks</span>
            </Reveal>
            <Reveal as="p" className="section-subtitle text-start" delay={1}>
              We combine creativity, technology, and data-driven strategies to help
              Canadian businesses grow online and generate measurable results.
            </Reveal>

            <div className="whyus-features-list mt-4">
              {features.map((f, i) => (
                <Reveal className="whyus-feature-row" delay={i} key={f.title}>
                  <div className="wf-icon-wrap">
                    <i className={f.icon}></i>
                  </div>
                  <div className="wf-content">
                    <h5 className="wf-title">{f.title}</h5>
                    <p className="wf-text">{f.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal className="whyus-cta-row mt-5" delay={3}>
              <a href="#contact" className="btn btn-primary-premium">
                Get Your Free SEO Audit <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
              <div className="whyus-cta-note">
                <i className="fa-solid fa-shield-halved"></i> No contracts. No pressure.
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}