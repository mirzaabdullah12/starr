import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner">

        {/* Logo */}
        <a href="#home" className="nav__logo">
          <div className="nav__logo-badge">S</div>
          <span className="nav__logo-name">
            Star<span>Solution</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="nav__menu">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="nav__item">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="nav__btn">
          <span>Get Started</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        {/* Hamburger */}
        <button
          className={`nav__toggle ${menuOpen ? "nav__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`nav__drawer ${menuOpen ? "nav__drawer--open" : ""}`}>
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="nav__drawer-item"
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a href="#contact" className="nav__btn nav__btn--full" onClick={() => setMenuOpen(false)}>
          <span>Get Started</span>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
