// WeatherReport.js
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';

const WeatherReport = () => {
  let weatherData = {
    temperature: '25°C',
    humidity: '60%',
    windSpeed: '15 km/h',
    conditions: 'Partly Cloudy',
  };
  const [weather, setWeather] = useState(weatherData);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          // Fetch weather data using OpenWeatherMap API
          fetchWeatherData(latitude, longitude);
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchWeatherData = async (latitude, longitude) => {
    try {
      const apiKey = '4a19728f569e5cfb22738bb02d669753'; // Replace with your API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

      // Make a request to OpenWeatherMap API
      const response = await axios.get(apiUrl);
      console.log(response.data.name)
      weatherData = response.data
      const wt = {
         temperature : response.data.main.temp,
         city: response.data.name,
         humidity: response.data.main.humidity,
         windSpeed: response.data.wind.speed
       }
      setWeather(wt);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <section id="weather-report" style={styles.weatherReport}>
      <div style={styles.weatherItem}>
        <span role="img" aria-label="Temperature" style={styles.icon}>
          🌡️
        </span>
        <p>{weather.temperature}</p>
      </div>

      <div style={styles.weatherItem}>
        <span role="img" aria-label="Humidity" style={styles.icon}>
          💧
        </span>
        <p>{weather.humidity}</p>
      </div>

      <div style={styles.weatherItem}>
        <span role="img" aria-label="Wind Speed" style={styles.icon}>
          🌬️
        </span>
        <p>{weather.windSpeed}</p>
      </div>

      <div style={styles.weatherItem}>
        <span role="img" aria-label="City" style={styles.icon}>
          
        </span>
        <p>{weather.city}</p>
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
    marginLeft : '0px',
    marginRight : '0px',
    paddingLeft : '30px',
    paddingRight : '20px',
    backgroundColor: '#d3ebdb',

  },
  weatherItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    fontSize: '2em',
    marginBottom: '5px',
  },
};

export default WeatherReport;
