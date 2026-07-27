import "../style/Testimonials.css";  
import Reveal from './Reveal.jsx';  
import { testimonials } from '../data/content.js';
import clinet1 from '../assests/clinet1.jpeg';
import clinet2 from '../assests/clinet2.jpeg';
import clinet3 from '../assests/clinet3.jpeg';

const clientImages = [clinet1, clinet2, clinet3];

const summaryStats = [
  { value: '4.9/5', label: 'Average Rating', icon: 'fa-solid fa-star' },
  { value: '50+', label: 'Happy Clients', icon: 'fa-solid fa-users' },
  { value: '98%', label: 'Would Recommend', icon: 'fa-solid fa-heart' },
];

export default function Testimonials() {
  return (
    <section className="testi-premium">
      <div className="container">

        {/* Header */}
        <div className="text-center">
          <Reveal as="span" className="section-tag">Testimonials</Reveal>
          <Reveal as="h2" className="section-title mt-3" delay={1}>What our clients say</Reveal>
          <Reveal as="p" className="section-subtitle" delay={1}>
            Businesses across Canada trust Search Engine Monks to deliver measurable
            growth and exceptional digital solutions.
          </Reveal>
        </div>

        {/* Summary stats */}
        <Reveal className="testi-summary-bar" delay={1}>
          {summaryStats.map((s) => (
            <div className="tsb-item" key={s.label}>
              <div className="tsb-icon"><i className={s.icon}></i></div>
              <div className="tsb-text">
                <span className="tsb-value">{s.value}</span>
                <span className="tsb-label">{s.label}</span>
              </div>
            </div>
          ))}
        </Reveal>

        {/* Cards */}
        <div className="row g-4 mt-2">
          {testimonials.map((t, i) => (
            <div className="col-lg-4 col-md-6 col-12" key={t.name}>
              <Reveal className="testi-card-premium" delay={i % 3}>
                {/* Quotes decoration */}
                <div className="tc-quote-mark" aria-hidden="true">"</div>

                {/* Stars */}
                <div className="tc-stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <i className="fas fa-star" key={idx}></i>
                  ))}
                </div>

                {/* Text */}
                <p className="tc-text">"{t.text}"</p>

                {/* Author */}
                <div className="tc-author">
                  <img
                    src={clientImages[i] ?? clinet3}
                    alt={t.name}
                    className="tc-avatar"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="tc-author-info">
                    <h6>{t.name}</h6>
                    <span>{t.role}</span>
                  </div>
                  <div className="tc-verified" title="Verified Review">
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* Platform logos strip */}
        <Reveal className="testi-platform-strip" delay={3}>
          <span className="tps-label">Reviewed on</span>
          <div className="tps-logos">
            <span className="tps-logo"><i className="fab fa-google"></i> Google</span>
            <span className="tps-logo"><i className="fa-solid fa-star" style={{color:'#FF5A5F'}}></i> Clutch</span>
            <span className="tps-logo"><i className="fab fa-facebook"></i> Facebook</span>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
