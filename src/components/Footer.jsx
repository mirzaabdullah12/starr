import "./Footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">

      <div className="footer__top">
        {/* Brand */}
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-badge">S</div>
            <span>Star <span className="footer__accent">Solution</span></span>
          </div>
          <p className="footer__tagline">
            Building smart digital products for businesses that want to grow.
          </p>
          <div className="footer__socials">
            {["LinkedIn", "Twitter", "GitHub", "Instagram"].map((s) => (
              <a key={s} href="#" className="footer__social">{s[0]}</a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="footer__col">
          <h4>Services</h4>
          {["Web Development", "POS Systems", "Shopify Stores", "Mobile Apps", "Custom Software"].map((s) => (
            <a key={s} href="#services" className="footer__link">{s}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          {["About Us", "Portfolio", "Contact", "Privacy Policy"].map((s) => (
            <a key={s} href="#" className="footer__link">{s}</a>
          ))}
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <span className="footer__link">hello@starsolution.com</span>
          <span className="footer__link">+92 300 0000000</span>
          <span className="footer__link">Pakistan</span>
        </div>
      </div>

      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Star Solution. All rights reserved.</span>
        <span>Made with ❤️ in Pakistan</span>
      </div>

    </div>
  </footer>
);

export default Footer;
