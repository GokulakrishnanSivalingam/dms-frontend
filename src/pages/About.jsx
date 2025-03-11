import React from 'react';
import Header from '../components/Header';
import './About.css';

const About = () => {
  const safetyTips = [
    {
      title: "Before a Disaster",
      tips: [
        "Create an emergency kit with essential supplies",
        "Develop a family communication plan",
        "Know your evacuation routes",
        "Stay informed about local emergency plans"
      ]
    },
    {
      title: "During a Disaster",
      tips: [
        "Stay calm and follow official instructions",
        "Keep emergency numbers handy",
        "Use emergency services wisely",
        "Help others if you are able"
      ]
    },
    {
      title: "After a Disaster",
      tips: [
        "Check for injuries and seek medical help if needed",
        "Document damage for insurance purposes",
        "Be cautious when returning home",
        "Support community recovery efforts"
      ]
    }
  ];

  return (
    <div className="about-page">
      <Header />
      <main className="about-content">
        <section className="about-hero">
          <div className="container">
            <h1>About CRISIZ</h1>
            <p className="hero-description">
              Disaster Management System (CRISIZ) is a comprehensive platform designed to provide immediate assistance and vital information during emergencies.
            </p>
          </div>
        </section>

        <section className="mission-section">
          <div className="container">
            <h2>Our Mission</h2>
            <div className="mission-content">
              <div className="mission-text">
                <p>
                  We strive to create a safer community by providing rapid emergency response and essential disaster management resources. Our goal is to minimize the impact of disasters through preparedness, quick response, and recovery support.
                </p>
              </div>
              <div className="mission-stats">
                <div className="stat-item">
                  <h3>24/7</h3>
                  <p>Emergency Support</p>
                </div>
                <div className="stat-item">
                  <h3>100+</h3>
                  <p>Trained Responders</p>
                </div>
                <div className="stat-item">
                  <h3>15min</h3>
                  <p>Average Response Time</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="safety-section">
          <div className="container">
            <h2>Safety Guidelines</h2>
            <div className="safety-grid">
              {safetyTips.map((category, index) => (
                <div key={index} className="safety-card">
                  <h3>{category.title}</h3>
                  <ul>
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex}>{tip}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container">
            <h2>Our Team</h2>
            <p className="team-subtitle">Velammal Engineering College</p>
            <div className="team-grid">
              <div className="team-card">
                <div className="team-header">
                  <span className="team-initial">G</span>
                  <div className="team-info">
                    <h3>Gokulakrishnan</h3>
                    <p className="role">Team Lead</p>
                  </div>
                </div>
                <p className="description">
                  Frontend Developer and UI/UX Designer
                </p>
                <div className="social-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="team-card">
                <div className="team-header">
                  <span className="team-initial">S</span>
                  <div className="team-info">
                    <h3>Sanjeev Kumar</h3>
                    <p className="role">Backend Developer</p>
                  </div>
                </div>
                <p className="description">
                  Database and Server Management
                </p>
                <div className="social-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="team-card">
                <div className="team-header">
                  <span className="team-initial">G</span>
                  <div className="team-info">
                    <h3>Gokulraj</h3>
                    <p className="role"> frontend Developer</p>
                  </div>
                </div>
                <p className="description">
                  API Integration and Testing
                </p>
                <div className="social-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>

              <div className="team-card">
                <div className="team-header">
                  <span className="team-initial">P</span>
                  <div className="team-info">
                    <h3>Prasanth</h3>
                    <p className="role">Frontend Developer</p>
                  </div>
                </div>
                <p className="description">
                  UI Components and Responsive Design
                </p>
                <div className="social-links">
                  <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <h3>Email</h3>
                <p>support@dms-system.com</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <h3>Emergency Hotline</h3>
                <p>911</p>
              </div>
              <div className="contact-item">
                <i className="fas fa-location-dot"></i>
                <h3>Location</h3>
                <p>Your City, Country</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About; 
