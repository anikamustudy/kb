import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
  { name: 'Sita Devi Sharma', role: 'Founder & Creative Director', icon: '👩‍💼', bio: '20+ years in traditional fashion. Visionary leader who built Kuteshwori Bastralaya from a small shop to a beloved clothing brand.' },
  { name: 'Anita Maharjan', role: 'Operations Manager', icon: '👩‍💼', bio: 'Ensures seamless delivery and customer satisfaction. Oversees supply chain, weaver relationships, and quality control.' },
  { name: 'Ramesh Shrestha', role: 'Head of Design', icon: '👨‍🎨', bio: 'Expert in traditional textiles with a passion for blending heritage patterns with contemporary styles.' },
  { name: 'Priya Thapa', role: 'Customer Relations Lead', icon: '👩‍💼', bio: 'Drives customer happiness across regions. Manages personal styling consultations and bulk order coordination.' },
];

const milestones = [
  { year: '2010', event: 'Kuteshwori Bastralaya founded in Kathmandu with a focus on authentic traditional garments.' },
  { year: '2013', event: 'Partnered directly with master weavers in Bhaktapur and Patan for exclusive designs.' },
  { year: '2016', event: 'Expanded to cover all major festivals with special bridal and festive collections.' },
  { year: '2019', event: 'Launched online store to serve customers across Nepal and South Asia.' },
  { year: '2022', event: 'Reached milestone of 5,000+ satisfied customers and 500+ unique designs.' },
  { year: '2024', event: 'Nationwide presence with pan-Nepal delivery and international shipping.' },
];

const About = () => {
  return (
    <div className="about-page">

      {/* ── Page Banner ──────────────────────────────────────────────── */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <h1>About Kuteshwori Bastralaya</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span> / </span>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ───────────────────────────────────────────────── */}
      <section className="about-intro">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-image">
              <div className="intro-image-placeholder">
                <span className="intro-icon">🥻</span>
              </div>
            </div>
            <div className="intro-text">
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading">Celebrating Traditional Fashion Across Nepal</h2>
              <p>
                Kuteshwori Bastralaya is one of Nepal's leading traditional clothing stores,
                headquartered in Kathmandu. Since our founding in 2010, we have been committed to
                preserving and celebrating the beauty of South Asian fashion heritage.
              </p>
              <p>
                We are proud to work directly with master weavers and artisans from Bhaktapur,
                Patan, and across Nepal. Our curated collection spans saris, kurthas, siraks,
                dasanas, and chaklas — each piece a testament to generations of craftsmanship.
              </p>
              <p>
                With a growing customer base and pan-Nepal delivery, we ensure that exquisite
                traditional garments reach every corner of the country and beyond.
              </p>
              <div className="intro-stats">
                <div className="intro-stat">
                  <span className="intro-stat-num">14+</span>
                  <span className="intro-stat-label">Years Experience</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">500+</span>
                  <span className="intro-stat-label">Designs</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">5K+</span>
                  <span className="intro-stat-label">Happy Customers</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">50+</span>
                  <span className="intro-stat-label">Artisan Partners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ─────────────────────────────────────────── */}
      <section className="mission-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">🎯</div>
              <h3>Our Mission</h3>
              <p>
                To make authentic, handcrafted traditional clothing accessible to every woman,
                celebrating cultural heritage while supporting local artisans and weavers.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be Nepal's most beloved traditional clothing brand — known for quality,
                authenticity, and the celebration of South Asian fashion heritage.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Quality in every stitch. Authenticity in every design. Respect for artisans,
                customers, and cultural traditions. These principles guide everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Journey ──────────────────────────────────────────────── */}
      <section className="journey-section">
        <div className="container">
          <span className="section-label center">Our Story</span>
          <h2 className="section-heading center">Our Journey</h2>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div key={m.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{m.year}</span>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
            <div className="timeline-line"></div>
          </div>
        </div>
      </section>

      {/* ── Team Section ─────────────────────────────────────────────── */}
      <section className="team-section">
        <div className="container">
          <span className="section-label center">Our People</span>
          <h2 className="section-heading center">Meet Our Team</h2>
          <p className="section-subtitle">Dedicated professionals passionate about traditional fashion and customer happiness</p>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.name} className="team-card">
                <div className="team-avatar">{member.icon}</div>
                <h3 className="team-name">{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p className="team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="about-cta">
        <div className="container">
          <div className="about-cta-content">
            <h2>Ready to Work With Us?</h2>
            <p>Explore our wide range of traditional garments or get in touch for custom orders and wedding collections.</p>
            <div className="about-cta-actions">
              <Link to="/products" className="btn btn-primary btn-lg">Shop Products</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
