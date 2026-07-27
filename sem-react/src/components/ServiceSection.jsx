import "../style/ServiceSection.css";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServiceSection({
  id,
  badge,
  title,
  description,
  features,
  button,
  reverse,
  illustration,
}) {
  return (
    <section
      id={id}
      className={`service-section ${reverse ? "reverse" : ""}`}
    >
      <div className="container service-wrapper">

        {/* Content */}
        <div className="service-content">
          <span className="service-badge">{badge}</span>

          <h2>{title}</h2>

          <p>{description}</p>

          <div className="service-features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <CheckCircle2 size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="service-btn">
            {button}
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Visual */}
        <div className="service-visual">
          <div className="visual-card">
            <img
              src={illustration}
              alt={title}
              className="service-illustration"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}