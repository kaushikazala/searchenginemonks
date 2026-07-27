import "../style/StorySection.css";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Results-driven digital strategies tailored to every client.",
  "Transparent communication from planning to delivery.",
  "Creative design backed by data and performance.",
  "Long-term partnerships focused on sustainable growth.",
];

export default function StorySection() {
  return (
    <section className="story-section">

      <div className="container">

        <div className="story-grid">

          {/* Left */}

          <div className="story-visual">

            <div className="story-image-card">

              <div className="story-glow"></div>

              <img
                src="./src/assests/monk-1.jpeg"
                alt="Search Engine Monks"
              />

            </div>

            {/* <div className="experience-card">
              <h2>10+</h2>
              <span>Years of Combined Experience</span>
            </div> */}

          </div>

          {/* Right */}

          <div className="story-content">

            <span className="section-tag">
              OUR STORY
            </span>

            <h2>
              Helping Businesses Build
              Meaningful Digital Growth.
            </h2>

            <p>
              Search Engine Monks was created with one simple mission:
              help businesses grow online through strategy, creativity,
              and measurable results.

              We believe every business deserves a digital partner that
              combines beautiful design, technical excellence, and
              marketing expertise under one roof.
            </p>

            <div className="story-list">

              {points.map((item, index) => (

                <div className="story-item" key={index}>
                  <CheckCircle2 size={22} />
                  <span>{item}</span>
                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}