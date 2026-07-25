import "../style/FAQHero.css";
import Reveal from "./Reveal";
import { CircleHelp, ArrowRight } from "lucide-react";

export default function FAQHero() {
  return (
    <section className="faq-hero">
      <div className="container">

        <div className="faq-hero-grid">

          {/* Left Content */}
          <Reveal>
            <div className="faq-content">

              <span className="faq-tag">
                FREQUENTLY ASKED QUESTIONS
              </span>

              <h1>
                Everything You Need
                <span> To Know</span>
              </h1>

              <p>
                Find answers to the most common questions about our services,
                workflow, pricing, timelines, and ongoing support. If you can't
                find what you're looking for, our team is always here to help.
              </p>

              <div className="faq-buttons">

                <a
                  href="#faq-accordion"
                  className="btn btn-primary rounded-pill"
                >
                  <CircleHelp size={18} />
                  Browse FAQs
                </a>

                <a
                  href="/#contact"
                  className="btn btn-outline-success rounded-pill"
                >
                  Contact Us
                  <ArrowRight size={18} />
                </a>

              </div>

            </div>
          </Reveal>

          {/* Right Side */}
          <Reveal>
            <div className="faq-visual">

              <div className="faq-glow"></div>

              <div className="faq-ring ring-one"></div>
              <div className="faq-ring ring-two"></div>
              <div className="faq-ring ring-three"></div>

              <div className="faq-circle">

                <CircleHelp
                  size={60}
                  className="faq-main-icon"
                />

                <h3>24/7</h3>

                <p>Support & Guidance</p>

              </div>

              <div className="faq-card card-one">
                Fast Responses
              </div>

              <div className="faq-card card-two">
                Expert Guidance
              </div>

              <div className="faq-card card-three">
                Trusted Support
              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}