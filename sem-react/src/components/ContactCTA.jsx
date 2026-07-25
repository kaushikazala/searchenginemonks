import "../style/ContactCTA.css";
import Reveal from "./Reveal";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="contact-cta">
      <div className="container">

        <Reveal>
          <div className="contact-cta-box">

            <div className="contact-blob blob-one"></div>
            <div className="contact-blob blob-two"></div>

            <span className="contact-cta-tag">
              READY TO START?
            </span>

            <h2>
              Let's Build Something
              <span> Extraordinary</span>
            </h2>

            <p>
              Every successful digital journey starts with a conversation.
              Share your vision with us, and together we'll create a solution
              that helps your business grow, stand out, and succeed online.
            </p>

            <div className="contact-cta-buttons">

              <a
                href="/#contact"
                className="btn btn-primary rounded-pill"
              >
                <MessageCircle size={18} />
                Book Free Consultation
              </a>

              <Link
                to="/portfolio"
                className="btn btn-outline-light rounded-pill"
              >
                View Portfolio
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}