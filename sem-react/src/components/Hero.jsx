import "../style/Hero.css";
import Reveal from './Reveal.jsx';
import StatCounter from './StatCounter.jsx';
import monk from '../assests/Monk-2.svg';


const stats = [
  { icon: 'fa-solid fa-briefcase', to: 100, suffix: '+', label: 'Projects Completed' },
  { icon: 'fa-solid fa-users', to: 50, suffix: '+', label: 'Happy Clients' },
  { icon: 'fa-solid fa-award', to: 5, suffix: '+', label: 'Years Experience' },
  { icon: 'fa-solid fa-heart', to: 98, suffix: '%', label: 'Client Retention' },
];

const trustPoints = [
  { icon: 'fa-solid fa-shield-halved', label: 'White-hat SEO' },
  { icon: 'fa-solid fa-bolt', label: 'Fast Turnaround' },
  { icon: 'fa-regular fa-star', label: '4.9/5 Satisfaction' },
  { icon: 'fa-solid fa-chart-pie', label: 'Transparent Reporting' },
];

const floatingCards = [
  { icon: 'fa-solid fa-chart-simple', label: 'Higher Rankings', position: 'fc-1' },
  { icon: 'fa-solid fa-magnifying-glass', label: 'More Traffic', position: 'fc-2' },
  { icon: 'fa-solid fa-bolt', label: 'Better Performance', position: 'fc-3' },
  { icon: 'fa-solid fa-mobile-screen', label: 'Mobile Friendly', position: 'fc-4' },
  { icon: 'fa-solid fa-star', label: '5 ★ Reviews', position: 'fc-5' },

];

// Decorative mandala / flower SVG
function FlowerBg() {
  return (
    <svg
      className="hero-bg-flower"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer petals ring */}
      {[...Array(12)].map((_, i) => (
        <ellipse
          key={`op-${i}`}
          cx="250" cy="125"
          rx="28" ry="60"
          fill="none"
          stroke="#1F5A48"
          strokeWidth="1.2"
          transform={`rotate(${i * 30} 250 250)`}
        />
      ))}
      {/* Middle petals ring */}
      {[...Array(8)].map((_, i) => (
        <ellipse
          key={`mp-${i}`}
          cx="250" cy="155"
          rx="20" ry="45"
          fill="none"
          stroke="#C8931F"
          strokeWidth="1"
          transform={`rotate(${i * 45} 250 250)`}
        />
      ))}
      {/* Inner petals ring */}
      {[...Array(6)].map((_, i) => (
        <ellipse
          key={`ip-${i}`}
          cx="250" cy="195"
          rx="14" ry="30"
          fill="none"
          stroke="#1F5A48"
          strokeWidth="0.8"
          transform={`rotate(${i * 60} 250 250)`}
        />
      ))}
      {/* Circles */}
      <circle cx="250" cy="250" r="120" fill="none" stroke="#C8931F" strokeWidth="0.6" />
      <circle cx="250" cy="250" r="80" fill="none" stroke="#1F5A48" strokeWidth="0.6" />
      <circle cx="250" cy="250" r="40" fill="none" stroke="#C8931F" strokeWidth="0.8" />
      <circle cx="250" cy="250" r="10" fill="#1F5A48" opacity="0.15" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="hero-premium">
      {/* Background elements */}
      <div className="hero-bg-gradients"></div>
      <div className="hero-bg-grid"></div>
      <div className="hero-bg-shapes"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-center gy-5">
          {/* Left Content */}
          <div className="col-lg-6 hero-left-content">
            <Reveal as="span" className="hero-badge-premium">
              <span className="badge-dot"></span> SEO &middot; Website Design &middot; Performance Ads
            </Reveal>

            <Reveal as="h1" className="hero-title mt-3" delay={1}>
              Proven SEO strategies for <em className="hl-guaranteed-premium">guaranteed</em> results in <span className="hl-canada-gold">Canada</span> 🍁
            </Reveal>

            <Reveal as="p" className="hero-text mt-4" delay={2}>
              We help businesses rank higher, attract qualified traffic, and convert more leads
              through tailored SEO, website development, and performance marketing — approached
              with the same patience and precision a craft demands.
            </Reveal>

            <Reveal className="mt-4 hero-actions-premium" delay={2}>
              <div className="btn-with-sub">
                <a href="#contact" className="btn btn-primary-premium">
                  <span className="btn-icon">🚀</span> Get Free SEO Audit 
                  <div className="btn-sub">Results in 24 Hours</div>
                </a>
              </div>
              <a href="#portfolio" className="btn btn-outline-premium">View Case Studies <span className="btn-arrow">→</span></a>
            </Reveal>
            
           

            <Reveal className="hero-trust-list-premium mt-4" delay={2}>
              {trustPoints.map((point) => (
                <span className="trust-pill-premium" key={point.label}>
                  <i className={point.icon}></i>
                  {point.label}
                </span>
              ))}
            </Reveal>

        
          </div>

{/* Right Image */}
<div className="col-lg-6 text-center hero-right-content">
  <Reveal delay={1} className="hero-visual-stage">

    <div className="whyus-visual-wrap">

      {/* Background Glow */}
      <div className="hero-glow-core"></div>

      {/* Orbit Nodes */}
      <span className="orbit-node node1"></span>
      <span className="orbit-node node2"></span>
      <span className="orbit-node node3"></span>
      <span className="orbit-node node4"></span>
      <span className="orbit-node node5"></span>
      <span className="orbit-node node6"></span>

      {/* Enso Rings + Monk stacked */}
      <div className="enso-monk-stack hero-enso-stack">
        {/* Animated enso rings */}
        <div className="whyus-enso" aria-hidden="true">
          <svg viewBox="0 0 300 300" width="100%" height="100%">
            <circle className="enso-gold" cx="150" cy="150" r="126" fill="none" stroke="#C8931F" strokeWidth="2.5" strokeDasharray="60 720" />
            <circle className="enso-moss" cx="150" cy="150" r="112" fill="none" stroke="#1F5A48" strokeWidth="7" strokeDasharray="40 660" />
          </svg>
        </div>

        {/* Monk */}
        <img
          src={monk}
          alt="Digital Marketing illustration"
          className="whyus-monk-img hero-monk-img"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Existing Dashed Ring */}
      <div className="hero-rotating-dashed-ring"></div>

      {/* Floating Cards */}
      {floatingCards.map((card) => (
        <div
          key={card.label}
          className={`floating-glass-card-premium ${card.position}`}
        >
          <div className="fc-icon-wrapper">
            <i className={card.icon}></i>
          </div>
          <span>{card.label}</span>
        </div>
      ))}

    </div>

  </Reveal>

</div>
        </div>
        
        {/* Bottom Stats Row */}
        <Reveal className="hero-bottom-stats-row mt-5" delay={4}>
            {stats.map((s) => (
            <div className="stat-item-premium" key={s.label}>
                <div className="stat-icon-wrapper"><i className={s.icon}></i></div>
                <div className="stat-text-wrapper">
                    <div className="stat-number">
                        <StatCounter to={s.to} suffix={s.suffix} />
                    </div>
                    <p>{s.label}</p>
                </div>
            </div>
            ))}
        </Reveal>
      </div>
    </section>
  );
}
