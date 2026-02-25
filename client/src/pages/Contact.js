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
            <h1>हामीलाई सम्पर्क गर्नुहोस्</h1>
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
              <p><a href="tel:+977-1-4567890">+९७७-१-४५६७८९०</a></p>
              <p><a href="tel:+977-1-4567891">+९७७-१-४५६७८९१</a></p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">✉</div>
              <h3>इमेल</h3>
              <p><a href="mailto:info@kuteshworibastralaya.com.np">info@kuteshworibastralaya.com.np</a></p>
              <p><a href="mailto:sales@kuteshworibastralaya.com.np">sales@kuteshworibastralaya.com.np</a></p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">🕐</div>
              <h3>कार्य समय</h3>
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
                हाम्रा पोशाकहरू बारे जिज्ञासा छ वा थोक मूल्य चाहिन्छ? तलको फारम भर्नुहोस्
                र हाम्रो टोली २४ घण्टाभित्र जवाफ दिनेछ।
              </p>

              {submitted && (
                <div className="alert alert-success">
                  ✅ धन्यवाद! तपाईंको सन्देश पठाइयो। हामी छिट्टै जवाफ दिनेछौं।
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
                      placeholder="+९७७ ९८७६५ ४३२१०"
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
                      <option value="support">बिक्री पश्चात सहयोग</option>
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
                    placeholder="हामीलाई कसरी मद्दत गर्न सक्छौं बताउनुहोस्..."
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
                <h3>किन कुटेश्वरी छान्ने?</h3>
                <ul className="contact-why-list">
                  <li>✓ १४+ वर्षको अनुभव</li>
                  <li>✓ प्रामाणिक हस्तनिर्मित कपडाहरू</li>
                  <li>✓ ५००+ अनन्य डिजाइनहरू</li>
                  <li>✓ देशभर डेलिभरी</li>
                  <li>✓ प्रतिस्पर्धात्मक मूल्य</li>
                  <li>✓ समर्पित शैली सहयोग</li>
                </ul>
              </div>
              <div className="contact-side-card">
                <h3>थोक अर्डर जिज्ञासा</h3>
                <p>विवाह वा उत्सव योजना गर्दै हुनुहुन्छ? थोक मूल्य चाहिन्छ? हाम्रो टोले थोक अर्डर र कस्टम डिजाइनका लागि विशेष दर प्रदान गर्छ।</p>
                <a href="tel:+977-1-4567890" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', marginTop: '16px' }}>
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
