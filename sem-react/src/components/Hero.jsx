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
  { icon: 'fa-brands fa-google', label: 'Google Visibility', position: 'fc-6' },
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
            
            {/* <Reveal delay={2}>
                <div className="commitment-text mt-2">
                    <i className="fa-solid fa-shield-halved"></i> No Commitment. No Obligation.
                </div>
            </Reveal> */}

            <Reveal className="hero-trust-list-premium mt-4" delay={2}>
              {trustPoints.map((point) => (
                <span className="trust-pill-premium" key={point.label}>
                  <i className={point.icon}></i>
                  {point.label}
                </span>
              ))}
            </Reveal>

            {/* <Reveal className="trusted-strip-premium mt-4" delay={3}>
              <div className="trusted-text text-center">Trusted by businesses &amp; brands across Canada</div>
              <div className="trusted-logos-premium mt-3" aria-hidden>
                <i className="fab fa-google fa-lg" title="Google Partner"></i>
                <i className="fab fa-shopify fa-lg" title="Shopify"></i>
                <i className="fab fa-wordpress fa-lg" title="WordPress"></i>
                <i className="fab fa-hubspot fa-lg" title="HubSpot"></i>
                <span className="clutch-logo">Clutch <span className="clutch-stars">★★★★★</span></span>
                <i className="fas fa-circle fa-lg" title="UpCity"></i>
              </div>
            </Reveal> */}

            {/* <Reveal className="canada-row-premium mt-3" delay={3}>
              <div className="canada-label-premium"><span className="flag">🇨🇦</span> Proudly helping businesses across Canada</div>
              <div className="city-chips-premium">
                <span><span className="city-dot"></span>Toronto</span>
                <span><span className="city-dot"></span>Vancouver</span>
                <span><span className="city-dot"></span>Calgary</span>
                <span><span className="city-dot"></span>Ottawa</span>
                <span><span className="city-dot"></span>Montreal</span>
              </div>
            </Reveal> */}
          </div>

        
          {/* Right Image */}
{/* Right Image */}
<div className="col-lg-6 text-center hero-right-content">
  <Reveal delay={1} className="hero-visual-stage">

    <div className="whyus-visual-wrap">

      {/* Background Glow */}
      <div className="hero-glow-core"></div>

      {/* Premium Orbit Rings */}
      {/* <div className="orbit orbit-1"></div>
      {/* <div className="orbit orbit-2"></div> */}
      {/* <div className="orbit orbit-3"></div> */}

      {/* Orbit Nodes */}
      <span className="orbit-node node1"></span>
      <span className="orbit-node node2"></span>
      <span className="orbit-node node3"></span>
      <span className="orbit-node node4"></span>
      <span className="orbit-node node5"></span>
      <span className="orbit-node node6"></span>

      {/* Existing Dashed Ring */}
      <div className="hero-rotating-dashed-ring"></div>

      {/* Monk */}
      <img
        src={monk}
        alt="Digital Marketing illustration"
        className="hero-image-premium"
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

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

      {/* SEO Overlay Card */}
      <div className="hero-overlay-card-premium">
        <div className="overlay-icon">
          <i className="fa-solid fa-shield-halved"></i>
        </div>

        <div className="overlay-text-content">
          <h4>100% White-Hat SEO</h4>
          <p>Ethical growth strategies, built for results that hold.</p>
        </div>
      </div>

    </div>

  </Reveal>

  {/* Testimonial */}
  {/* <Reveal delay={2} className="testimonial-wrap">
    <div className="glass-card testimonial-card-hero-premium">

      <div className="testimonial-quotes">"</div>

      <div className="testimonial-stars">
        ★★★★★
      </div>

      <div className="testimonial-text">
        Search Engine Monks helped us increase our organic traffic by 214% in just 6 months!
      </div>

      <div className="testimonial-author">
        <img
          src="https://i.pravatar.cc/100?img=11"
          alt="David L."
        />

        <div className="testimonial-author-info">
          <h6>David L.</h6>
          <p>E-commerce Business, Toronto</p>
        </div>
      </div>

    </div>
  </Reveal> */}

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
