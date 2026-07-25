import "../style/ServiceSection.css";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServiceSection({
  id,
  badge,
  title,
  description,
  features,
  button,
  stats,
  reverse,
   illustration,
})
 {
 const Illustration = illustration || null;
  return (
    <section
      id={id}
      className={`service-section ${reverse ? "reverse" : ""}`}
    >
      <div className="container service-wrapper">

        {/* Left / Right Content */}
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
  {Illustration && <Illustration />}

  {stats.map((item, index) => (
    <div className={`floating-stat stat${index + 1}`} key={index}>
      <h4>{item.value}</h4>
      <span>{item.label}</span>
    </div>
  ))}
</div>  

      </div>
    </section>
  );
}