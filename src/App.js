import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Planners from './components/oneMore.js';
import London from './components/london.js';
import MyComponent from './components/buses.js';
import Weather from './components/weather.js';
import './styles/global.css';
import './styles/style.scss';
import Hero from './components/hero.js';
import Navbar from './components/main/navbar.js';

// import TimeOut from './components/timeout.js';
// import About from './components/about.js';
// import Restaurants from './components/restaurants.js';
// import Navbar from './components/main/navbar.js';


function PlannerTravel() {
  return (
    <div className="App">



      <div className='hero'>
          <Navbar/>
           <Hero/>
       </div>
      <div>
          <Weather /> 
      </div>
          <London />
          <MyComponent />
          <br/>
          <Planners />
          {/* <TravelSearchInput/> */}
      </div>
  );
}

export default PlannerTravel;


{/* <JourneyPlanner /> this is from my json */}