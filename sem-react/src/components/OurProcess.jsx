import "../style/OurProcess.css";
import Reveal from "./Reveal";
import {
  Search,
  Target,
  PenTool,
  Code2,
  TrendingUp,
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We take the time to understand your business, audience, goals, and challenges to uncover the best opportunities for growth.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Using research and insights, we create a customized digital strategy aligned with your vision and business objectives.",
    icon: Target,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Beautiful, intuitive experiences are crafted with creativity and usability at the center of every interaction.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Develop",
    description:
      "Our developers transform concepts into fast, scalable, secure, and high-performing digital solutions.",
    icon: Code2,
  },
  {
    number: "05",
    title: "Grow",
    description:
      "After launch, we continuously optimize, analyze, and improve your digital presence to maximize long-term success.",
    icon: TrendingUp,
  },
];

export default function OurProcess() {
  return (
    <section className="process-section">
      <div className="container">

        <Reveal>
          <div className="process-header">

            <span className="process-tag">
              OUR PROCESS
            </span>

            <h2>
              From Vision
              <span> To Growth</span>
            </h2>

            <p>
              Every successful partnership follows a thoughtful process.
              From understanding your goals to helping your business grow,
              we focus on delivering meaningful digital experiences that
              create measurable results.
            </p>

          </div>
        </Reveal>

        <div className="process-timeline">

          <div className="timeline-line"></div>

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Reveal key={step.number}>
                <div
                  className={`process-item ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >

                  <div className="process-card">

                    <div className="process-badge">
                      {step.number}
                    </div>

                    <div className="process-icon">
                      <Icon size={34} strokeWidth={2} />
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>

                    <div className="process-footer">

                      <span className="process-read">
                        Next Step
                      </span>

                      <span className="process-arrow">
                        →
                      </span>

                    </div>

                  </div>

                  <div className="timeline-dot">
                    <span></span>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}