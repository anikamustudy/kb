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
                सन् २०१० देखि प्रिमियम जातीय पोशाकहरूका लागि भरपर्दो गन्तव्य।
                उत्कृष्ट साडी, कुर्था, सिराक, दसाना, र चकला उपलब्ध।
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
              <h4 className="footer-heading">द्रुत लिङ्कहरू</h4>
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
                <li><Link to="/products?category=sari">साडी</Link></li>
                <li><Link to="/products?category=kurtha">कुर्था</Link></li>
                <li><Link to="/products?category=sirak">सिराक</Link></li>
                <li><Link to="/products?category=dasana">दसाना</Link></li>
                <li><Link to="/products?category=chakla">चकला</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="footer-heading">सम्पर्क गर्नुहोस्</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <span className="contact-icon">📍</span>
                  <span>कुटेश्वरी बस्त्रालय, मुख्य बजार,<br />काठमाडौं – ४४६००, नेपाल</span>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+9779801234567">+९७७ ९८०१२३४५६७</a>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">✉</span>
                  <a href="mailto:info@kuteshworibastralaya.com">info@kuteshworibastralaya.com</a>
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
              <a href="#!">सेवाका सर्तहरू</a>
              <a href="#!">साइटम्याप</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
