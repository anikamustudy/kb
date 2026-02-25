import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { productService, categoryService } from '../services/api';
import ProductCard from '../components/ProductCard';
import './Home.css';

const bannerSlides = [
  {
    gradient: 'linear-gradient(135deg, #3d0a22 0%, #7b1d4b 50%, #5c1335 100%)',
    badge: '🌸 २०१० देखि विश्वसनीय पोशाक गन्तव्य',
    title: 'सुन्दर पारम्परिक पोशाक',
    highlight: 'तपाईंका लागि',
    subtitle: 'प्रिमियम सारी, कुर्था, सिराक, दसना, र चकला पत्ता लगाउनुहोस्। नेपालभर डेलिभरी सहित प्रामाणिक पारम्परिक पोशाक।',
    primary: { to: '/products', text: 'अहिले किन्नुहोस्' },
    secondary: { to: '/about', text: 'थप जान्नुहोस्' },
  },
  {
    gradient: 'linear-gradient(135deg, #1a0a3d 0%, #3d1d7b 50%, #2a1355 100%)',
    badge: '✨ नयाँ संग्रह आयो',
    title: 'बनारसी सारीको',
    highlight: 'अनुपम सौन्दर्य',
    subtitle: 'विवाह र उत्सवका लागि विशेष बनारसी सारी संग्रह। कुशल बुनकरहरूबाट सिधै तपाईंको ढोकासम्म।',
    primary: { to: '/products?category=sari', text: 'सारी हेर्नुहोस्' },
    secondary: { to: '/contact', text: 'सम्पर्क गर्नुहोस्' },
  },
  {
    gradient: 'linear-gradient(135deg, #0a2a1a 0%, #1d6b3d 50%, #134a2a 100%)',
    badge: '🎉 विशेष छुट उपलब्ध',
    title: 'थोक अर्डरमा',
    highlight: 'विशेष मूल्य',
    subtitle: 'विवाह, पार्टी वा व्यावसायिक अर्डरका लागि विशेष छुट पाउनुहोस्। हाम्रो अनुभवी टोलीसँग सम्पर्क गर्नुहोस्।',
    primary: { to: '/contact', text: 'मूल्य जान्नुहोस्' },
    secondary: { to: '/products', text: 'उत्पादनहरू हेर्नुहोस्' },
  },
];

