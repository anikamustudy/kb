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
                <span className="footer-logo-icon">🌸</span>
                <span className="footer-logo-text">Kuteshwori Bastralaya</span>
              </div>
              <p className="footer-about">
                Your trusted destination for premium traditional clothing since 2010.
                Celebrating the beauty of South Asian fashion with quality and grace.
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
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/cart">Cart</Link></li>
              </ul>
            </div>

            {/* Categories */}
            <div className="footer-section">
              <h4 className="footer-heading">Product Categories</h4>
              <ul className="footer-links">
                <li><Link to="/products?category=sari">Sari Collection</Link></li>
                <li><Link to="/products?category=kurtha">Kurtha Collection</Link></li>
                <li><Link to="/products?category=sirak">Sirak Collection</Link></li>
                <li><Link to="/products?category=dasana">Dasana Collection</Link></li>
                <li><Link to="/products?category=chakla">Chakla Collection</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-section">
              <h4 className="footer-heading">Contact Us</h4>
              <div className="footer-contact-list">
                <div className="footer-contact-item">
                  <span className="contact-icon">📍</span>
                  <span>123, Cloth Market, Indrachowk,<br />Kathmandu – 44600, Nepal</span>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+911234567890">+91 12345 67890</a>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">✉</span>
                  <a href="mailto:info@kuteshworibastralaya.in">info@kuteshworibastralaya.in</a>
                </div>
                <div className="footer-contact-item">
                  <span className="contact-icon">🕐</span>
                  <span>Mon – Sat: 9:00 AM – 6:00 PM</span>
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
            <p>&copy; {new Date().getFullYear()} Kuteshwori Bastralaya. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#!">Privacy Policy</a>
              <a href="#!">Terms of Service</a>
              <a href="#!">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
