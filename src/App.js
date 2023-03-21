import React from 'react';
import Planners from './components/onemore.js';
import London from './components/London.js';
import MyComponent from './components/testss.js';
import Weather from './components/weather.js';
//import './london.css';
//import './components/background.sass';
import './sass/global.scss';
import Hero from './components/hero.js';
//import TravelSearchInput from './components/newTry.js';



function PlannerTravel() {
  return (
    <div className="App">
      <div className='hero'>
     
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