const BannerSlider = () => {
  const [current, setCurrent] = useState(0);
  const total = bannerSlides.length;

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = bannerSlides[current];

  return (
    <section className="banner-slider" style={{ background: slide.gradient }}>
      <div className="banner-slider-overlay"></div>
      <div className="container banner-slider-container">
        <div className="hero-content">
          <span className="hero-badge">{slide.badge}</span>
          <h1 className="hero-title">
            {slide.title}<br />
            <span className="hero-highlight">{slide.highlight}</span>
          </h1>
          <p className="hero-subtitle">{slide.subtitle}</p>
          <div className="hero-actions">
            <Link to={slide.primary.to} className="btn btn-primary btn-lg">
              {slide.primary.text}
            </Link>
            <Link to={slide.secondary.to} className="btn btn-outline-white btn-lg">
              {slide.secondary.text}
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">५००+</span>
              <span className="stat-label">डिजाइनहरू</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number">५हजार+</span>
              <span className="stat-label">खुसी ग्राहकहरू</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="stat-number">१४+</span>
              <span className="stat-label">वर्षको अनुभव</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="slider-arrow slider-arrow-prev" onClick={prev} aria-label="अघिल्लो">&#10094;</button>
      <button className="slider-arrow slider-arrow-next" onClick={next} aria-label="अर्को">&#10095;</button>

      {/* Indicator Dots */}
      <div className="slider-dots">
        {bannerSlides.map((_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`स्लाइड ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

const Home = ({ addToCart }) => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % bannerSlides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + bannerSlides.length) % bannerSlides.length);
  };

  /* Auto-play */
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

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

  const slide = bannerSlides[currentSlide];

  return (
    <div className="home">

      {/* ── Banner Slider ───────────────────────────────────────────── */}
      <BannerSlider />

      {/* ── Video Section ──────────────────────────────────────────── */}
      <section className="video-section">
        <div className="container">
          <span className="section-label center">हाम्रो संग्रह</span>
          <h2 className="section-heading center">कुटेश्वरी बस्त्रालयको संसार</h2>
          <p className="section-subtitle">हाम्रा विशेष पोशाकहरू र पसलको झलक हेर्नुहोस्</p>
          <div className="video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/live_stream?channel=UCxxxxxx&autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ"
              title="कुटेश्वरी बस्त्रालय"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Slider Controls */}
        <button className="slider-btn slider-prev" onClick={prevSlide} aria-label="अघिल्लो">&#8249;</button>
        <button className="slider-btn slider-next" onClick={nextSlide} aria-label="अर्को">&#8250;</button>

        {/* Indicator Dots */}
        <div className="slider-dots">
          {bannerSlides.map((_, i) => (
            <button
              key={i}
              className={`slider-dot ${i === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(i)}
              aria-label={`स्लाइड ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── YouTube Video Section ───────────────────────────────────── */}
      <section className="video-section">
        <div className="container">
          <span className="section-label center">हाम्रो संग्रह</span>
          <h2 className="section-heading center">हाम्रो पोशाकहरू हेर्नुहोस्</h2>
          <p className="section-subtitle">कुटेश्वरी बस्त्रालयका विशेष पोशाक संग्रहको झलक</p>
          <div className="video-wrapper">
            <iframe
              className="video-embed"
              src="https://www.youtube.com/embed/videoseries?list=PLbpi6ZahtOH6Ar_3GPy3workrRE4B6Cz_&autoplay=1&mute=1&loop=1&controls=1&rel=0"
              title="कुटेश्वरी बस्त्रालय - पोशाक संग्रह"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
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
                <h4>नि:शुल्क डेलिभरी</h4>
                <p>रु. १४९९ माथिको अर्डरमा</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">✅</span>
              <div>
                <h4>प्रामाणिक कपडा</h4>
                <p>सबै उत्पादन गुणस्तर जाँच गरिएको</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">🔄</span>
              <div>
                <h4>सहज फिर्ता</h4>
                <p>७ दिनको झन्झटरहित फिर्ता</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">💬</span>
              <div>
                <h4>शैली सहयोग</h4>
                <p>सोम–शनि, बिहान ९–साँझ ६</p>
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
                  <img src="/logo.png" alt="कुटेश्वरी बस्त्रालय" className="about-logo-img" />
                  <div className="about-badge-box">
                    <span className="about-badge-number">१४+</span>
                    <span className="about-badge-text">वर्षको विश्वास</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-text-col">
              <span className="section-label">कुटेश्वरी बस्त्रालयको बारेमा</span>
              <h2 className="section-heading">तपाईंको विश्वसनीय<br />पारम्परिक पोशाक गन्तव्य</h2>
              <p className="about-description">
                कुटेश्वरी बस्त्रालय काठमाडौं, नेपालमा आधारित एक प्रमुख पारम्परिक पोशाक पसल हो।
                २०१० देखि हामी संस्कृति र शैली मनाउने महिलाहरूका लागि उत्कृष्ट पारम्परिक पोशाकहरू संकलन गर्दै आएका छौं।
              </p>
              <p className="about-description">
                विवाहका लागि बनारसी सारीदेखि दैनिक सूती कुर्थासम्म, हाम्रो संग्रह
                दक्षिण एसियाली पारम्परिक पोशाकको पूर्ण दायरा समेट्छ — सबै कुशल कारिगर
                र विश्वसनीय बुनकरहरूबाट प्राप्त।
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  प्रामाणिक हस्तनिर्मित कपडाहरू
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  विशेष डिजाइनर संग्रहणहरू
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  देशभर डेलिभरी
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  समर्पित शैली सहयोग
                </div>
              </div>
              <Link to="/about" className="btn btn-primary">
                हाम्रो बारेमा थप जान्नुहोस्
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories Section ─────────────────────────────────────── */}
      <section className="categories-section">
        <div className="container">
          <span className="section-label center">हामी के प्रदान गर्छौं</span>
          <h2 className="section-heading center">श्रेणी अनुसार किन्नुहोस्</h2>
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
                <span className="category-link-text">हेर्नुहोस् →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products Section ──────────────────────────────── */}
      <section className="featured-section">
        <div className="container">
          <span className="section-label center">सर्वाधिक बिकेको</span>
          <h2 className="section-heading center">विशेष उत्पादनहरू</h2>
          <p className="section-subtitle">हजारौं ग्राहकहरूले मन पराएको हाम्रो शीर्ष पारम्परिक पोशाकहरू हेर्नुहोस्</p>
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
              सबै उत्पादनहरू हेर्नुहोस्
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────── */}
      <section className="why-section">
        <div className="container">
          <span className="section-label center light">किन कुटेश्वरी</span>
          <h2 className="section-heading center light">हामीलाई किन छान्ने</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>उत्तम गुणस्तर</h3>
              <p>प्रत्येक पोशाक विश्वसनीय बुनकर र कारिगरहरूबाट सावधानीपूर्वक प्राप्त गरिन्छ, दिगो सुन्दरता र आराम सुनिश्चित गर्दै।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>उत्कृष्ट मूल्य</h3>
              <p>हामी सिधै कारिगर र उत्पादकहरूसँग काम गर्छौं, त्यसैले गुणस्तरमा सम्झौता नगरी तपाईंलाई उत्तम मूल्य मिल्छ।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎨</div>
              <h3>अनन्य डिजाइनहरू</h3>
              <p>हाम्रो संग्रहमा विशेष प्रिन्ट र कढाईहरू छन् जुन अन्य कतै पाइँदैन।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>छिटो डेलिभरी</h3>
              <p>दिउँसो २ बजेभन्दा अघि राखिएका अर्डरहरू उही दिन पठाइन्छ, सावधानीपूर्वक प्याकेजिङसहित।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>विश्वसनीय कारिगरहरू</h3>
              <p>हामी दशकौंको अनुभव भएका कुशल बुनकर र शिल्पकारहरूसँग साझेदारी गर्छौं।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>सहज फिर्ता</h3>
              <p>सन्तुष्ट हुनुभएन? हाम्रो झन्झटरहित ७ दिनको फिर्ता नीतिले पूर्ण विश्वाससहित किनमेल गर्न सुनिश्चित गर्छ।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>थोक अर्डर वा कस्टम डिजाइन खोज्दै हुनुहुन्छ?</h2>
              <p>ठूला अर्डरका लागि विशेष मूल्य र कस्टम कढाई उपलब्ध। हाम्रो टोलीले प्रत्येक अवसरका लागि सही पोशाक खोज्न मद्दत गर्नेछ।</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                मूल्य जान्नुहोस्
              </Link>
              <a href="tel:+977-1-4567890" className="btn btn-outline-white btn-lg">
                📞 अहिले फोन गर्नुहोस्
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
