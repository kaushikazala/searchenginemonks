import { useEffect, useState } from 'react';
import logo from "../assests/logo.svg"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top${isScrolled ? ' is-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center gap-2" href="#" onClick={closeMenu}>
          <img src={logo} alt="Search Engine Monks Logo" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse${menuOpen ? ' show' : ''}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {links.map((link) => (
              <li className="nav-item" key={link.label}>
                <a className="nav-link px-3" href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <a href="#contact" className="btn btn-primary rounded-pill px-4" onClick={closeMenu}>
                Book Free Consultation
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
