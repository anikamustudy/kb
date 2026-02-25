import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
  { name: 'कमला शर्मा', role: 'संस्थापक तथा मालिक', icon: '👩‍💼', bio: 'जातीय फेसनमा १४+ वर्षको अनुभव। कुटेश्वरी बस्त्रालयलाई पारिवारिक बुटिकबाट प्रिय पोशाक गन्तव्यमा परिणत गर्ने जोशिलो संचालक।' },
  { name: 'सुनिता थापा', role: 'संग्रह प्रमुख', icon: '👩‍🎨', bio: 'कालातीत डिजाइनका लागि सूक्ष्म दृष्टि भएकी कुशल फेसन स्टाइलिस्ट। हाम्रो संग्रहमा हरेक साडी, कुर्था र पोशाक हातले छान्ने।' },
  { name: 'राजन अधिकारी', role: 'सञ्चालन प्रबन्धक', icon: '👨‍💼', bio: 'सहज डेलिभरी र ग्राहक सन्तुष्टि सुनिश्चित गर्ने। आपूर्ति श्रृङ्खला, लजिस्टिक्स र गुणस्तर नियन्त्रण सम्हाल्ने।' },
  { name: 'प्रिया खत्री', role: 'ग्राहक सम्बन्ध', icon: '👩‍💼', bio: 'हरेक ग्राहकलाई मूल्यवान महसुस गराउन समर्पित। शैली सल्लाह, फिर्ता र व्यक्तिगत किनमेल सहयोग व्यवस्थापन।' },
];

const milestones = [
  { year: '२०१०', event: 'काठमाडौंमा प्रामाणिक जातीय पोशाकमा केन्द्रित कुटेश्वरी बस्त्रालयको स्थापना।' },
  { year: '२०१३', event: 'कढाई साडी र डिजाइनर कुर्थाको संग्रह विस्तार।' },
  { year: '२०१६', event: 'दोस्रो शाखा खोलियो र कुशल बुनकर कारीगरहरूसँग साझेदारी सुरु।' },
  { year: '२०१९', event: 'सम्पूर्ण नेपालका ग्राहकहरूको सेवाका लागि अनलाइन पसल सुरु।' },
  { year: '२०२२', event: '५,०००+ सन्तुष्ट ग्राहकको माइलस्टोन हासिल।' },
  { year: '२०२४', event: 'नेपालका सबै प्रमुख सहरहरूमा डेलिभरी सहित राष्ट्रव्यापी उपस्थिति।' },
];

const About = () => {
  return (
    <div className="about-page">

      {/* ── Page Banner ──────────────────────────────────────────────── */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-content">
            <h1>कुटेश्वरी बस्त्रालयको बारेमा</h1>
            <div className="breadcrumb">
              <Link to="/">गृहपृष्ठ</Link>
              <span> / </span>
              <span>हाम्रो बारेमा</span>
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
                <img src="/logo.png" alt="कुटेश्वरी बस्त्रालय" style={{ maxWidth: '160px', maxHeight: '160px', objectFit: 'contain', opacity: 0.85 }} />
              </div>
            </div>
            <div className="intro-text">
              <span className="section-label">हामी को हौं</span>
              <h2 className="section-heading">परम्पराको उत्सव — सुन्दर जातीय पोशाकमार्फत</h2>
              <p>
                कुटेश्वरी बस्त्रालय नेपालको सबैभन्दा भरपर्दो जातीय पोशाक पसलहरूमध्ये एक हो,
                जुन काठमाडौंमा आधारित छ। सन् २०१० मा स्थापनादेखि हामी परम्परागत दक्षिण एशियाली
                पोशाकको सौन्दर्य सुरक्षित राख्न र मनाउन जुटेका छौं।
              </p>
              <p>
                हाम्रो संग्रहमा रेशम, सूती, शिफन र जर्जेट साडी; सुन्दर कुर्था; परम्परागत सिराक;
                हस्तनिर्मित दसाना; र उत्सवी चकला समेट्छ — सबै क्षेत्रका कुशल कारीगर र
                बुनकरहरूबाट प्राप्त।
              </p>
              <p>
                ५,०००+ खुसी ग्राहकको बढ्दो आधार र सम्पूर्ण नेपालमा डेलिभरी सहित,
                हामी हरेक घरमा प्रामाणिक जातीय फेसन पुर्‍याउन प्रतिबद्ध छौं।
              </p>
              <div className="intro-stats">
                <div className="intro-stat">
                  <span className="intro-stat-num">१४+</span>
                  <span className="intro-stat-label">वर्षको अनुभव</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">५००+</span>
                  <span className="intro-stat-label">डिजाइनहरू</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">५हजार+</span>
                  <span className="intro-stat-label">सन्तुष्ट ग्राहक</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">५०+</span>
                  <span className="intro-stat-label">कारीगर साझेदार</span>
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
              <h3>हाम्रो लक्ष्य</h3>
              <p>
                प्रत्येक महिलालाई प्रामाणिक, सुन्दर जातीय पोशाक सुलभ बनाउनु —
                हाम्रो हरेक पोशाकमार्फत संस्कृति, परम्परा र व्यक्तिगत शैलीको उत्सव मनाउनु।
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🔭</div>
              <h3>हाम्रो दृष्टिकोण</h3>
              <p>
                नेपालको सबैभन्दा प्रिय जातीय पोशाक गन्तव्य बन्नु — प्रामाणिकता,
                सौन्दर्य र हार्दिक व्यक्तिगत सेवाका लागि परिचित।
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>हाम्रा मूल्यहरू</h3>
              <p>
                हरेक कपडामा प्रामाणिकता। कारीगर र तिनीहरूको शिल्पप्रति सम्मान। हरेक
                ग्राहक अन्तरक्रियामा आनन्द। यी सिद्धान्तहरूले कुटेश्वरी बस्त्रालयमा
                हाम्रा सबै काम निर्देशित गर्छन्।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Journey ──────────────────────────────────────────────── */}
      <section className="journey-section">
        <div className="container">
          <span className="section-label center">हाम्रो कथा</span>
          <h2 className="section-heading center">हाम्रो यात्रा</h2>
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
          <span className="section-label center">हाम्रा मानिसहरू</span>
          <h2 className="section-heading center">हाम्रो टोली</h2>
          <p className="section-subtitle">जातीय फेसन र ग्राहक सेवाप्रति जोशिला समर्पित पेशेवरहरू</p>
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
            <h2>हाम्रो संग्रह हेर्न तयार हुनुहुन्छ?</h2>
            <p>हाम्रा जातीय पोशाकहरू ब्राउज गर्नुहोस् वा थोक अर्डर र कस्टम डिजाइनका लागि सम्पर्क गर्नुहोस्।</p>
            <div className="about-cta-actions">
              <Link to="/products" className="btn btn-primary btn-lg">उत्पादनहरू हेर्नुहोस्</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">सम्पर्क गर्नुहोस्</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
