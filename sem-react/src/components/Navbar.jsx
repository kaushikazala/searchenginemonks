import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assests/logo.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top${
        isScrolled ? " is-scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
          onClick={closeMenu}
        >
          <img src={logo} alt="Search Engine Monks Logo" />
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse${
            menuOpen ? " show" : ""
          }`}
        >
          <ul className="navbar-nav ms-auto align-items-lg-center">

            {/* Home */}
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link px-3"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>

            {/* About */}
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link px-3"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>

            {/* Services */}
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link px-3"
                onClick={closeMenu}
              >
                Services
              </NavLink>
            </li>

            {/* Portfolio */}
            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link px-3"
                onClick={closeMenu}
              >
                Portfolio
              </NavLink>
            </li>

            {/* FAQ */}
            <li className="nav-item">
              <NavLink
                to="/faq"
                className="nav-link px-3"
                onClick={closeMenu}
              >
                FAQ
              </NavLink>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link px-3"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>

            {/* CTA */}
            <li className="nav-item ms-lg-3">
              <Link
                to="/contact"
                className="btn btn-primary rounded-pill px-4"
                onClick={closeMenu}
              >
                Book Free Consultation
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}