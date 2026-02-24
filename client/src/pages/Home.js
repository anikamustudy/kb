import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { productService, categoryService } from '../services/api';
import ProductCard from '../components/ProductCard';
import './Home.css';

const Home = ({ addToCart }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsRes, categoriesRes] = await Promise.all([
          productService.getFeaturedProducts(),
          categoryService.getAllCategories()
        ]);
        setFeaturedProducts(productsRes.data);
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="home">

      {/* ── Hero Section ───────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">⚡ Trusted Electrical Partner Since 2005</span>
            <h1 className="hero-title">
              Complete Electrical<br />
              <span className="hero-highlight">Solutions</span> for You
            </h1>
            <p className="hero-subtitle">
              Premium quality electrical products for homes, offices, and industries.
              Authorised distributor of leading brands with pan-India delivery.
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                Shop Now
              </Link>
              <Link to="/about" className="btn btn-outline-white btn-lg">
                Learn More
              </Link>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="stat-number">5000+</span>
                <span className="stat-label">Products</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="stat-number">18+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features Strip ─────────────────────────────────────────── */}
      <section className="features-strip">
        <div className="container">
          <div className="features-strip-grid">
            <div className="strip-item">
              <span className="strip-icon">🚚</span>
              <div>
                <h4>Free Delivery</h4>
                <p>On orders above ₹999</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">✅</span>
              <div>
                <h4>ISI Certified</h4>
                <p>All products quality checked</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">🔄</span>
              <div>
                <h4>Easy Returns</h4>
                <p>7-day hassle-free returns</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">💬</span>
              <div>
                <h4>Expert Support</h4>
                <p>Mon–Sat, 9 AM–6 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Section ──────────────────────────────────────────── */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-image-col">
              <div className="about-image-box">
                <div className="about-image-placeholder">
                  <span className="about-main-icon">⚡</span>
                  <div className="about-badge-box">
                    <span className="about-badge-number">18+</span>
                    <span className="about-badge-text">Years of Trust</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-text-col">
              <span className="section-label">About Electracon</span>
              <h2 className="section-heading">Your Trusted Electrical<br />Solutions Partner</h2>
              <p className="about-description">
                Electracon is a leading electrical products company based in Mumbai, India.
                Since 2005, we have been providing high-quality electrical products and
                solutions to residential, commercial, and industrial customers across India.
              </p>
              <p className="about-description">
                We are authorised distributors of top brands including Havells, Polycab,
                Finolex, Legrand, and many more. Our wide range includes wiring accessories,
                lighting, fans, distribution boards, and industrial electrical equipment.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  ISI &amp; CE Certified Products
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  Authorised Multi-Brand Distributor
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  Pan-India Delivery Network
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  Dedicated After-Sales Support
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                Know More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories Section ─────────────────────────────────────── */}
      <section className="categories-section">
        <div className="container">
          <span className="section-label center">What We Offer</span>
          <h2 className="section-heading center">Shop by Category</h2>
          <div className="categories-grid grid grid-4">
            {categories.map(category => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                className="category-card card"
              >
                <div className="category-icon-wrap">
                  <div className="category-icon">{category.icon}</div>
                </div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="category-link-text">Browse →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products Section ──────────────────────────────── */}
      <section className="featured-section">
        <div className="container">
          <span className="section-label center">Best Sellers</span>
          <h2 className="section-heading center">Featured Products</h2>
          <p className="section-subtitle">Explore our top-rated electrical products trusted by thousands of customers</p>
          <div className="products-grid grid grid-3">
            {featuredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
          <div className="view-all-container">
            <Link to="/products" className="btn btn-outline">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────── */}
      <section className="why-section">
        <div className="container">
          <span className="section-label center light">Why Electracon</span>
          <h2 className="section-heading center light">Why Choose Us</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>Every product we sell is carefully sourced from certified manufacturers and rigorously tested before dispatch.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Competitive Pricing</h3>
              <p>As a direct distributor, we offer the best market prices without compromising on quality or authenticity.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🔧</div>
              <h3>Technical Expertise</h3>
              <p>Our team of electrical engineers can guide you in selecting the right products for any application.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>Fast Dispatch</h3>
              <p>Same-day dispatch for orders placed before 2 PM. Delivered safely with proper packaging across India.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Trusted Brands</h3>
              <p>Authorised distributor of Havells, Polycab, Finolex, Legrand, Crompton, and 50+ other leading brands.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>Warranty Support</h3>
              <p>All products come with manufacturer warranty. We handle replacement and warranty claims on your behalf.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Looking for Bulk Orders or Project Requirements?</h2>
              <p>Get special pricing for large orders and infrastructure projects. Our team will assist you with complete electrical procurement.</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get a Quote
              </Link>
              <a href="tel:+911234567890" className="btn btn-outline-white btn-lg">
                📞 Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
