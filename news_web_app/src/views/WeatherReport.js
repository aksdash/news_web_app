// WeatherReport.js
import React from 'react';

const WeatherReport = () => {
  const weatherData = {
    temperature: '25°C',
    humidity: '60%',
    windSpeed: '15 km/h',
    conditions: 'Partly Cloudy',
  };

  return (
    <section id="weather-report" style={styles.weatherReport}>
      <div style={styles.weatherItem}>
        <span role="img" aria-label="Temperature" style={styles.icon}>
          🌡️
        </span>
        <p>{weatherData.temperature}</p>
      </div>

      <div style={styles.weatherItem}>
        <span role="img" aria-label="Humidity" style={styles.icon}>
          💧
        </span>
        <p>{weatherData.humidity}</p>
      </div>

      <div style={styles.weatherItem}>
        <span role="img" aria-label="Wind Speed" style={styles.icon}>
          🌬️
        </span>
        <p>{weatherData.windSpeed}</p>
      </div>

      <div style={styles.weatherItem}>
        <span role="img" aria-label="Conditions" style={styles.icon}>
          ☁️
        </span>
        <p>{weatherData.conditions}</p>
      </div>
    </section>
  );
};

const styles = {
  weatherReport: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100px',
    marginLeft : '30px',
    marginRight : '30px',
    backgroundColor: '#f2f2f2',
  },
  weatherItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '2em',
    marginBottom: '10px',
  },
};

export default WeatherReport;
