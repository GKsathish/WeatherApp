// src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Components/Weather';
import SearchBar from './Components/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

import "bootstrap-icons/font/bootstrap-icons.css";


const App = () => {
  const [weather, setWeather] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const fetchWeather = async (query) => {
    try {
      const locationResponse = await axios.get(`https://geocoding-api.open-meteo.com/v1/search`, {
        params: { name: query },
      });

      if (locationResponse.data.results && locationResponse.data.results.length > 0) {
        const { latitude, longitude, name } = locationResponse.data.results[0];
        const weatherResponse = await axios.get(`https://api.open-meteo.com/v1/forecast`, {
          params: {
            latitude,
            longitude,
            current_weather: true,
          },
        });

        setWeather({ ...weatherResponse.data, city: name });
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Unable to fetch weather data. Please try again.");
    }
  };


  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
    <Header />
    <div className='container '>
<div className='row m-0'>
  <div className='col-12 mx-0 card   my-5'>
  <div className={`app  d-flex justify-content-center align-content-center`}>
      <div className="container p-5 mx-5">
     <div className='d-flex justify-content-between'>
     <h1 className='my-2'><span><i className="bi bi-cloud-sun mx-3 "></i></span>Weather App</h1>
        <span onClick={toggleDarkMode} className="btn btn-secondary my-3">
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </span>
     </div>
     <div>
     <SearchBar onSearch={fetchWeather} />
        <Weather weather={weather} />
     </div>

      </div>
    </div>
  </div>
</div>
</div>
<Footer/> 
    </div>
   
  );
};

export default App;
