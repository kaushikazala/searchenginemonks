import "../style/ContactHero.css";
import Reveal from "./Reveal";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="container">

        <div className="contact-hero-grid">

          {/* Left */}
          <Reveal>
            <div className="contact-content">

              <span className="contact-tag">
                CONTACT US
              </span>

              <h1>
                Let's Build
                <span> Something Amazing</span>
              </h1>

              <p>
                Whether you're launching a new business, redesigning your
                website, or looking to grow your online presence, our team
                is ready to help bring your vision to life.
              </p>

              <div className="contact-buttons">

                <a
                  href="/#contact"
                  className="btn btn-primary rounded-pill"
                >
                  <MessageCircle size={18} />
                  Book Free Consultation
                </a>

                <Link
                  to="/services"
                  className="btn btn-outline-success rounded-pill"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>
          </Reveal>

          {/* Right */}
          <Reveal>
            <div className="contact-visual">

              <div className="contact-glow"></div>

              <div className="contact-ring ring-one"></div>
              <div className="contact-ring ring-two"></div>
              <div className="contact-ring ring-three"></div>

              <div className="contact-circle">

                <MessageCircle
                  size={60}
                  className="contact-icon"
                />

                <h3>24 Hours</h3>

                <p>Average Response</p>

              </div>

              <div className="floating-card card-one">
                Free Consultation
              </div>

              <div className="floating-card card-two">
                Expert Team
              </div>

              <div className="floating-card card-three">
                Fast Response
              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}