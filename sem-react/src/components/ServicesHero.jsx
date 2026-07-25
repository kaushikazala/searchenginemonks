import "../style/ServicesHero.css";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="services-hero">
      {/* Background Effects */}
      <div className="hero-bg-gradient"></div>
      <div className="hero-blob blob-1"></div>
      <div className="hero-blob blob-2"></div>
      <div className="hero-blob blob-3"></div>

      <div className="container services-hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <span className="hero-tag">
            ✨ Premium Digital Services
          </span>

          <h1>
            Digital Solutions That
            <span> Drive Real Growth</span>
          </h1>

          <p>
            From SEO and Web Design to Branding, AI Solutions and Digital
            Marketing, we create strategies that help businesses attract,
            convert, and retain more customers.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get Free Consultation
              <ArrowRight size={18} />
            </button>

            <button className="secondary-btn">
              Explore Services
            </button>
          </div>

          {/* Stats */}

          <div className="hero-stats">

            <div>
              <h2>500+</h2>
              <span>Projects</span>
            </div>

            <div>
              <h2>95%</h2>
              <span>Client Satisfaction</span>
            </div>

            <div>
              <h2>10+</h2>
              <span>Years Experience</span>
            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-visual">

          <div className="main-card">

            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900"
              alt="SEO Dashboard"
            />

          </div>

          <div className="floating-card card1">
            📈 +250% Traffic
          </div>

          <div className="floating-card card2">
            ⭐ Google Premier Partner
          </div>

          <div className="floating-card card3">
            🤖 AI Powered
          </div>

          <div className="floating-card card4">
            🚀 500+ Projects
          </div>

        </div>
      </div>
    </section>
  );
}