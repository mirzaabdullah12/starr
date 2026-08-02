import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./DetailPage.css";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const proj = projects.find((p) => p.slug === slug);

  if (!proj) return (
    <div className="dp__notfound">
      <h2>Project not found</h2>
      <Link to="/">← Back Home</Link>
    </div>
  );

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="dp">

        {/* ── Hero ── */}
        <div className="dp__hero" style={{ backgroundImage: `url(${proj.image})` }}>
          <div className="dp__hero-overlay" />
          <div className="dp__hero-content">
            <button className="dp__back" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <div className="dp__hero-badge" style={{ color: proj.color, borderColor: `${proj.color}44`, background: `${proj.color}18` }}>
              {proj.emoji} &nbsp; {proj.category}
            </div>
            <h1 className="dp__hero-title">{proj.title}</h1>
            <p className="dp__hero-sub">{proj.desc}</p>
            <div className="dp__hero-tags">
              {proj.tech.map((t) => (
                <span key={t} className="dp__tag" style={{ color: proj.color, background: `${proj.color}14`, borderColor: `${proj.color}28` }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="dp__body">

          {/* ── Overview ── */}
          <section className="dp__section">
            <div className="dp__section-label">About This Project</div>
            <p className="dp__text">{proj.longDesc}</p>
          </section>

          {/* ── Challenge / Solution / Result ── */}
          <section className="dp__section">
            <div className="dp__section-label">Case Study</div>
            <div className="dp__case">
              {[
                { label: "The Challenge", icon: "⚡", text: proj.challenge, color: "#f87171" },
                { label: "Our Solution", icon: "💡", text: proj.solution, color: proj.color },
                { label: "The Result", icon: "🚀", text: proj.result, color: "#34d399" },
              ].map((c) => (
                <div key={c.label} className="dp__case-card" style={{ "--accent": c.color }}>
                  <div className="dp__case-icon">{c.icon}</div>
                  <h4 style={{ color: c.color }}>{c.label}</h4>
                  <p>{c.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Features ── */}
          <section className="dp__section">
            <div className="dp__section-label">Features Delivered</div>
            <div className="dp__features">
              {proj.features.map((f, i) => (
                <div key={f} className="dp__feature" style={{ animationDelay: `${i * 0.08}s` }}>
                  <span className="dp__feature-num" style={{ background: `linear-gradient(135deg, ${proj.color}, #2563eb)` }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="dp__cta-box" style={{ borderColor: `${proj.color}30` }}>
            <div className="dp__cta-glow" style={{ background: `radial-gradient(ellipse at center, ${proj.color}18, transparent 70%)` }} />
            <h3>Want something similar?</h3>
            <p>Let's discuss your project and build something great together.</p>
            <Link to="/#contact" className="dp__cta-btn" style={{ background: `linear-gradient(135deg, ${proj.color}, #2563eb)` }}>
              Start Your Project →
            </Link>
          </section>

          {/* ── Other projects ── */}
          <section className="dp__section">
            <div className="dp__section-label">More Projects</div>
            <div className="dp__others">
              {others.map((o) => (
                <Link key={o.slug} to={`/projects/${o.slug}`} className="dp__other-card" style={{ "--accent": o.color }}>
                  <span className="dp__other-icon">{o.emoji}</span>
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

export default ProjectDetail;
