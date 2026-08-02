import { useNavigate } from "react-router-dom";
import "./Services.css";
import { services } from "../data/services";

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <span className="section__badge">What We Do</span>
          <h2 className="section__title">Services Built for <span>Growth</span></h2>
          <p className="section__sub">Click any service to learn more.</p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <div
              className="svc-card"
              key={s.title}
              style={{ animationDelay: `${i * 0.1}s`, cursor: "pointer" }}
              onClick={() => navigate(`/services/${s.slug}`)}
            >
              <div className="svc-card__icon">{s.icon}</div>
              <h3 className="svc-card__title">{s.title}</h3>
              <p className="svc-card__desc">{s.desc}</p>
              <div className="svc-card__tags">
                {s.tags.slice(0, 3).map((t) => (
                  <span key={t} className="svc-card__tag">{t}</span>
                ))}
              </div>
              <span className="svc-card__more">Learn more →</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
