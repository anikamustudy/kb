import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app this would call an API
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">

      {/* ── Page Banner ──────────────────────────────────────────────── */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <h1>Contact Us</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span> / </span>
              <span>Contact Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Info Cards ───────────────────────────────────────── */}
      <section className="contact-info-section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <h3>Our Address</h3>
              <p>123, Cloth Market,<br />Indrachowk, Kathmandu – 44600,<br />Nepal</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <h3>Phone</h3>
              <p><a href="tel:+911234567890">+91 12345 67890</a></p>
              <p><a href="tel:+911234567891">+91 12345 67891</a></p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">✉</div>
              <h3>Email</h3>
              <p><a href="mailto:info@kuteshworibastralaya.com">info@kuteshworibastralaya.com</a></p>
              <p><a href="mailto:orders@kuteshworibastralaya.com">orders@kuteshworibastralaya.com</a></p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">🕐</div>
              <h3>Working Hours</h3>
              <p>Monday – Saturday<br />9:00 AM – 6:00 PM</p>
              <p className="closed-note">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Form + Map ───────────────────────────────────────── */}
      <section className="contact-main-section">
        <div className="container">
          <div className="contact-main-grid">
            {/* Form */}
            <div className="contact-form-col">
              <span className="section-label">Get In Touch</span>
              <h2 className="section-heading">Send Us a Message</h2>
              <p className="form-intro">
                Have a question about our collections or need a custom order? Fill in the form below
                and our team will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="alert alert-success">
                  ✅ Thank you! Your message has been sent. We'll get back to you shortly.
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="Rajesh Sharma"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="rajesh@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="custom-order">Custom Order</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="bridal-collection">Bridal Collection</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Tell us how we can help you..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg contact-submit">
                  Send Message →
                </button>
              </form>
            </div>

            {/* Side Info */}
            <div className="contact-side-col">
              <div className="contact-side-card">
                <h3>Why Choose Kuteshwori Bastralaya?</h3>
                <ul className="contact-why-list">
                  <li>✓ 14+ years of tradition</li>
                  <li>✓ Authentic handcrafted garments</li>
                  <li>✓ 500+ unique designs</li>
                  <li>✓ Pan-Nepal delivery</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Personal styling support</li>
                </ul>
              </div>
              <div className="contact-side-card">
                <h3>Custom & Bulk Orders</h3>
                <p>Planning a wedding or cultural event? Our design team offers special rates and custom stitching for large orders.</p>
                <a href="tel:+911234567890" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '16px' }}>
                  📞 Call Sales Team
                </a>
              </div>
              <div className="contact-side-card">
                <h3>Follow Us</h3>
                <div className="contact-social">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Facebook">f Facebook</a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="Twitter">t Twitter</a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-social-link" aria-label="LinkedIn">in LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
