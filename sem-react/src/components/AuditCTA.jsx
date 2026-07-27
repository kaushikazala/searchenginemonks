import "../style/AuditCTA.css";
import { ArrowRight } from "lucide-react";

export default function AuditCTA() {
  return (
    <section className="audit-cta">
      <div className="container">

        <div className="audit-cta-wrapper">

          <span className="audit-cta-badge">
            Ready to Improve?
          </span>

          <h2>
            Let's Turn These Insights Into Results
          </h2>

          <p>
            Our team can help optimize your website for better
            performance, higher search rankings, and an improved
            user experience.
          </p>

          <div className="audit-cta-actions">

            <button className="btn-primary">
              Book Free Consultation
              <ArrowRight size={18} />
            </button>

            <button className="btn-secondary">
              Contact Us
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}