import "../style/PortfolioHero.css";
import Reveal from "./Reveal";
import { ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      <div className="container">

        <div className="portfolio-hero-grid">

          {/* Left Content */}
          <Reveal>
            <div className="portfolio-content">

              <span className="portfolio-tag">
                OUR PORTFOLIO
              </span>

              <h1>
                Turning Ideas Into
                <span> Digital Success Stories</span>
              </h1>

              <p>
                Every project reflects our passion for creativity,
                strategy, and technology. Explore how we've helped
                businesses build stronger brands, better websites,
                and measurable digital growth.
              </p>

              <div className="portfolio-buttons">

                <a
                  href="#featured-projects"
                  className="btn btn-primary rounded-pill"
                >
                  <Briefcase size={18} />
                  <span>View Projects</span>
                </a>

                <Link
                  to="/contact"
                  className="btn btn-outline-success rounded-pill"
                >
                  Let's Talk
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          </Reveal>

          {/* Right Visual */}
          <Reveal>
            <div className="portfolio-visual">

              <div className="hero-glow"></div>

              <div className="hero-ring ring-one"></div>
              <div className="hero-ring ring-two"></div>
              <div className="hero-ring ring-three"></div>

              <div className="portfolio-circle">

                <div className="circle-icon">
                  <Briefcase size={55} />
                </div>

                <h3>50+</h3>

                <p>
                  Creative Digital Projects
                </p>

              </div>

              <div className="floating-card card-one">
                UI / UX Design
              </div>

              <div className="floating-card card-two">
                Web Development
              </div>

              <div className="floating-card card-three">
                SEO & Marketing
              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}