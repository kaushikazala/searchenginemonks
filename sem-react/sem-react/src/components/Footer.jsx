const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Website Design', 'SEO Services', 'Google Ads',
  'Meta Ads', 'Social Media', 'AI Marketing',
];

const socials = [
  { icon: 'fab fa-facebook-f', label: 'Facebook', href: '#' },
  { icon: 'fab fa-instagram', label: 'Instagram', href: '#' },
  { icon: 'fab fa-linkedin-in', label: 'LinkedIn', href: '#' },
  { icon: 'fab fa-x-twitter', label: 'X (Twitter)', href: '#' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer-premium">
      {/* Top wave */}
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#F8F5EF" />
        </svg>
      </div>

      <div className="footer-inner">
        <div className="container">
          <div className="row gy-5">

            {/* Brand column */}
            <div className="col-lg-4 col-md-12">
              <div className="footer-brand">
                <h3 className="footer-logo">Search Engine Monks</h3>
                <p className="footer-tagline">
                  Helping Canadian businesses grow online with ethical SEO, beautiful
                  websites, and data-driven marketing.
                </p>
                <div className="footer-socials">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="footer-social-icon"
                    >
                      <i className={s.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-6">
              <h5 className="footer-col-title">Quick Links</h5>
              <ul className="footer-links-premium">
                {quickLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href}><i className="fa-solid fa-chevron-right"></i>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="col-lg-3 col-6">
              <h5 className="footer-col-title">Services</h5>
              <ul className="footer-links-premium">
                {serviceLinks.map((s) => (
                  <li key={s}>
                    <a href="#services"><i className="fa-solid fa-chevron-right"></i>{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Mini */}
            <div className="col-lg-3 col-md-6">
              <h5 className="footer-col-title">Get In Touch</h5>
              <div className="footer-contact-mini">
                <div className="fcm-item">
                  <i className="fas fa-envelope"></i>
                  <a href="mailto:info@searchenginemonks.com">info@searchenginemonks.com</a>
                </div>
                <div className="fcm-item">
                  <i className="fas fa-phone"></i>
                  <a href="tel:+10000000000">+1 (000) 000-0000</a>
                </div>
                <div className="fcm-item">
                  <i className="fas fa-location-dot"></i>
                  <span>Canada 🇨🇦</span>
                </div>
              </div>

              <a href="#contact" className="footer-cta-btn">
                Book Free Call <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="footer-bottom-bar">
            <p>© {year} Search Engine Monks. All Rights Reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
