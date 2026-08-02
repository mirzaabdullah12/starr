import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ item, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="modal__backdrop" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        {/* close */}
        <button className="modal__close" onClick={onClose} aria-label="Close">✕</button>

        {/* image */}
        {item.image && (
          <div className="modal__img-wrap">
            <img src={item.image} alt={item.title} className="modal__img" />
            <div className="modal__img-overlay" style={{ background: `linear-gradient(to bottom, transparent 40%, rgba(8,8,20,1) 100%)` }} />
          </div>
        )}

        <div className="modal__content">
          {/* badge */}
          <span className="modal__badge" style={{ color: item.color, background: `${item.color}18`, border: `1px solid ${item.color}33` }}>
            {item.emoji && <span>{item.emoji}</span>}
            {item.category || item.type}
          </span>

          <h2 className="modal__title">{item.title}</h2>
          <p className="modal__desc">{item.longDesc || item.desc}</p>

          {/* features / highlights */}
          {item.features && (
            <div className="modal__features">
              <h4>Key Features</h4>
              <ul>
                {item.features.map((f) => (
                  <li key={f}>
                    <span className="modal__check">✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* tech / tags */}
          {(item.tech || item.tags) && (
            <div className="modal__tags">
              {(item.tech || item.tags).map((t) => (
                <span key={t} className="modal__tag" style={{ color: item.color, background: `${item.color}12`, borderColor: `${item.color}28` }}>
                  {t}
                </span>
              ))}
            </div>
          )}

          <a href="#contact" className="modal__cta" onClick={onClose}
            style={{ background: `linear-gradient(135deg, ${item.color}, #2563eb)` }}>
            Start This Project →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
