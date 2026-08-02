import { useNavigate } from "react-router-dom";
import "./Portfolio.css";
import { projects } from "../data/projects";

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__container">

        <div className="portfolio__header">
          <span className="section__badge">Our Work</span>
          <h2 className="section__title">Projects We're <span>Proud Of</span></h2>
          <p className="section__sub">Click any project to see full details.</p>
        </div>

        <div className="portfolio__grid">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`pcard ${p.size === "large" ? "pcard--large" : ""}`}
              style={{ "--accent": p.color, animationDelay: `${i * 0.09}s` }}
              onClick={() => navigate(`/projects/${p.slug}`)}
            >
              <div className="pcard__img-wrap">
                <img src={p.image} alt={p.title} className="pcard__img" />
                <div className="pcard__img-fade" />
              </div>

              <div className="pcard__glow" />

              <div className="pcard__head">
                <div className="pcard__icon">{p.emoji}</div>
                <span className="pcard__cat">{p.category}</span>
              </div>

              <div className="pcard__body">
                <h3 className="pcard__title">{p.title}</h3>
                <p className="pcard__desc">{p.desc}</p>
              </div>

              <div className="pcard__foot">
                <div className="pcard__tech">
                  {p.tech.slice(0, 3).map((t) => (
                    <span key={t} className="pcard__pill">{t}</span>
                  ))}
                </div>
                <span className="pcard__arrow">↗</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
