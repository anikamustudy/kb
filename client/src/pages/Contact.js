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
            <h1>सम्पर्क गर्नुहोस्</h1>
            <div className="breadcrumb">
              <Link to="/">गृहपृष्ठ</Link>
              <span> / </span>
              <span>सम्पर्क</span>
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
              <h3>हाम्रो ठेगाना</h3>
              <p>कुटेश्वरी बस्त्रालय,<br />मुख्य बजार, काठमाडौं – ४४६००,<br />नेपाल</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">📞</div>
              <h3>फोन</h3>
              <p><a href="tel:+9779801234567">+९७७ ९८०१२३४५६७</a></p>
              <p><a href="tel:+9779801234568">+९७७ ९८०१२३४५६८</a></p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">✉</div>
              <h3>इमेल</h3>
              <p><a href="mailto:info@kuteshworibastralaya.com">info@kuteshworibastralaya.com</a></p>
              <p><a href="mailto:sales@kuteshworibastralaya.com">sales@kuteshworibastralaya.com</a></p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">🕐</div>
              <h3>कार्यालय समय</h3>
              <p>सोमबार – शनिबार<br />बिहान ९:०० – साँझ ६:००</p>
              <p className="closed-note">आइतबार: बन्द</p>
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
              <span className="section-label">सम्पर्कमा आउनुहोस्</span>
              <h2 className="section-heading">हामीलाई सन्देश पठाउनुहोस्</h2>
              <p className="form-intro">
                हाम्रो पोशाकबारे प्रश्न छ वा थोक मूल्य चाहिन्छ? तलको फाराम भर्नुहोस्,
                हाम्रो टोली २४ घण्टाभित्र जवाफ दिनेछ।
              </p>

              {submitted && (
                <div className="alert alert-success">
                  ✅ धन्यवाद! तपाईंको सन्देश पठाइयो। हामी छिट्टै सम्पर्क गर्नेछौं।
                </div>
              )}

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">तपाईंको नाम *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                      placeholder="राजेश शर्मा"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">इमेल ठेगाना *</label>
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
                    <label htmlFor="phone">फोन नम्बर</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="form-control"
                      placeholder="+९७७ ९८०१२३४५६७"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">विषय *</label>
                    <select
                      id="subject"
                      name="subject"
                      className="form-control"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">विषय छान्नुहोस्</option>
                      <option value="product-inquiry">उत्पादन सम्बन्धी जिज्ञासा</option>
                      <option value="bulk-order">थोक अर्डर</option>
                      <option value="custom-design">कस्टम डिजाइन अनुरोध</option>
                      <option value="support">बिक्री पछि सहयोग</option>
                      <option value="other">अन्य</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">सन्देश *</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="हामी कसरी सहयोग गर्न सक्छौं भनेर बताउनुहोस्..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg contact-submit">
                  सन्देश पठाउनुहोस् →
                </button>
              </form>
            </div>

            {/* Side Info */}
            <div className="contact-side-col">
              <div className="contact-side-card">
                <h3>कुटेश्वरी किन छान्ने?</h3>
                <ul className="contact-why-list">
                  <li>✓ १४+ वर्षको अनुभव</li>
                  <li>✓ प्रामाणिक हस्तनिर्मित कपडा</li>
                  <li>✓ ५००+ अनौठा डिजाइनहरू</li>
                  <li>✓ देशव्यापी डेलिभरी</li>
                  <li>✓ प्रतिस्पर्धी मूल्य</li>
                  <li>✓ समर्पित शैली सहयोग</li>
                </ul>
              </div>
              <div className="contact-side-card">
                <h3>थोक अर्डर सोधपुछ</h3>
                <p>विवाह वा कार्यक्रमको योजना बनाउँदै हुनुहुन्छ? थोक मूल्य चाहिन्छ? हाम्रो टोली थोक अर्डर र कस्टम डिजाइनका लागि विशेष दर दिन्छ।</p>
                <a href="tel:+9779801234567" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '16px' }}>
                  📞 बिक्री टोलीलाई फोन गर्नुहोस्
                </a>
              </div>
              <div className="contact-side-card">
                <h3>हामीलाई फलो गर्नुहोस्</h3>
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
