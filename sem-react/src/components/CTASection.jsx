import "../style/CTASection.css";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="cta-section">

      {/* Background Glow */}
      <div className="cta-blob blob1"></div>
      <div className="cta-blob blob2"></div>

      <div className="container">

        <div className="cta-card">

          <span className="cta-tag">
            LET'S WORK TOGETHER
          </span>

          <h2>
            Ready to Grow Your Business Online?
          </h2>

          <p>
            From SEO and web design to AI automation and digital marketing,
            we create strategies that help businesses attract more customers
            and achieve measurable growth.
          </p>

          <div className="cta-buttons">

            <button className="cta-primary">
              Book Free Consultation
              <ArrowRight size={18} />
            </button>

            <button className="cta-secondary">
              Get Free SEO Audit
            </button>

          </div>

          <div className="cta-stats">

            <div>
              <h3>500+</h3>
              <span>Projects Delivered</span>
            </div>

            <div>
              <h3>95%</h3>
              <span>Client Retention</span>
            </div>

            <div>
              <h3>10+</h3>
              <span>Years Experience</span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}