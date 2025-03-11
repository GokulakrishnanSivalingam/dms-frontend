import React from 'react'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import Chatbot from './components/Chatbot'

import './App.css'

const App = () => {
  const disasterInfo = [
    {
      id: 1,
      icon: '🌊',
      title: 'Flood Emergency',
      description: 'Immediate response to flooding with evacuation support and rescue operations.',
      tips: ['Move to higher ground', 'Avoid walking in moving water', 'Listen to emergency broadcasts']
    },
    {
      id: 2,
      icon: '🔥',
      title: 'Fire Emergency',
      description: 'Quick response to fire emergencies with professional firefighting teams.',
      tips: ['Exit building immediately', 'Call emergency services', 'Stay low to avoid smoke']
    },
    {
      id: 3,
      icon: '🌪️',
      title: 'Cyclone Alert',
      description: 'Early warning systems and evacuation procedures for cyclone-prone areas.',
      tips: ['Stay indoors', 'Keep emergency kit ready', 'Follow evacuation orders']
    },
   
    {
      id: 4,
      icon: '🌍',
      title: 'Earthquake Emergency',
      description: 'Rapid response and rescue operations for earthquake-affected areas.',
      tips: ['Drop, cover, and hold on', 'Stay away from windows', 'Move to open spaces after shaking stops']
    }
  ];

  return (
    <div className="app">
      <Header />
      <main>
        <section className="hero">
          <div className="hero-split">
            <div className="hero-content">
              <h1>Emergency Response System</h1>
              <p>Quick and efficient disaster management solutions for immediate assistance during emergencies. We're here to help 24/7.</p>
              <div className="hero-buttons">
                <Link to="/emergency" className="primary-btn">Learn More</Link>
                <Link to="/emergency" className="secondary-btn">Emergency Call</Link>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3" alt="Emergency Response" />
            </div>
          </div>
        </section>

        <section className="disaster-info-section">
          <div className="container">
            <h2>Disaster Information Center</h2>
            <p className="section-description">Stay informed and prepared for various types of emergencies</p>
            
            <div className="disaster-grid">
              {disasterInfo.map((disaster) => (
                <div key={disaster.id} className="disaster-card">
                  <div className="card-icon">{disaster.icon}</div>
                  <h3>{disaster.title}</h3>
                  <p>{disaster.description}</p>
                  <div className="safety-tips">
                    <h4>Safety Tips:</h4>
                    <ul>
                      {disaster.tips.map((tip, index) => (
                        <li key={index}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/emergency" className="card-button">Get Help</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="emergency-contact">
          <div className="container">
            <h2>Emergency Contacts</h2>
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Emergency Hotline</h3>
                <a href="tel:911" className="phone-number">911</a>
                <p>Available 24/7</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🚑</div>
                <h3>Ambulance</h3>
                <a href="tel:102" className="phone-number">102</a>
                <p>Medical Emergency</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🚒</div>
                <h3>Fire Brigade</h3>
                <a href="tel:101" className="phone-number">101</a>
                <p>Fire Emergency</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <p>&copy; 2024 Disaster Management System. All rights reserved.</p>
            <div className="emergency-footer">
              <p>For Emergencies: <a href="tel:911">911</a></p>
            </div>
          </div>
        </footer>
      </main>
      <Chatbot />
    </div>
  )
}

export default App
