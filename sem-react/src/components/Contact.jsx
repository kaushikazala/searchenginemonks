import "./Contact.css"
import { useState } from 'react';
import Reveal from './Reveal.jsx';

const initialForm = { name: '', email: '', phone: '', business: '', message: '' };

const trustPoints = [
  { icon: 'fa-solid fa-phone-volume', text: 'Free strategy call' },
  { icon: 'fa-solid fa-hand-peace', text: 'No-pressure guidance' },
  { icon: 'fa-solid fa-bolt', text: 'Same-week reply' },
];

const contactInfo = [
  { icon: 'fas fa-phone', label: 'Phone', value: '+1 (000) 000-0000', href: 'tel:+10000000000' },
  { icon: 'fas fa-envelope', label: 'Email', value: 'info@searchenginemonks.com', href: 'mailto:info@searchenginemonks.com' },
  { icon: 'fas fa-location-dot', label: 'Location', value: 'Canada 🇨🇦', href: null },
];

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', form);
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="contact-premium">
      {/* Background decoration */}
      <div className="contact-bg-decoration" aria-hidden="true"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="row align-items-start g-5">

          {/* Left Side */}
          <div className="col-lg-5">
            <Reveal as="span" className="section-tag">Contact Us</Reveal>
            <Reveal as="h2" className="section-title text-start mt-3" delay={1}>
              Let's grow your<br />business together
            </Reveal>
            <Reveal as="p" className="contact-lead-text" delay={1}>
              Ready to increase your online presence? Get in touch with our team for
              a free, no-obligation consultation.
            </Reveal>

            {/* Trust pills */}
            <Reveal className="contact-trust-row" delay={2}>
              {trustPoints.map((tp) => (
                <div className="ctr-pill" key={tp.text}>
                  <i className={tp.icon}></i>
                  <span>{tp.text}</span>
                </div>
              ))}
            </Reveal>

            {/* Contact details */}
            <Reveal className="contact-details-list" delay={2}>
              {contactInfo.map((ci) => (
                <div className="cdl-item" key={ci.label}>
                  <div className="cdl-icon-wrap">
                    <i className={ci.icon}></i>
                  </div>
                  <div className="cdl-text">
                    <span className="cdl-label">{ci.label}</span>
                    {ci.href
                      ? <a href={ci.href} className="cdl-value">{ci.value}</a>
                      : <span className="cdl-value">{ci.value}</span>
                    }
                  </div>
                </div>
              ))}
            </Reveal>

            {/* Social icons */}
            <Reveal className="contact-socials" delay={3}>
              <span className="cs-label">Follow us</span>
              <div className="cs-icons">
                <a href="#" aria-label="Facebook" className="cs-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" aria-label="Instagram" className="cs-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" aria-label="LinkedIn" className="cs-icon"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" aria-label="X/Twitter" className="cs-icon"><i className="fab fa-x-twitter"></i></a>
              </div>
            </Reveal>
          </div>

          {/* Right Side — Form */}
          <div className="col-lg-7">
            <Reveal className="contact-form-card" delay={1}>
              <div className="cfc-header">
                <h4>Book Your Free Strategy Call</h4>
                <p>Fill in the form and we'll get back to you within one business day.</p>
              </div>

              {submitted && (
                <div className="cfc-success" role="status">
                  <i className="fa-solid fa-circle-check"></i>
                  <div>
                    <strong>Message received!</strong>
                    <p>We'll be in touch shortly. Usually within 24 hours.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="cfc-form">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="cfc-field">
                      <label htmlFor="cf-name">Your Name *</label>
                      <input
                        id="cf-name"
                        type="text"
                        name="name"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cfc-field">
                      <label htmlFor="cf-email">Email Address *</label>
                      <input
                        id="cf-email"
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cfc-field">
                      <label htmlFor="cf-phone">Phone Number</label>
                      <input
                        id="cf-phone"
                        type="text"
                        name="phone"
                        placeholder="+1 (000) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="cfc-field">
                      <label htmlFor="cf-business">Business Name</label>
                      <input
                        id="cf-business"
                        type="text"
                        name="business"
                        placeholder="Your Business"
                        value={form.business}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="cfc-field">
                      <label htmlFor="cf-message">How can we help?</label>
                      <textarea
                        id="cf-message"
                        name="message"
                        rows="4"
                        placeholder="Tell us about your goals or challenges..."
                        value={form.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary-premium cfc-submit-btn">
                      <i className="fa-solid fa-paper-plane me-2"></i>
                      Book Free Strategy Call
                    </button>
                    <p className="cfc-disclaimer">
                      <i className="fa-solid fa-lock"></i> Your information is 100% secure and never shared.
                    </p>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
