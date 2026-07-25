import "../style/ContactFormSection.css";
import Reveal from "./Reveal";
import { Send } from "lucide-react";

export default function ContactFormSection() {
  return (
    <section className="contact-form-section">

      <div className="container">

        <Reveal>

          <div className="contact-form-header">

            <span className="contact-form-tag">
              START YOUR PROJECT
            </span>

            <h2>
              Tell Us About
              <span> Your Project</span>
            </h2>

            <p>
              Fill out the form below and our team will get back to you
              within 24 hours with the next steps.
            </p>

          </div>

        </Reveal>

        <Reveal>

          <form className="contact-form">

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 (123) 456-7890"
                />
              </div>

              <div className="form-group">
                <label>Company Name</label>
                <input
                  type="text"
                  placeholder="Your Company"
                />
              </div>

              <div className="form-group">
                <label>Service Required</label>

                <select>

                  <option>Select a Service</option>

                  <option>Web Development</option>

                  <option>Website Redesign</option>

                  <option>SEO</option>

                  <option>Brand Identity</option>

                  <option>Digital Marketing</option>

                  <option>AI Solutions</option>

                  <option>Other</option>

                </select>

              </div>

              <div className="form-group">
                <label>Estimated Budget</label>

                <select>

                  <option>Select Budget</option>

                  <option>Under $1,000</option>

                  <option>$1,000 - $5,000</option>

                  <option>$5,000 - $10,000</option>

                  <option>$10,000+</option>

                </select>

              </div>

            </div>

            <div className="form-group full-width">

              <label>Project Details</label>

              <textarea
                rows="6"
                placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
              ></textarea>

            </div>

            <button
              type="submit"
              className="submit-btn"
            >
              <Send size={18} />
              Send Message
            </button>

          </form>

        </Reveal>

      </div>

    </section>
  );
}