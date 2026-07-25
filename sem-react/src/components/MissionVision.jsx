import "../style/MissionVision.css";
import { Target, Eye } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="mission-section">

      <div className="container">

        <div className="section-heading">

          <span className="section-tag">
            OUR PURPOSE
          </span>

          <h2>
            Driven by Purpose.
            <br />
            Focused on Results.
          </h2>

          <p>
            Everything we build is guided by a clear mission and a long-term
            vision to help businesses succeed in an increasingly digital world.
          </p>

        </div>

        <div className="mission-grid">

          {/* Mission */}

          <div className="mission-card">

            <div className="icon-wrap">
              <Target size={42}/>
            </div>

            <h3>Our Mission</h3>

            <p>
              To empower businesses through innovative digital marketing,
              premium web experiences, ethical SEO strategies, and AI-powered
              solutions that create measurable business growth.
            </p>

          </div>

          {/* Vision */}

          <div className="mission-card">

            <div className="icon-wrap gold">
              <Eye size={42}/>
            </div>

            <h3>Our Vision</h3>

            <p>
              To become one of Canada's most trusted digital partners by
              combining creativity, technology, and measurable performance
              into every project we deliver.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}