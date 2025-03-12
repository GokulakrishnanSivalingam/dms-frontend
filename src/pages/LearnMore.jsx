import React from 'react';
import Header from '../components/Header';
import './LearnMore.css';

const LearnMore = () => {
  const disasters = [
    {
      id: 1,
      title: 'Flood Emergency',
      icon: '🌊',
      description: 'Floods can occur rapidly due to heavy rainfall, storm surge, or dam failures.',
      causes: [
        'Heavy rainfall',
        'Storm surge',
        'Dam/levee failures',
        'Rapid snow melt',
        'Urban drainage problems'
      ],
      preventiveMeasures: [
        'Monitor local weather updates',
        'Keep emergency supplies ready',
        'Know your evacuation routes',
        'Install flood barriers',
        'Maintain proper drainage'
      ],
      emergencySteps: [
        'Move to higher ground immediately',
        'Avoid walking through moving water',
        'Listen to emergency broadcasts',
        'Follow evacuation orders',
        'Document damage for insurance'
      ]
    },
    {
      id: 2,
      title: 'Fire Emergency',
      icon: '🔥',
      description: 'Fire emergencies can spread rapidly and pose immediate danger to life and property.',
      causes: [
        'Electrical malfunctions',
        'Kitchen accidents',
        'Flammable materials',
        'Lightning strikes',
        'Human negligence'
      ],
      preventiveMeasures: [
        'Install smoke detectors',
        'Keep fire extinguishers ready',
        'Create evacuation plan',
        'Regular electrical maintenance',
        'Safe storage of flammables'
      ],
      emergencySteps: [
        'Call fire emergency (101)',
        'Evacuate immediately',
        'Stay low to avoid smoke',
        'Use fire extinguisher if safe',
        'Close doors to contain fire'
      ]
    },
    {
      id: 3,
      title: 'Cyclone Alert',
      icon: '🌪️',
      description: 'Cyclones bring strong winds, heavy rainfall, and potential flooding to coastal areas.',
      causes: [
        'Low pressure systems',
        'Warm ocean temperatures',
        'Atmospheric instability',
        'Coriolis effect',
        'Sea surface conditions'
      ],
      preventiveMeasures: [
        'Monitor weather updates',
        'Secure loose objects',
        'Stock emergency supplies',
        'Strengthen building structures',
        'Know evacuation routes'
      ],
      emergencySteps: [
        'Stay indoors',
        'Keep emergency kit ready',
        'Follow evacuation orders',
        'Avoid coastal areas',
        'Listen to official instructions'
      ]
    },
    {
      id: 4,
      title: 'Earthquake Emergency',
      icon: '🌍',
      description: 'Earthquakes can strike without warning and cause significant damage.',
      causes: [
        'Tectonic plate movement',
        'Fault line activity',
        'Volcanic activity',
        'Human activities',
        'Underground explosions'
      ],
      preventiveMeasures: [
        'Identify safe spots',
        'Secure heavy furniture',
        'Keep emergency supplies',
        'Know building exits',
        'Practice earthquake drills'
      ],
      emergencySteps: [
        'Drop, Cover, and Hold On',
        'Stay away from windows',
        'Move to open spaces after shaking',
        'Check for injuries',
        'Be prepared for aftershocks'
      ]
    }
  ];

  return (
    <div className="learn-more">
      <Header />
      <main className="learn-more-content">
        <section className="intro-section">
          <h1>Understanding Disasters</h1>
          <p>Learn about different types of disasters, their causes, and how to prepare for them.</p>
        </section>

        <section className="disasters-section">
          {disasters.map(disaster => (
            <div key={disaster.id} className="disaster-detail-card">
              <div className="disaster-header">
                <span className="disaster-icon">{disaster.icon}</span>
                <h2>{disaster.title}</h2>
              </div>
              
              <p className="disaster-description">{disaster.description}</p>

              <div className="info-grid">
                <div className="info-section">
                  <h3>Common Causes</h3>
                  <ul>
                    {disaster.causes.map((cause, index) => (
                      <li key={index}>{cause}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-section">
                  <h3>Preventive Measures</h3>
                  <ul>
                    {disaster.preventiveMeasures.map((measure, index) => (
                      <li key={index}>{measure}</li>
                    ))}
                  </ul>
                </div>

                <div className="info-section">
                  <h3>Emergency Steps</h3>
                  <ul>
                    {disaster.emergencySteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default LearnMore; 