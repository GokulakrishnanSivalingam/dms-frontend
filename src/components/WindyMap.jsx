import React, { useEffect, useRef, useState } from "react";

const WindyMap = ({ mapType = "radar" }) => {
  const mapRef = useRef(null);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const windyAPIKey = "aUkMeip6dlNcpiMT0ytyDQqJm4DVmXS6"; 

    const loadWindyScript = () => {
      return new Promise((resolve, reject) => {
        if (window.windyInit) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = "https://api.windy.com/assets/map-forecast/libBoot.js";
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadWindyScript().then(() => {
      if (window.windyInit) {
        window.windyInit(
          {
            key: windyAPIKey,
            lat: 13.0827, // Chennai latitude
            lon: 80.2707, // Chennai longitude
            zoom: 8,
            overlay: mapType, // 'radar' or 'satellite'
            container: "windy-map",
          },
          (windyAPI) => {
            const { store, picker } = windyAPI;
            store.set("overlay", mapType);

            picker.on("pickerOpened", ({ values }) => {
              setWeatherData({
                temperature: Math.round(values.temp) + "°C",
                windSpeed: Math.round(values.wind) + " m/s",
                windDir: values.windDir + "°",
                clouds: Math.round(values.clouds) + "%",
                pressure: Math.round(values.pressure) + " hPa",
                humidity: values.rh + "%",
                precipitation: values.precipitation + " mm",
              });
            });
          }
        );
      }
    });

    return () => {
      if (window.windy) {
        window.windy.remove();
      }
    };
  }, [mapType]);

  return (
    <div className="windy-container">
      <div
        id="windy-map"
        ref={mapRef}
        style={{
          width: "100%",
          height: "600px",
          background: "#202020",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      />
      {weatherData && (
        <div className="weather-info-overlay">
          <h3>Live Weather Data</h3>
          <div className="weather-details">
            <div className="weather-item">
              <span className="label">Temperature:</span>
              <span className="value">{weatherData.temperature}</span>
            </div>
            <div className="weather-item">
              <span className="label">Wind:</span>
              <span className="value">
                {weatherData.windSpeed} @ {weatherData.windDir}
              </span>
            </div>
            <div className="weather-item">
              <span className="label">Clouds:</span>
              <span className="value">{weatherData.clouds}</span>
            </div>
            <div className="weather-item">
              <span className="label">Pressure:</span>
              <span className="value">{weatherData.pressure}</span>
            </div>
            <div className="weather-item">
              <span className="label">Humidity:</span>
              <span className="value">{weatherData.humidity}</span>
            </div>
            <div className="weather-item">
              <span className="label">Precipitation:</span>
              <span className="value">{weatherData.precipitation}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WindyMap;
