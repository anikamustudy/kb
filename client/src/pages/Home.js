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
            <span className="hero-badge">🌸 Celebrating Traditional Fashion Since 2010</span>
            <h1 className="hero-title">
              Exquisite Traditional<br />
              <span className="hero-highlight">Clothing</span> for You
            </h1>
            <p className="hero-subtitle">
              Premium quality saris, kurthas, siraks, dasanas and chaklas for every occasion.
              Handcrafted elegance delivered to your doorstep.
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
                <span className="stat-number">500+</span>
                <span className="stat-label">Designs</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="stat-number">5K+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="stat-number">14+</span>
                <span className="stat-label">Years of Trust</span>
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
                <p>On orders above ₹1499</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">✨</span>
              <div>
                <h4>Authentic Quality</h4>
                <p>Genuine handcrafted products</p>
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
                <h4>Expert Styling</h4>
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
                  <span className="about-main-icon">🥻</span>
                  <div className="about-badge-box">
                    <span className="about-badge-number">14+</span>
                    <span className="about-badge-text">Years of Trust</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-text-col">
              <span className="section-label">About Kuteshwori Bastralaya</span>
              <h2 className="section-heading">Your Trusted Clothing<br />Destination</h2>
              <p className="about-description">
                Kuteshwori Bastralaya is a premier traditional clothing store based in Kathmandu, Nepal.
                Since 2010, we have been celebrating the beauty of South Asian fashion with
                premium handcrafted garments for every occasion.
              </p>
              <p className="about-description">
                We offer an exquisite collection of saris, kurthas, siraks, dasanas, and chaklas
                sourced directly from master weavers and artisans. Each piece tells a story
                of craftsmanship, culture, and timeless elegance.
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  Authentic Handcrafted Garments
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  Direct from Master Artisans
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  Pan-Nepal Delivery
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  Personal Styling Support
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
          <h2 className="section-heading center">Featured Collection</h2>
          <p className="section-subtitle">Explore our top-rated garments loved by thousands of customers across Nepal</p>
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
          <span className="section-label center light">Why Kuteshwori</span>
          <h2 className="section-heading center light">Why Choose Us</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>Premium Quality</h3>
              <p>Every garment is carefully sourced from certified artisans and thoroughly inspected for quality before dispatch.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>Fair Pricing</h3>
              <p>We work directly with weavers to offer the best prices without compromising on quality or authenticity.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎨</div>
              <h3>Unique Designs</h3>
              <p>Our collection features exclusive traditional and contemporary designs you won't find anywhere else.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>Fast Dispatch</h3>
              <p>Same-day dispatch for orders placed before 2 PM. Delivered safely with careful packaging.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Trusted Artisans</h3>
              <p>We partner with skilled weavers and craftspeople who uphold generations of traditional craftsmanship.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>Easy Returns</h3>
              <p>Not satisfied? We offer hassle-free 7-day returns so you can shop with complete confidence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Looking for Bulk Orders or Custom Designs?</h2>
              <p>Get special pricing for bulk purchases and custom orders for weddings, events, and cultural programs. Our team will assist you with personalized styling.</p>
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
