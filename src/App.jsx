import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'
import Chatbot from './components/Chatbot'
import './App.css'

const App = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch("https://dms-server-1-kfqk.onrender.com/api/news"); 
      const data = await response.json();
      
      const disasterNews = data.articles.filter(article => {
        const keywords = [
          "India","disaster", "emergency", "earthquake", "flood", "hurricane",
          "tsunami", "wildfire", "evacuation", "rescue", "catastrophe",
          "storm", "cyclone", "landslide", "drought", "volcanic"
        ];
  
        const content = (article.title + " " + article.description).toLowerCase();
        return keywords.some(keyword => content.includes(keyword));
      });
  
      setNews(disasterNews.slice(0, 6));
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

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
                <button onClick={() => handleNavigation('/learn-more')} className="primary-btn">
                  Learn More
                </button>
                <button onClick={() => handleNavigation('/emergency')} className="secondary-btn">
                  Emergency Call
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3" alt="Emergency Response" />
            </div>
          </div>
        </section>

        

        {/* New News Section */}
        <section className="news-section">
          <div className="container">
            <h2>Latest Emergency News</h2>
            <p className="section-description">Stay informed about recent disasters and emergency situations</p>
            
            <div className="news-grid">
              {loading ? (
                <div className="loading">Loading news...</div>
              ) : (
                news.map((article, index) => (
                  <div key={index} className="news-card">
                    <div className="news-image">
                      <img 
                        src={article.urlToImage || 'default-news-image.jpg'} 
                        alt={article.title}
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/300x200?text=News';
                        }}
                      />
                    </div>
                    <div className="news-content">
                      <h3>{article.title}</h3>
                      <p>{article.description}</p>
                      <div className="news-meta">
                        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                        <a 
                          href={article.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="read-more"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
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
                  <button 
                    onClick={() => handleNavigation('/emergency')} 
                    className="card-button"
                  >
                    Get Help
                  </button>
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
                <a href="tel:112" className="phone-number">112</a>
                <p>Available 24/7</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🚑</div>
                <h3>Ambulance</h3>
                <a href="tel:108" className="phone-number">108</a>
                <p>Medical Emergency</p>
              </div>
              <div className="contact-card">
                <div className="contact-icon">🚒</div>
                <h3>Fire Brigade</h3>
                <a href="tel:102" className="phone-number">102</a>
                <p>Fire Emergency</p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
  <div className="container">
    <p>&copy; 2025 Disaster Management System. All rights reserved.</p>
    
    <div className="social-links">
      <a href="https://www.instagram.com/crisiz2025?igsh=a3kwamV1ZzVnNTlt" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter (X)" />
      </a>
    </div>

    <div className="emergency-footer">
      <p>For Emergencies: <a href="tel:112">112</a></p>
    </div>
  </div>
</footer>
      </main>
      <Chatbot />
    </div>
  )
}

export default App
