import "../style/FAQCTA.css";
import Reveal from "./Reveal";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function FAQCTA() {
  return (
    <section className="faq-cta">
      <div className="container">

        <Reveal>
          <div className="faq-cta-box">

            <div className="faq-blob blob-one"></div>
            <div className="faq-blob blob-two"></div>

            <span className="faq-cta-tag">
              STILL HAVE QUESTIONS?
            </span>

            <h2>
              We're Here
              <span> To Help</span>
            </h2>

            <p>
              Can't find the answer you're looking for? Our team is always
              ready to answer your questions and guide you toward the best
              solution for your business.
            </p>

            <div className="faq-cta-buttons">

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