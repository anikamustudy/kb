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
                <a href="tel:+911234567890">+91 12345 67890</a>
              </span>
              <span className="topbar-item">
                <span className="topbar-icon">✉</span>
                <a href="mailto:info@kuteshworibastralaya.in">info@kuteshworibastralaya.in</a>
              </span>
              <span className="topbar-item">
                <span className="topbar-icon">🕐</span>
                Mon–Sat: 9:00 AM – 6:00 PM
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
              <span className="logo-icon">🌸</span>
              <div className="logo-text-group">
                <span className="logo-text">Kuteshwori Bastralaya</span>
                <span className="logo-tagline">Traditional Clothing</span>
              </div>
            </Link>

            <button
              className={`mobile-menu-btn ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
              <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>About Us</Link>
              <Link to="/products" className={isActive('/products') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Contact</Link>
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
