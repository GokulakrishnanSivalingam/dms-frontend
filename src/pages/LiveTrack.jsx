import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import './LiveTrack.css';

const LiveTrack = () => {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('weather');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const API_KEY = '5c5e532600f2442f5be8007e9a36074d';
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Chennai&appid=${API_KEY}&units=metric`
        );
        const weatherData = await weatherResponse.json();
        setWeather(weatherData);

        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=Chennai&appid=${API_KEY}&units=metric`
        );
        const forecastData = await forecastResponse.json();
        setForecast(forecastData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const renderWeatherMap = () => (
    <div className="map-container">
      <iframe
        title="Weather Map"
        width="100%"
        height="600"
        frameBorder="0"
        src="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=13&lon=80&zoom=10"
        allowFullScreen
      />
    </div>
  );

  const renderHeatMap = () => (
    <div className="map-container">
      <iframe
        title="Heat Map"
        width="100%"
        height="600"
        frameBorder="0"
        src="https://openweathermap.org/weathermap?basemap=map&cities=true&layer=clouds&lat=13&lon=80&zoom=10"
        allowFullScreen
      />
    </div>
  );

  const renderForecast = () => {
    if (!forecast) return null;

    return (
      <div className="forecast-container">
        <div className="current-conditions">
          {weather && (
            <div className="current-weather-card">
              <h3>Current Weather</h3>
              <div className="weather-icon">
                <img 
                  src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
              </div>
              <div className="weather-info">
                <p className="temperature">{Math.round(weather.main.temp)}°C</p>
                <p className="description">{weather.weather[0].description}</p>
                <div className="details">
                  <span>Humidity: {weather.main.humidity}%</span>
                  <span>Wind: {weather.wind.speed} m/s</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="forecast-grid">
          {forecast.list.slice(0, 8).map((item, index) => (
            <div key={index} className="forecast-card">
              <p className="time">{new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: 'numeric', hour12: true })}</p>
              <img 
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                alt={item.weather[0].description}
              />
              <p className="temp">{Math.round(item.main.temp)}°C</p>
              <p className="desc">{item.weather[0].description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="live-track">
      <Header />
      <main className="live-track-content">
        <section className="track-section">
          <div className="container">
            <h1>Live Weather Tracking</h1>
            
            <div className="track-tabs">
              <button 
                className={`tab-button ${activeTab === 'weather' ? 'active' : ''}`}
                onClick={() => setActiveTab('weather')}
              >
                Weather Map
              </button>
              <button 
                className={`tab-button ${activeTab === 'heat' ? 'active' : ''}`}
                onClick={() => setActiveTab('heat')}
              >
                Heat Map
              </button>
              <button 
                className={`tab-button ${activeTab === 'forecast' ? 'active' : ''}`}
                onClick={() => setActiveTab('forecast')}
              >
                Forecast
              </button>
            </div>

            {loading ? (
              <div className="loading">Loading weather data...</div>
            ) : (
              <div className="track-content">
                {activeTab === 'weather' && renderWeatherMap()}
                {activeTab === 'heat' && renderHeatMap()}
                {activeTab === 'forecast' && renderForecast()}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LiveTrack; 