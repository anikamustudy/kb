import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
  { name: 'Kamala Sharma', role: 'Founder & Owner', icon: '👩‍💼', bio: '14+ years in ethnic fashion. Passionate curator who built Kuteshwori Bastralaya from a family boutique into a beloved clothing destination.' },
  { name: 'Sunita Thapa', role: 'Head of Collections', icon: '👩‍🎨', bio: 'Skilled fashion stylist with an eye for timeless designs. Handpicks every sari, kurtha, and garment in our collection.' },
  { name: 'Rajan Adhikari', role: 'Operations Manager', icon: '👨‍💼', bio: 'Ensures seamless delivery and customer satisfaction. Oversees supply chain, logistics, and quality control.' },
  { name: 'Priya Khatri', role: 'Customer Relations', icon: '👩‍💼', bio: 'Dedicated to making every customer feel valued. Handles styling advice, returns, and personalised shopping support.' },
];

const milestones = [
  { year: '2010', event: 'Kuteshwori Bastralaya founded in Kathmandu with a focus on authentic ethnic clothing.' },
  { year: '2013', event: 'Expanded collection to include embroidered saris and designer kurthas.' },
  { year: '2016', event: 'Opened second store and started partnerships with skilled artisan weavers.' },
  { year: '2019', event: 'Launched online store to serve customers across Nepal.' },
  { year: '2022', event: 'Reached milestone of 5,000+ satisfied customers.' },
  { year: '2024', event: 'Nationwide presence with delivery to all major cities.' },
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
                <span className="intro-icon">🌸</span>
              </div>
            </div>
            <div className="intro-text">
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading">Celebrating Tradition Through Elegant Ethnic Wear</h2>
              <p>
                Kuteshwori Bastralaya is one of Nepal's most trusted ethnic clothing stores,
                based in Kathmandu. Since our founding in 2010, we have been passionate about
                preserving and celebrating the beauty of traditional South Asian clothing.
              </p>
              <p>
                Our carefully curated collection spans stunning saris in silk, cotton, chiffon
                and georgette; elegant kurthas; traditional siraks; beautifully crafted dasanas;
                and festive chaklas — all sourced from skilled artisans and weavers across the region.
              </p>
              <p>
                With a growing base of over 5,000 happy customers and delivery across Nepal,
                we are committed to bringing authentic ethnic fashion to every home.
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
                To make authentic, beautifully crafted ethnic clothing accessible to every woman —
                celebrating culture, tradition, and personal style with each garment we offer.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be Nepal's most loved ethnic clothing destination — known for authenticity,
                elegance, and a warm personal touch that makes every customer feel special.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Authenticity in every fabric. Respect for artisans and their craft. Delight
                in every customer interaction. These principles guide everything we do at
                Kuteshwori Bastralaya.
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
          <p className="section-subtitle">Dedicated professionals passionate about ethnic fashion and customer delight</p>
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
            <h2>Ready to Explore Our Collection?</h2>
            <p>Browse our wide range of ethnic clothing or get in touch for bulk orders and custom designs.</p>
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
