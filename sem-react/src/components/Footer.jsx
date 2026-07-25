import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/#portfolio" },
  { label: "FAQ", to: "/#faq" },
  { label: "Contact", to: "/#contact" },
];

const serviceLinks = [
  { label: "Website Design", to: "/services#web-design" },
  { label: "SEO Services", to: "/services#seo" },
  { label: "Google Ads", to: "/services#marketing" },
  { label: "Meta Ads", to: "/services#marketing" },
  { label: "Social Media", to: "/services#marketing" },
  { label: "AI Marketing", to: "/services#ai" },
];

const socials = [
  { icon: "fab fa-facebook-f", label: "Facebook", href: "#" },
  { icon: "fab fa-instagram", label: "Instagram", href: "#" },
  { icon: "fab fa-linkedin-in", label: "LinkedIn", href: "#" },
  { icon: "fab fa-x-twitter", label: "X (Twitter)", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-premium">
      {/* Top Wave */}
      <div className="footer-wave" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#F8F5EF"
          />
        </svg>
      </div>

      <div className="footer-inner">
        <div className="container">
          <div className="row gy-5">

            {/* Brand */}
            <div className="col-lg-4 col-md-12">
              <div className="footer-brand">
                <h3 className="footer-logo">Search Engine Monks</h3>

                <p className="footer-tagline">
                  Helping Canadian businesses grow online with ethical SEO,
                  beautiful websites, and data-driven marketing.
                </p>

                <div className="footer-socials">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="footer-social-icon"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-6">
              <h5 className="footer-col-title">Quick Links</h5>

              <ul className="footer-links-premium">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>
                      <i className="fa-solid fa-chevron-right"></i>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-6">
              <h5 className="footer-col-title">Services</h5>

              <ul className="footer-links-premium">
                {serviceLinks.map((service) => (
                  <li key={service.label}>
                    <Link to={service.to}>
                      <i className="fa-solid fa-chevron-right"></i>
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-col-title">Get In Touch</h5>

              <div className="footer-contact-mini">
                <div className="fcm-item">
                  <i className="fas fa-envelope"></i>

                  <a href="mailto:info@searchenginemonks.com">
                    info@searchenginemonks.com
                  </a>
                </div>

                <div className="fcm-item">
                  <i className="fas fa-phone"></i>

                  <a href="tel:+10000000000">
                    +1 (000) 000-0000
                  </a>
                </div>

                <div className="fcm-item">
                  <i className="fas fa-location-dot"></i>

                  <span>Canada 🇨🇦</span>
                </div>
              </div>

              <Link to="/#contact" className="footer-cta-btn">
                Book Free Call
                <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>

          </div>

          {/* Bottom */}
          <div className="footer-bottom-bar">
            <p>© {year} Search Engine Monks. All Rights Reserved.</p>

            <div className="footer-bottom-links">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}