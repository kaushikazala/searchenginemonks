import "../style/AboutHero.css";
import { ArrowRight, Users, Award, Briefcase, Star } from "lucide-react";
import monk from "../assests/Monk-2.svg";

export default function AboutHero() {
  return (
    <section className="about-hero">

      <div className="hero-bg-circle hero-bg-1"></div>
      <div className="hero-bg-circle hero-bg-2"></div>

      <div className="container">

        <div className="about-hero-grid">

          {/* Left */}

          <div className="about-content">

            <span className="about-tag">
              ABOUT SEARCH ENGINE MONKS
            </span>

            <h1>
              Helping Businesses Grow
              <br />
              Through Strategy,
              <br />
              Creativity &
              <span> Technology.</span>
            </h1>

            <p>
              We are a team of designers, developers, SEO specialists,
              marketers and AI experts helping Canadian businesses build
              stronger brands, generate quality leads and create measurable
              digital growth.
            </p>

            <div className="about-buttons">

              <button className="btn-primary-about">
                Meet Our Team
                <ArrowRight size={18}/>
              </button>

              <button className="btn-secondary-about">
                Book Free Consultation
              </button>

            </div>

          </div>

          {/* Right */}

          <div className="about-visual">

            <div className="hero-circle"></div>

            <img
              src={monk}
              alt="Monk"
              className="hero-monk"
            />

            <div className="floating-card card1">
              <Award size={22}/>
              <div>
                <h4>Google Partner</h4>
                <span>Certified Experts</span>
              </div>
            </div>

            <div className="floating-card card2">
              <Users size={22}/>
              <div>
                <h4>500+</h4>
                <span>Projects</span>
              </div>
            </div>

            <div className="floating-card card3">
              <Briefcase size={22}/>
              <div>
                <h4>98%</h4>
                <span>Retention</span>
              </div>
            </div>

            <div className="floating-card card4">
              <Star size={22}/>
              <div>
                <h4>5.0 Rating</h4>
                <span>Happy Clients</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}