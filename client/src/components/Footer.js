import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-content">
            {/* Brand */}
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <img src="/logo.png" alt="कुटेश्वरी बस्त्रालय" className="footer-logo-img" />
                <span className="footer-logo-text">कुटेश्वरी बस्त्रालय</span>
              </div>
              <p className="footer-about">
                २०१० देखि प्रिमियम पारम्परिक पोशाकको विश्वसनीय गन्तव्य।
                सर्वोत्तम सारी, कुर्था, सिराक, दसना, र चकला उपलब्ध गराउँदै।
              </p>
              <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Facebook">f</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Twitter">t</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="LinkedIn">in</a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="YouTube">▶</a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="footer-heading">द्रुत लिंकहरू</h4>
              <ul className="footer-links">
                <li><Link to="/">गृहपृष्ठ</Link></li>
                <li><Link to="/about">हाम्रो बारेमा</Link></li>
                <li><Link to="/products">उत्पादनहरू</Link></li>
                <li><Link to="/contact">सम्पर्क</Link></li>
                <li><Link to="/cart">कार्ट</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-section">
              <h4 className="footer-heading">उत्पादन श्रेणीहरू</h4>
              <ul className="footer-links">
                <li><Link to="/products?category=sari">सारी</Link></li>
                <li><Link to="/products?category=kurtha">कुर्था</Link></li>
                <li><Link to="/products?category=sirak">सिराक</Link></li>
                <li><Link to="/products?category=dasana">दसना</Link></li>
                <li><Link to="/products?category=chakla">चकला</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="footer-heading">हामीलाई सम्पर्क गर्नुहोस्</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <span className="contact-icon">📍</span>
                  <span>कुटेश्वरी बस्त्रालय, मुख्य बजार,<br />काठमाडौं – ४४६००, नेपाल</span>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+977-1-4567890">+९७७-१-४५६७८९०</a>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">✉</span>
                  <a href="mailto:info@kuteshworibastralaya.com.np">info@kuteshworibastralaya.com.np</a>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">🕐</span>
                  <span>सोम – शनि: बिहान ९:०० – साँझ ६:००</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} कुटेश्वरी बस्त्रालय। सर्वाधिकार सुरक्षित।</p>
            <div className="footer-bottom-links">
              <a href="#!">गोपनीयता नीति</a>
              <a href="#!">सेवाका शर्तहरू</a>
              <a href="#!">साइटम्याप</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
