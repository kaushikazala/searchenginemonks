import Reveal from './Reveal.jsx';
import { portfolio } from '../data/content.js';
import "./Portfolio.css";

const portfolioMeta = [
  { result: '+214% Traffic', bg: 'linear-gradient(135deg, #1F5A48 0%, #2D7A63 100%)' },
  { result: '#1 Google Ranking', bg: 'linear-gradient(135deg, #C8931F 0%, #E8A930 100%)' },
  { result: '3× Brand Recognition', bg: 'linear-gradient(135deg, #2E86AB 0%, #4DA6C8 100%)' },
  { result: '5× More Leads', bg: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-premium">
      <div className="container">
        {/* Header */}
        <div className="text-center">
          <Reveal as="span" className="section-tag">Our Work</Reveal>
          <Reveal as="h2" className="section-title mt-3" delay={1}>Recent projects &amp; case studies</Reveal>
          <Reveal as="p" className="section-subtitle" delay={1}>
            Real results for real Canadian businesses — from e-commerce to local SEO.
          </Reveal>
        </div>

        {/* Portfolio Grid */}
        <div className="row g-4 mt-2">
          {portfolio.map((p, i) => {
            const meta = portfolioMeta[i % portfolioMeta.length];
            return (
              <div className="col-lg-3 col-md-6 col-12" key={p.title}>
                <Reveal className="pf-card" delay={i % 4} style={{ '--pf-bg': meta.bg }}>
                  {/* Gradient Header */}
                  <div className="pf-header">
                    <div className="pf-icon-ring">
                      <i className={p.icon}></i>
                    </div>
                    <div className="pf-result-badge">{meta.result}</div>
                  </div>

                  {/* Content */}
                  <div className="pf-body">
                    <span className="pf-tag">{p.tag}</span>
                    <h4 className="pf-title">{p.title}</h4>
                    <a href="#contact" className="pf-link">
                      View Details <i className="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <Reveal className="pf-bottom-strip" delay={3}>
          <p>Want results like these for your business?</p>
          <a href="#contact" className="btn btn-primary-premium">
            Start Your Project <i className="fa-solid fa-arrow-right ms-2"></i>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
