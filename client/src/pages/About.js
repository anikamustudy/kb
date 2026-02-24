import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
  { name: 'Rajesh Sharma', role: 'Founder & CEO', icon: '👨‍💼', bio: '20+ years in the electrical industry. Visionary leader who built Electracon from a small shop to a pan-India brand.' },
  { name: 'Priya Mehta', role: 'Operations Director', icon: '👩‍💼', bio: 'Ensures seamless delivery and customer satisfaction. Oversees supply chain, logistics, and quality control.' },
  { name: 'Anil Kumar', role: 'Chief Technical Officer', icon: '👨‍🔧', bio: 'Electrical engineer with expertise in industrial and residential solutions. Leads our technical support team.' },
  { name: 'Sunita Patel', role: 'Sales Manager', icon: '👩‍💼', bio: 'Drives growth across regions. Manages a large network of dealers and institutional clients.' },
];

const milestones = [
  { year: '2005', event: 'Electracon founded in Mumbai with a focus on quality electrical products.' },
  { year: '2009', event: 'Became authorised distributor for Havells and Polycab.' },
  { year: '2013', event: 'Expanded to 5 states with a network of 200+ dealers.' },
  { year: '2017', event: 'Launched online store to serve customers across India.' },
  { year: '2021', event: 'Reached milestone of 10,000+ satisfied customers.' },
  { year: '2024', event: 'Pan-India presence with 500+ dealer partners.' },
];

const About = () => {
  return (
    <div className="about-page">

      {/* ── Page Banner ──────────────────────────────────────────────── */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <h1>About Electracon</h1>
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
                <span className="intro-icon">⚡</span>
              </div>
            </div>
            <div className="intro-text">
              <span className="section-label">Who We Are</span>
              <h2 className="section-heading">Powering India With Quality Electrical Products</h2>
              <p>
                Electracon is one of India's leading electrical products distribution companies,
                headquartered in Mumbai. Since our founding in 2005, we have been committed to
                delivering premium quality electrical products that meet the highest safety standards.
              </p>
              <p>
                We are proud authorised distributors of renowned brands including Havells, Polycab,
                Finolex Cables, Legrand, Crompton, Anchor, and many more. Our curated product
                portfolio spans wiring accessories, lighting solutions, fans, circuit protection
                devices, cables, and industrial electrical equipment.
              </p>
              <p>
                With a growing network of 500+ dealer partners and a pan-India delivery infrastructure,
                we ensure that quality electrical products reach every corner of the country.
              </p>
              <div className="intro-stats">
                <div className="intro-stat">
                  <span className="intro-stat-num">18+</span>
                  <span className="intro-stat-label">Years Experience</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">5000+</span>
                  <span className="intro-stat-label">Products</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">10K+</span>
                  <span className="intro-stat-label">Happy Clients</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">500+</span>
                  <span className="intro-stat-label">Dealer Partners</span>
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
                To provide every Indian household and business with access to safe, high-quality,
                and affordable electrical products, backed by expert guidance and reliable after-sales support.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🔭</div>
              <h3>Our Vision</h3>
              <p>
                To be India's most trusted electrical products company — known for integrity,
                quality, and innovation — while contributing to a safer and more energy-efficient nation.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>Our Values</h3>
              <p>
                Quality without compromise. Transparency in every transaction. Respect for customers,
                partners, and the environment. These principles guide everything we do at Electracon.
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
          <p className="section-subtitle">Experienced professionals dedicated to serving your electrical needs</p>
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
            <p>Explore our wide range of electrical products or get in touch for bulk inquiries and project support.</p>
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
