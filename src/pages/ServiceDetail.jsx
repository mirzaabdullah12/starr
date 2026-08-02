import { useParams, Link, useNavigate } from "react-router-dom";
import { services } from "../data/services";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./DetailPage.css";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const svc = services.find((s) => s.slug === slug);

  if (!svc) return (
    <div className="dp__notfound">
      <h2>Service not found</h2>
      <Link to="/">← Back Home</Link>
    </div>
  );

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="dp">

        {/* ── Hero ── */}
        <div className="dp__hero" style={{ backgroundImage: `url(${svc.image})` }}>
          <div className="dp__hero-overlay" />
          <div className="dp__hero-content">
            <button className="dp__back" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <div className="dp__hero-badge" style={{ color: svc.color, borderColor: `${svc.color}44`, background: `${svc.color}18` }}>
              {svc.icon} &nbsp; Service
            </div>
            <h1 className="dp__hero-title">{svc.title}</h1>
            <p className="dp__hero-sub">{svc.desc}</p>
            <div className="dp__hero-tags">
              {svc.tags.map((t) => (
                <span key={t} className="dp__tag" style={{ color: svc.color, background: `${svc.color}14`, borderColor: `${svc.color}28` }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="dp__body">

          {/* ── Overview ── */}
          <section className="dp__section">
            <div className="dp__section-label">Overview</div>
            <p className="dp__text">{svc.longDesc}</p>
          </section>

          {/* ── Features ── */}
          <section className="dp__section">
            <div className="dp__section-label">Key Features</div>
            <div className="dp__features">
              {svc.features.map((f, i) => (
                <div key={f} className="dp__feature" style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="dp__feature-num" style={{ background: `linear-gradient(135deg, ${svc.color}, #2563eb)` }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Process ── */}
          <section className="dp__section">
            <div className="dp__section-label">Our Process</div>
            <div className="dp__process">
              {svc.process.map((p, i) => (
                <div key={p.step} className="dp__step" style={{ "--accent": svc.color }}>
                  <div className="dp__step-num">{p.step}</div>
                  <div className="dp__step-line" />
                  <div className="dp__step-body">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="dp__cta-box" style={{ borderColor: `${svc.color}30` }}>
            <div className="dp__cta-glow" style={{ background: `radial-gradient(ellipse at center, ${svc.color}18, transparent 70%)` }} />
            <h3>Ready to get started with {svc.title}?</h3>
            <p>Tell us about your project and we'll respond within 24 hours.</p>
            <Link to="/#contact" className="dp__cta-btn" style={{ background: `linear-gradient(135deg, ${svc.color}, #2563eb)` }}>
              Get a Free Quote →
            </Link>
          </section>

          {/* ── Other services ── */}
          <section className="dp__section">
            <div className="dp__section-label">Other Services</div>
            <div className="dp__others">
              {others.map((o) => (
                <Link key={o.slug} to={`/services/${o.slug}`} className="dp__other-card" style={{ "--accent": o.color }}>
                  <span className="dp__other-icon">{o.icon}</span>
                  <div>
                    <h4>{o.title}</h4>
                    <p>{o.desc.slice(0, 60)}…</p>
                  </div>
                  <span className="dp__other-arrow">→</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
