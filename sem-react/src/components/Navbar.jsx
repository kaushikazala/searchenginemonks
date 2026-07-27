import "../style/Navbar.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assests/logo.svg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  const navLinkClass = ({ isActive }) =>
    `sem-nav-link${isActive ? " active" : ""}`;

  return (
    <nav className={`sem-navbar${isScrolled ? " is-scrolled" : ""}`}>
      <div className="sem-nav-inner">

        {/* Logo */}

        <Link
          to="/"
          className="sem-logo-link"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Search Engine Monks Logo"
            className="sem-logo-img"
          />
        </Link>

        {/* Desktop Navigation */}

        <ul className="sem-nav-links">

          <li>
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolio"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/faq"
              className={navLinkClass}
              onClick={closeMenu}
            >
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>

          {/* Primary CTA */}

          <li>
            <Link
              to="/website-audit"
              className="sem-cta-btn"
              onClick={closeMenu}
            >
              Free Website Audit
            </Link>
          </li>

        </ul>

        {/* Mobile Toggle */}

        <button
          className="sem-hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Drawer */}

      <div
        className={`sem-mobile-drawer ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="sem-mobile-links">

          <li>
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/services"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/portfolio"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Portfolio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/faq"
              className={navLinkClass}
              onClick={closeMenu}
            >
              FAQ
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </li>

          <li>
            <Link
              to="/website-audit"
              className="sem-cta-btn block text-center mt-2"
              onClick={closeMenu}
            >
              Get Free Audit
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}