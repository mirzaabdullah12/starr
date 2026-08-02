import "./About.css";
import bgImage from "../assets/oip.jpg";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "3+", label: "Years Experience" },
  { value: "6", label: "Core Services" },
];

const About = () => (
  <section
    className="about"
    id="about"
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center center",
    }}
  >
    {/* overlay */}
    <div className="about__overlay" />

    <div className="about__container">

      {/* Left visual — stats */}
      <div className="about__visual">
        <div className="about__stats-grid">
          {stats.map((s) => (
            <div className="about__stat" key={s.label}>
              <span className="about__stat-val">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right text */}
      <div className="about__text">
        <span className="section__badge">Who We Are</span>
        <h2 className="section__title">
          Turning Vision Into <span>Reality</span>
        </h2>
        <p className="about__desc">
          Star Solution is a software house passionate about building smart digital
          products. From startups to established businesses, we help brands grow
          with technology that actually works.
        </p>
        <p className="about__desc">
          Our team specialises in web development, POS systems, Shopify stores,
          and custom software — combining clean code with great design to deliver
          products your users will love.
        </p>

        <ul className="about__list">
          {["Client-first approach", "Agile & transparent process", "On-time delivery", "Post-launch support"].map((item) => (
            <li key={item} className="about__list-item">
              <span className="about__check">✓</span>
              {item}
            </li>
          ))}
        </ul>

        <a href="#contact" className="about__cta">
          Work With Us
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

    </div>
  </section>
);

export default About;
