// // src/components/Weather.js
// import React from 'react';

// const Weather = ({ weather }) => {
//   if (!weather) return <p className="mt-4 text-center">No weather data available. Please search for a city.</p>;

//   const { temperature, windspeed, weathercode } = weather.current_weather;

//   // Simplified mapping for weather description
//   const weatherDescriptions = {
//     0: 'Clear sky',
//     1: 'Mainly clear',
//     2: 'Partly cloudy',
//     3: 'Overcast',
//     // Add more mappings as needed
//   };

//   return (
//     <div className="mt-4 d-flex justify-content-between ">
//       <div>
//       <h3 className="text-center">{weather.city}</h3>
//       <p className="text-center">Temperature: {temperature}°C</p>
//       </div>
//       <div>
//       <p className="text-center">Weather:  {weatherDescriptions[weathercode]}</p>
//       <p className="text-center">Wind Speed:  {windspeed} km/h</p>
//       </div>
   
    
//     </div>
//   );
// };

// export default Weather;

// src/components/Weather.js
import React from 'react';

const Weather = ({ weather }) => {
  if (!weather) return <p className="mt-4 text-center">No weather data available. Please search for a city.</p>;

  const { temperature, windspeed, weathercode } = weather.current_weather;

  const weatherDescriptions = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    // Add more mappings as needed
  };

  return (
    <div className="mt-4 d-flex flex-column flex-md-row justify-content-between  bg-grey card rounded p-4">
      <div className='m-1'>
      <h5 className="text-center text-success"><span className='text-warning mx-1'>City: </span>{weather.city}</h5>
      <h6 className="text-center text-primary"><span className='text-warning mx-1'>Temperature: </span>  {temperature}°C</h6>
      </div>
   
  <div className='m-1'>
  <h6 className="text-center text-danger"> <span className='text-warning mx-1'>Weather:</span> {weatherDescriptions[weathercode] || 'Unknown'}</h6>
      <h6 className="text-center text-info"><span className='text-warning mx-1'>Wind Speed: </span>  {windspeed} km/h</h6>
  </div>
    </div>
  );
};

export default Weather;
