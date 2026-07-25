import "../style/PortfolioCTA.css";
import Reveal from "./Reveal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function PortfolioCTA() {
  return (
    <section className="portfolio-cta">
      <div className="container">

        <Reveal>
          <div className="portfolio-cta-box">

            <div className="portfolio-blob blob-one"></div>
            <div className="portfolio-blob blob-two"></div>

            <span className="portfolio-cta-tag">
              LET'S CREATE SOMETHING AMAZING
            </span>

            <h2>
              Have a Project
              <span> In Mind?</span>
            </h2>

            <p>
              Whether you're launching a new business, redesigning your
              website, or growing your online presence, our team is ready
              to turn your ideas into impactful digital experiences.
            </p>

            <div className="portfolio-cta-buttons">

              <a
                href="/#contact"
                className="btn btn-primary rounded-pill"
              >
                <MessageCircle size={18} />
                Book Free Consultation
              </a>

              <Link
                to="/services"
                className="btn btn-outline-light rounded-pill"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}