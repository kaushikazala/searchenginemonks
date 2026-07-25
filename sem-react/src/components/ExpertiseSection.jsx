import "../style/ExpertiseSection.css";
import Reveal from "./Reveal";
import {
  Code2,
  Palette,
  Search,
  TrendingUp,
  Brain,
  Smartphone,
} from "lucide-react";

const expertise = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "High-performance, responsive websites and web applications built with modern technologies.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Clean, intuitive interfaces designed to improve engagement and user experience.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Search-first strategies that improve visibility and attract qualified organic traffic.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven campaigns focused on growth, lead generation, and measurable results.",
  },
  {
    icon: Brain,
    title: "AI Solutions",
    description:
      "Modern AI-powered workflows and automation to improve efficiency and customer experiences.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experience",
    description:
      "Every project is optimized for desktop, tablet, and mobile devices.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="expertise-section">
      <div className="container">

        <Reveal>
          <div className="expertise-header">

            <span className="expertise-tag">
              OUR EXPERTISE
            </span>

            <h2>
              What We Do
              <span> Best</span>
            </h2>

            <p>
              Combining creativity, technology, and strategy to build
              digital experiences that help businesses grow.
            </p>

          </div>
        </Reveal>

        <div className="expertise-grid">

          {expertise.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={index}>
                <div className="expertise-card">

                  <div className="expertise-icon">
                    <Icon size={34} strokeWidth={2} />
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                </div>
              </Reveal>
            );
          })}

        </div>

      </div>
    </section>
  );
}