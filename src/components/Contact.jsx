import { useState } from "react";
import "./Contact.css";
import bgImage from "../assets/ff.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      className="contact"
      id="contact"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="contact__overlay" />      <div className="contact__container">

        {/* Left info */}
        <div className="contact__info">
          <span className="section__badge">Get In Touch</span>
          <h2 className="section__title">
            Let's Build Something <span>Together</span>
          </h2>
          <p className="contact__desc">
            Have a project in mind? Tell us about it — we'll get back to you
            within 24 hours with a free consultation.
          </p>

          <div className="contact__details">
            {[
              { icon: "📧", label: "Email", value: "hello@starsolution.com" },
              { icon: "📞", label: "Phone", value: "+92 300 0000000" },
              { icon: "📍", label: "Location", value: "Pakistan" },
            ].map((d) => (
              <div className="contact__detail" key={d.label}>
                <span className="contact__detail-icon">{d.icon}</span>
                <div>
                  <span className="contact__detail-label">{d.label}</span>
                  <span className="contact__detail-value">{d.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <div className="contact__form-wrap">
          {sent ? (
            <div className="contact__success">
              <span className="contact__success-icon">🎉</span>
              <h3>Message Sent!</h3>
              <p>We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__row">
                <div className="form__group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form__group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form__group">
                <label>Service Needed</label>
                <select name="service" value={form.service} onChange={handleChange} required>
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>POS System</option>
                  <option>Shopify Store</option>
                  <option>Mobile App</option>
                  <option>Custom Software</option>
                  <option>UI/UX Design</option>
                </select>
              </div>

              <div className="form__group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="form__submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
