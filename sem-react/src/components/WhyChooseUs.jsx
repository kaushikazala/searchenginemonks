import "../style/WhyChooseUs.css";
import Reveal from "./Reveal";
import {
  Search,
  Palette,
  Zap,
  TrendingUp,
  Handshake,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Transparent Process",
    description:
      "From discovery to delivery, every phase stays visible, collaborative, and aligned with your business goals.",
  },
  {
    icon: Palette,
    title: "Creative Thinking",
    description:
      "We blend design taste with strategic thinking to craft digital experiences that feel distinctive and memorable.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Lean workflows, clear priorities, and focused delivery help us move quickly without compromising quality.",
  },
  {
    icon: TrendingUp,
    title: "Results Driven",
    description:
      "Each decision is shaped by performance, insight, and measurable outcomes that support sustainable growth.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We build relationships that continue after launch through trust, communication, and reliable ongoing support.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Our digital solutions are designed to scale across audiences, markets, and evolving customer expectations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section" aria-labelledby="why-choose-us-title">
      <div className="container">
        <div className="why-shell">
          <Reveal>
            <div className="why-header">
              <span className="why-tag">WHY CHOOSE US</span>

              <h2 id="why-choose-us-title">
                Why Brands Trust
                <span> Search Engine Monks</span>
              </h2>

              <p className="why-lead">
                We combine strategy, creativity, and technology to build digital
                experiences that feel premium, perform consistently, and create
                measurable business value.
              </p>

              <div className="why-summary" aria-label="Agency strengths">
                <div className="why-summary-item">
                  <strong>Strategy first</strong>
                  <span>Clear goals before execution</span>
                </div>

                <div className="why-summary-item">
                  <strong>Fast delivery</strong>
                  <span>Efficient process with quality control</span>
                </div>

                <div className="why-summary-item">
                  <strong>Growth focused</strong>
                  <span>Design and development with business impact</span>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="why-grid">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal
                  key={item.title}
                  className={`why-card reveal-delay-${(index % 4) + 1}`}
                >
                  <div className="why-card-top">
                    <div className="why-icon">
                      <Icon size={30} strokeWidth={2} />
                    </div>

                    <span className="why-index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <div className="why-card-footer">
                    <span className="why-line" aria-hidden="true" />
                    <span className="why-arrow" aria-hidden="true">
                      <ArrowUpRight size={18} strokeWidth={2.2} />
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
