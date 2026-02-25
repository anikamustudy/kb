import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = ({ cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header-topbar">
        <div className="container">
          <div className="topbar-content">
            <div className="topbar-left">
              <span className="topbar-item">
                <span className="topbar-icon">📞</span>
                <a href="tel:+911234567890">+९७७ ९८०१२३४५६७</a>
              </span>
              <span className="topbar-item">
                <span className="topbar-icon">✉</span>
                <a href="mailto:info@kuteshworibastralaya.com">info@kuteshworibastralaya.com</a>
              </span>
              <span className="topbar-item">
                <span className="topbar-icon">🕐</span>
                सोम–शनि: बिहान ९:०० – साँझ ६:००
              </span>
            </div>
            <div className="topbar-right">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Facebook">f</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link" aria-label="Twitter">t</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <img src="/logo.png" alt="कुटेश्वरी बस्त्रालय" className="logo-img" />
              <div className="logo-text-group">
                <span className="logo-text">कुटेश्वरी बस्त्रालय</span>
                <span className="logo-tagline">जातीय पोशाक पसल</span>
              </div>
            </Link>

            <button
              className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="मेनु खोल्नुहोस्"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>गृहपृष्ठ</Link>
              <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>हाम्रो बारेमा</Link>
              <Link to="/products" className={isActive('/products') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>उत्पादनहरू</Link>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>सम्पर्क</Link>
              <Link to="/cart" className={`cart-link ${isActive('/cart') ? 'active' : ''}`} onClick={() => setIsMenuOpen(false)}>
                <span className="cart-icon">🛒</span>
                {cartItemCount > 0 && (
                  <span className="cart-badge">{cartItemCount}</span>
                )}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
