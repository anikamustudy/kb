import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { productService, categoryService } from '../services/api';
import ProductCard from '../components/ProductCard';
import './Home.css';

/* ── Banner Slides ─────────────────────────────────────────────────────── */
const bannerSlides = [
  {
    id: 1,
    badge: '🌸 सन् २०१० देखि विश्वासिलो पोशाक गन्तव्य',
    title: 'सुन्दर जातीय पोशाक',
    highlight: 'तपाईंका लागि',
    subtitle: 'उत्कृष्ट साडी, कुर्था, सिराक, दसाना, र चकला। प्रामाणिक जातीय पोशाक, सम्पूर्ण नेपालमा डेलिभरी।',
    bg: 'linear-gradient(135deg, #3d0a22 0%, #7b1d4b 50%, #5c1335 100%)',
  },
  {
    id: 2,
    badge: '💎 नयाँ संग्रह २०८१',
    title: 'बनारसी र रेशमी साडी',
    highlight: 'विशेष छनोट',
    subtitle: 'विवाह र पर्वका लागि हस्तनिर्मित बनारसी साडीहरू। कुशल बुनकरहरूको सीप र परम्परा।',
    bg: 'linear-gradient(135deg, #1a0a3d 0%, #4b1d7b 50%, #351353 100%)',
  },
  {
    id: 3,
    badge: '🎨 विशेष छुट उपलब्ध',
    title: 'डिजाइनर कुर्था',
    highlight: 'संग्रह',
    subtitle: 'दैनिक र उत्सवका लागि सुन्दर कुर्था, सिराक र दसाना। हरेक अवसरका लागि उपयुक्त।',
    bg: 'linear-gradient(135deg, #0a2a1a 0%, #1d6b3d 50%, #134d28 100%)',
  },
];

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

      {/* ── Hero / Banner Slider ────────────────────────────────────── */}
      <section className="hero hero-slider" style={{ background: slide.bg }}>
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-badge">{slide.badge}</span>
            <h1 className="hero-title">
              {slide.title}<br />
              <span className="hero-highlight">{slide.highlight}</span>
            </h1>
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-actions">
              <Link to="/products" className="btn btn-primary btn-lg">
                अहिले किन्नुहोस्
              </Link>
              <Link to="/about" className="btn btn-outline-white btn-lg">
                थप जान्नुहोस्
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
                <span className="stat-label">सन्तुष्ट ग्राहक</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="stat-number">१४+</span>
                <span className="stat-label">वर्षको अनुभव</span>
              </div>
            </div>
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
                <h4>निःशुल्क डेलिभरी</h4>
                <p>रू १४९९ माथिको अर्डरमा</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">✅</span>
              <div>
                <h4>प्रामाणिक कपडा</h4>
                <p>सबै उत्पादन गुणस्तर परीक्षण</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">🔄</span>
              <div>
                <h4>सजिलो फिर्ता</h4>
                <p>७ दिन झन्झटमुक्त फिर्ता</p>
              </div>
            </div>
            <div className="strip-item">
              <span className="strip-icon">💬</span>
              <div>
                <h4>शैली सहयोग</h4>
                <p>सोम–शनि, बिहान ९ – साँझ ६</p>
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
              <h2 className="section-heading">तपाईंको भरपर्दो जातीय<br />पोशाक गन्तव्य</h2>
              <p className="about-description">
                कुटेश्वरी बस्त्रालय काठमाडौंमा आधारित एक प्रमुख जातीय पोशाक पसल हो।
                सन् २०१० देखि हामी महिलाहरूका लागि उत्कृष्ट परम्परागत पोशाकहरू संकलन गर्दै आएका छौं।
              </p>
              <p className="about-description">
                विवाहका लागि बनारसी साडीदेखि दैनिक सूती कुर्थासम्म, हाम्रो संग्रहमा
                दक्षिण एशियाली जातीय पोशाकका सम्पूर्ण किसिमहरू समेटिएका छन् — सबै कुशल
                कारीगर र भरपर्दो बुनकरहरूबाट प्राप्त।
              </p>
              <div className="about-highlights">
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  प्रामाणिक हस्तनिर्मित कपडा
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  चयनित डिजाइनर संग्रह
                </div>
                <div className="highlight-item">
                  <span className="highlight-check">✓</span>
                  देशव्यापी डेलिभरी
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
          <span className="section-label center">हाम्रो उत्पादनहरू</span>
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
          <span className="section-label center">सर्वाधिक बिक्री</span>
          <h2 className="section-heading center">विशेष उत्पादनहरू</h2>
          <p className="section-subtitle">हजारौं ग्राहकहरूले मन पराएका हाम्रा शीर्ष-मूल्याङ्कित जातीय पोशाकहरू</p>
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
              सबै उत्पादन हेर्नुहोस्
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ──────────────────────────────────────────── */}
      <section className="why-section">
        <div className="container">
          <span className="section-label center light">किन कुटेश्वरी</span>
          <h2 className="section-heading center light">हामीलाई किन छान्ने?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🏆</div>
              <h3>उच्च गुणस्तर</h3>
              <p>हरेक पोशाक भरपर्दो बुनकर र कारीगरहरूबाट ध्यानपूर्वक संकलन गरिएको, दीर्घकालीन सौन्दर्य र आरामको ग्यारेन्टी।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💰</div>
              <h3>उचित मूल्य</h3>
              <p>हामी सिधै कारीगर र उत्पादकहरूसँग काम गर्छौं, जसले गुणस्तरमा सम्झौता नगरी सर्वोत्तम मूल्य दिन्छ।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🎨</div>
              <h3>अनौठो डिजाइन</h3>
              <p>हाम्रो संग्रहमा विशेष छपाई र कढाई छन् जुन अन्यत्र पाउन गाह्रो छ।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🚀</div>
              <h3>छिटो डिस्प्याच</h3>
              <p>दिउँसो २ बजे अघि आएका अर्डरहरू उसै दिन पठाइन्छ, सुरक्षित प्याकेजिङ सहित।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>भरपर्दो कारीगर</h3>
              <p>हामी दशकौंको अनुभव भएका कुशल बुनकर र शिल्पकारहरूसँग साझेदारी गर्छौं।</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🛡️</div>
              <h3>सजिलो फिर्ता</h3>
              <p>सन्तुष्ट हुनुभएन? हाम्रो झन्झटमुक्त ७ दिने फिर्ता नीतिले पूर्ण विश्वासका साथ किनमेल गर्न दिन्छ।</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ─────────────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>थोक अर्डर वा कस्टम डिजाइन चाहिन्छ?</h2>
              <p>ठूलो अर्डरका लागि विशेष मूल्य र कस्टम कढाई उपलब्ध। हाम्रो टोली तपाईंलाई प्रत्येक अवसरका लागि उत्तम पोशाक खोज्न मद्दत गर्नेछ।</p>
            </div>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                मूल्य सोध्नुहोस्
              </Link>
              <a href="tel:+9779801234567" className="btn btn-outline-white btn-lg">
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
