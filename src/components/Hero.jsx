import "./Hero.css";
import bgImage from "../assets/tech.avif";
import cardImage from "../assets/asth.jpg";

const services = ["Web Development", "POS Systems", "Shopify Stores", "Custom Software"];

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero__overlay" />

      <div className="hero__content">

        {/* ── Left: Text ── */}
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            Software House
          </div>

          <h1 className="hero__title">
            We Build <br />
            <span className="hero__title-gradient">Digital Solutions</span><br />
            That <span className="hero__title-gradient">Matter</span>
          </h1>

          <p className="hero__sub">
            From web apps to POS systems and Shopify stores — we turn ideas
            into powerful software products.
          </p>

          <div className="hero__tags">
            {services.map((s, i) => (
              <span
                key={s}
                className="hero__tag"
                style={{ animationDelay: `${0.9 + i * 0.12}s` }}
              >
                {s}
              </span>
            ))}
          </div>

          <div className="hero__actions">
            <a href="#services" className="hero__btn hero__btn--primary">
              Our Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="hero__btn hero__btn--outline">
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* ── Right: Floating Card ── */}
        <div className="hero__right">
          <div className="hero__card-wrap">
            {/* glow rings */}
            <div className="hero__ring hero__ring--1" />
            <div className="hero__ring hero__ring--2" />

            <div className="hero__card">
              <img src={cardImage} alt="Star Solution" className="hero__card-img" />
              <div className="hero__card-badge">
                <span className="hero__card-dot" />
                Star Solution
              </div>
            </div>

            {/* floating chips */}
            <div className="hero__chip hero__chip--1">🚀 Web Dev</div>
            <div className="hero__chip hero__chip--2">🛒 Shopify</div>
            <div className="hero__chip hero__chip--3">🖥️ POS</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
