import React, { useState } from 'react';
import './Emergency.css';
import Header from './components/Header';
function Emergency () {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [emergencyType, setEmergencyType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Emergency details:', { location, description, emergencyType });
  };

  const emergencyTypes = [
    { id: 'fire', label: 'Fire Emergency', icon: '🔥' },
    { id: 'medical', label: 'Medical Emergency', icon: '🚑' },
    { id: 'police', label: 'Police Emergency', icon: '👮' },
    { id: 'natural', label: 'Natural Disaster', icon: '🌪️' }
  ];

  return (
    <div>
    <Header/>
  
    <div className="emergency-container">
      <div className="emergency-header">
        <h1>Emergency Response Center</h1>
        <div className="emergency-contacts">
          <div className="contact-card">
            <h3>Emergency Hotline</h3>
            <a href="tel:911" className="phone-number">911</a>
          </div>
        </div>
      </div>

      <div className="emergency-content">
        <div className="emergency-types">
          {emergencyTypes.map((type) => (
            <button
              key={type.id}
              className={`type-button ${emergencyType === type.id ? 'active' : ''}`}
              onClick={() => setEmergencyType(type.id)}
            >
              <span className="type-icon">{type.icon}</span>
              {type.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="emergency-form">
          <div className="form-group">
            <label>Your Location</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              required
            />
          </div>

          <div className="form-group">
            <label>Emergency Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the emergency situation"
              required
            />
          </div>

          <button type="submit" className="submit-button">
            Request Emergency Assistance
          </button>
        </form>
      </div>

      <div className="safety-tips">
        <h3>Safety Tips</h3>
        <ul>
          <li>Stay calm and assess the situation</li>
          <li>Move to a safe location if necessary</li>
          <li>Call emergency services immediately</li>
          <li>Follow instructions from emergency personnel</li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Emergency; 