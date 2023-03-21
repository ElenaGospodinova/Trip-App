import React, { useState } from 'react';
//import axios from 'axios';

function FromTo() {

    const [startStation, setStartStation] = useState('');
    const [endStation, setEndStation] = useState('');
    const [journeys, setJourneys] = useState([]);
    
    const handleSubmit = (e) => {
      e.preventDefault();
      // const startStation = 'Westminster';
      // const endStation = 'Bank';
      // const via = 'Jubilee';
      // const journeyPreference = 'LeastInterchange';
    
      //const url = `https://api.tfl.gov.uk/journey/journeyresults/1000266/to/1000013`;
//       const url = `  https://api.tfl.gov.uk/journey/journeyresults/1000266/to/1000013 | jq . | grep lineString
//       "lineString": "[[51.50100345276, -0.12485992101],[51.5009783417, -0.12441429778],[51.50106337511, -0.12298439272],[51.50170090818, -0.11955780858],[51.50334046308, -0.11302069463],[51.50334046308, -0.11302069463],[51.50398263824, -0.11045815313],[51.50426792153, -0.10863078519],[51.50435392304, -0.10727275095],[51.50428007336, -0.10492710023],[51.50428007336, -0.10492710023],[51.50407248611, -0.0987685702],[51.50422182972, -0.09577963576],[51.50438856048, -0.09441820849],[51.50474305469, -0.09299129429],[51.50495952019, -0.09247792387],[51.50527608892, -0.09148484967],[51.50575025934, -0.08967822594],[51.50586159146, -0.08823258945],[51.50583751486, -0.08785894256]]",
// etc.  `;
      const url = 'https://api.tfl.gov.uk/journey/journeyresults/E9%207AL/to/E1%206JJ?mode=bus&via=490012462S'
      fetch(url, {
        method: 'GET',
        headers: {
          'Cache-Control': 'no-cache',
        },
      })
      console.log(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data.journeys);
          setJourneys(data.journeys); // set the journeys state with the fetched data
        })
        .catch((err) => console.error(err));
    };
    
     


    //   fetch('https://api.tfl.gov.uk/Journey/JourneyResults/Stratford/to/Westminister?via=Jubilee&journeyPreference=LeastInterchange')
    //   .then(response => response.json())
    //   .then(data => {
    //     // Narrow down the data
    //     const narrowedData = data.map(item => ({
    //       id: item.id,
    //       name: item.name,
    //       description: item.description
    //     }));
        
        // Do something with the narrowed data
    //     console.log(narrowedData);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.log(error);
    //   });
    
      

    

    return (
        <div>
          <h1>Journey Planner with Fetch</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="start-station">Start Station:</label>
            <input type="text" id="start-station" value={startStation} onChange={(e) => setStartStation(e.target.value)} />
    
            <label htmlFor="end-station">End Station:</label>
            <input type="text" id="end-station" value={endStation} onChange={(e) => setEndStation(e.target.value)} />
    
            <button type="submit">Plan Journey</button>
          </form>
    
          {journeys.map(journey => (
            <div key={journey.id}>
              <h2>{journey.duration}</h2>
              <p>{journey.startDateTime}</p>
              <p>{journey.endDateTime}</p>
            </div>
          ))}
        </div>
      );
 
}


export default FromTo;
