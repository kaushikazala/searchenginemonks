import "../style/WhyChooseUs.css";
import Reveal from "./Reveal";
import {
  Search,
  Palette,
  Zap,
  TrendingUp,
  Handshake,
  Globe,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Transparent Process",
    description:
      "From discovery to delivery, we keep every step clear, collaborative, and aligned with your business goals.",
  },
  {
    icon: Palette,
    title: "Creative Thinking",
    description:
      "We combine creativity with strategy to craft memorable digital experiences that make your brand stand out.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Agile workflows and efficient development allow us to deliver high-quality solutions without unnecessary delays.",
  },
  {
    icon: TrendingUp,
    title: "Results Driven",
    description:
      "Every decision is guided by data, performance, and measurable outcomes that support long-term business growth.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    description:
      "We believe successful projects grow into lasting partnerships built on trust, communication, and continuous support.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Our solutions are designed to help businesses connect with audiences across markets through scalable digital experiences.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-section">
      <div className="container">

        <Reveal>
          <div className="why-header">

            <span className="why-tag">
              WHY CHOOSE US
            </span>

            <h2>
              Why Brands Trust
              <span> Search Engine Monks</span>
            </h2>

            <p>
              We combine strategy, creativity, and technology to build
              digital experiences that inspire confidence, create value,
              and deliver measurable results.
            </p>

          </div>
        </Reveal>

       <div className="why-grid">
  {features.map((item, index) => {
    const Icon = item.icon;

    return (
      <Reveal
        key={index}
        className="why-card-wrapper"
      >
        <div className="why-card">

          <div className="why-icon">
            <Icon size={34} strokeWidth={2} />
          </div>

          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <span className="why-arrow">
            →
          </span>

        </div>
      </Reveal>
    );
  })}
</div>

      </div>
    </section>
  );
}