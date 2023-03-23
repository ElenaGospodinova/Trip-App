import React, { useState, useEffect } from 'react';

const API_KEY = '7499ff3bee5f4c15265dd79bd61f99e1';
const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=51.46&lon=0.36&appid=${API_KEY}`;


// function getCurrentTime() {
//   const date = new Date();
//   const hours = date.getHours();
//   const minutes = date.getMinutes();
//   const timeString = `${hours}:${minutes}`;
//   return timeString;
// }

function Weather() {
  //const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric' }));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
//currentn time 
// const [time, setTime] = useState(getCurrentTime());

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setTime(getCurrentTime());
//     }, 100);
//     return () => clearInterval(intervalId);
//   }, []);
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setWeatherData(data);
    };

    fetchWeatherData();
  }, []);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const temperature = Math.round(weatherData.main.temp - 273.15);
  const description = weatherData.weather[0].description;

  return (
    <div className='weather-box'>
      <div className='background'>
        <h4 className='time'>{currentTime}</h4>
        <h2 className='location'> {weatherData.name}</h2>
        <h4 className='temp'>{temperature}°C</h4>
        <p className='condition'>{description}</p>
      </div>
    </div>
  );
}


export default Weather;



// be2f10d9b84f1e81b3c9809e695ea4ca second API_KEY