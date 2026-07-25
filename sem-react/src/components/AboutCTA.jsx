import "../style/AboutCTA.css";
import Reveal from "./Reveal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutCTA() {
  return (
    <section className="about-cta">
      <div className="container">

        <Reveal>
          <div className="about-cta-box">

            {/* Decorative Blobs */}
            <div className="cta-blob cta-blob-1"></div>
            <div className="cta-blob cta-blob-2"></div>

            <span className="cta-tag">
              LET'S BUILD SOMETHING AMAZING
            </span>

            <h2>
              Ready to Grow
              <span> Your Business?</span>
            </h2>

            <p>
              Whether you're launching a new brand, improving your online
              presence, or scaling your business, we're here to turn your
              ideas into powerful digital experiences.
            </p>

            <div className="cta-buttons">

              <a
                href="/#contact"
                className="btn btn-primary rounded-pill"
              >
                <MessageCircle size={18} />
                <span>Book Free Consultation</span>
              </a>

              <Link
                to="/services"
                className="btn btn-outline-light rounded-pill"
              >
                <span>Explore Services</span>
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}