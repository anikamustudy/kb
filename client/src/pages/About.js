import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
  { name: 'कमला शर्मा', role: 'संस्थापक र मालिक', icon: '👩‍💼', bio: 'पारम्परिक फेसनमा १४+ वर्षको अनुभव। कुटेश्वरी बस्त्रालयलाई पारिवारिक बुटिकबाट एक प्रिय पोशाक गन्तव्यमा रूपान्तरण गर्ने जुनूनी संकलक।' },
  { name: 'सुनिता थापा', role: 'संग्रह प्रमुख', icon: '👩‍🎨', bio: 'शाश्वत डिजाइनको आँखा भएकी कुशल फेसन स्टाइलिस्ट। हाम्रो संग्रहमा प्रत्येक सारी, कुर्था र पोशाक हातले छान्छिन्।' },
  { name: 'राजन अधिकारी', role: 'सञ्चालन प्रबन्धक', icon: '👨‍💼', bio: 'सहज डेलिभरी र ग्राहक सन्तुष्टि सुनिश्चित गर्ने। आपूर्ति श्रृंखला, लजिस्टिक्स र गुणस्तर नियन्त्रण सम्हाल्छन्।' },
  { name: 'प्रिया खत्री', role: 'ग्राहक सम्बन्ध', icon: '👩‍💼', bio: 'प्रत्येक ग्राहकलाई मूल्यवान महसुस गराउन समर्पित। शैली सल्लाह, फिर्ता र व्यक्तिगत किनमेल सहयोग सम्हाल्छिन्।' },
];

const milestones = [
  { year: '२०१०', event: 'काठमाडौंमा प्रामाणिक पारम्परिक पोशाकमा केन्द्रित भएर कुटेश्वरी बस्त्रालयको स्थापना।' },
  { year: '२०१३', event: 'कढाई सारी र डिजाइनर कुर्थाहरू समावेश गर्न संग्रह विस्तार।' },
  { year: '२०१६', event: 'दोस्रो पसल खोलियो र कुशल कारिगर बुनकरहरूसँग साझेदारी सुरु।' },
  { year: '२०१९', event: 'नेपालभर ग्राहकहरूलाई सेवा दिन अनलाइन पसल सुरु।' },
  { year: '२०२२', event: '५,०००+ सन्तुष्ट ग्राहकहरूको माइलस्टोन पूरा।' },
  { year: '२०२४', event: 'सबै प्रमुख सहरहरूमा डेलिभरी सहित राष्ट्रव्यापी उपस्थिति।' },
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
                <img src="/logo.png" alt="कुटेश्वरी बस्त्रालय" className="intro-logo-img" />
              </div>
            </div>
            <div className="intro-text">
              <span className="section-label">हामी को हौं</span>
              <h2 className="section-heading">सुन्दर पारम्परिक पोशाकद्वारा परम्परा मनाउँदै</h2>
              <p>
                कुटेश्वरी बस्त्रालय नेपालको सबैभन्दा विश्वसनीय पारम्परिक पोशाक पसलहरूमध्ये एक हो,
                काठमाडौंमा आधारित। २०१० मा स्थापना भएदेखि, हामी पारम्परिक दक्षिण एसियाली पोशाकको
                सौन्दर्य संरक्षण र उत्सव मनाउन जोशका साथ लागिपरेका छौं।
              </p>
              <p>
                हाम्रो सावधानीपूर्वक संकलित संग्रहमा रेशम, कपास, शिफन
                र जर्जेटका आकर्षक सारीहरू; सुन्दर कुर्थाहरू; पारम्परिक सिराकहरू; सुन्दर दसनाहरू;
                र उत्सवी चकलाहरू — सबै क्षेत्रका कुशल कारिगर र बुनकरहरूबाट प्राप्त गरिएका छन्।
              </p>
              <p>
                ५,०००+ खुसी ग्राहकहरूको बढ्दो आधार र नेपालभर डेलिभरीसहित,
                हामी प्रत्येक घरमा प्रामाणिक पारम्परिक फेसन पुर्‍याउन प्रतिबद्ध छौं।
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
                  <span className="intro-stat-label">खुसी ग्राहकहरू</span>
                </div>
                <div className="intro-stat">
                  <span className="intro-stat-num">५०+</span>
                  <span className="intro-stat-label">कारिगर साझेदारहरू</span>
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
                प्रत्येक महिलालाई प्रामाणिक, सुन्दर रूपमा निर्मित पारम्परिक पोशाक सुलभ बनाउनु —
                हामी प्रदान गर्ने प्रत्येक पोशाकसँग संस्कृति, परम्परा र व्यक्तिगत शैली मनाउँदै।
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🔭</div>
              <h3>हाम्रो दृष्टिकोण</h3>
              <p>
                नेपालको सबैभन्दा प्रिय पारम्परिक पोशाक गन्तव्य बन्नु — प्रामाणिकता,
                सौन्दर्य र प्रत्येक ग्राहकलाई विशेष महसुस गराउने न्यानो व्यक्तिगत स्पर्शका लागि जानिने।
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💎</div>
              <h3>हाम्रा मूल्यहरू</h3>
              <p>
                प्रत्येक कपडामा प्रामाणिकता। कारिगर र उनीहरूको शिल्पको लागि सम्मान। प्रत्येक
                ग्राहक अन्तरक्रियामा आनन्द। यी सिद्धान्तहरूले कुटेश्वरी बस्त्रालयमा हामी गर्ने
                सबै कुरा मार्गदर्शन गर्छन्।
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
          <h2 className="section-heading center">हाम्रो टोलीसँग भेट्नुहोस्</h2>
          <p className="section-subtitle">पारम्परिक फेसन र ग्राहक सेवाप्रति समर्पित पेशेवरहरू</p>
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
            <p>हाम्रो विस्तृत पारम्परिक पोशाकहरू ब्राउज गर्नुहोस् वा थोक अर्डर र कस्टम डिजाइनका लागि सम्पर्क गर्नुहोस्।</p>
            <div className="about-cta-actions">
              <Link to="/products" className="btn btn-primary btn-lg">उत्पादनहरू किन्नुहोस्</Link>
              <Link to="/contact" className="btn btn-outline btn-lg">हामीलाई सम्पर्क गर्नुहोस्</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
