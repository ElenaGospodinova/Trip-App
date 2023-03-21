import React from 'react';
import  { useState } from 'react';
import lineData from '../tubePlanner.json';
import tube1 from './tube1.png';

function Planner() {
  
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [journey, setJourney] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Find the start and end stations in the tubeData
    const startLine = lineData.lines.find(line => line.stops.includes(startStation));
    const endLine = lineData.lines.find(line => line.stops.includes(endStation));
    
    // Check if the start and end stations are on the same line
    if (startLine.id === endLine.id) {
      const startIndex = startLine.stops.indexOf(startStation);
      const endIndex = startLine.stops.indexOf(endStation);
      // Create an array of stations on the same line between the start and end stations
      const journeyStations = startLine.stops.slice(
        
        Math.min(startIndex, endIndex), 
        Math.max(startIndex, endIndex) + 1);
      setJourney([journeyStations]);
      console.log(journeyStations);
    } else {
      // If the start and end stations are on different lines, find the stations where the lines intersect
      const interchangeStations = startLine.stops.filter(station => endLine.stops.includes(station));
      // Create an array of possible journeys with one interchange
      const possibleJourneys = [];
      interchangeStations.forEach(interchange => {
        const startLineIndex = startLine.stops.indexOf(startStation);
        const startInterchangeIndex = startLine.stops.indexOf(interchange);
        const endLineIndex = endLine.stops.indexOf(endStation);
        const endInterchangeIndex = endLine.stops.indexOf(interchange);
        
        const startLineJourneyStations = startLine.stops.slice(
          Math.min(startLineIndex, startInterchangeIndex), 
          Math.max(startLineIndex, startInterchangeIndex) + 1);

        const endLineJourneyStations = endLine.stops.slice(Math.min(endInterchangeIndex, endLineIndex), Math.max(endInterchangeIndex, endLineIndex) + 1);
        possibleJourneys.push([startLineJourneyStations, endLineJourneyStations]);
      });
      setJourney(possibleJourneys);
      console.log(possibleJourneys);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <label>
        Start Station:
        <input type="text" value={startStation} onChange={event => setStartStation(event.target.value)} />
      </label>
      <br />
      <label>
        End Station:
        <input type="text" value={endStation} onChange={event => setEndStation(event.target.value)} />
      </label>
      <br />
      <button className='btn' type="submit">Plan Journey</button>
    </form>


    {/* {journey.length > 0 ? (
  <div>
    <p className='running-tube'>{startStation} <img src={tube1} style={{width:"50px"}}/> {journey[0].name}  {endStation}</p>
    <img src={tube1} alt='London Tube Train' className='tube-m' />
  </div>
) : null} */}


{/* 
    {journey.length > 0 ? (
  <div>
    <p className='running-tube'>{startStation} <img src={tube1} style={{width:"50px"}}/>{endStation}</p>
    <img src={tube1} alt='London Tube Train' className='tube-m' />
  </div>
) : null} */}


    {journey.length > 0 ? (
      <div>
        {journey.map(journeyStations => (
          <p className='running-tube' key={journeyStations}>{journeyStations.join(' -> ')}</p>
        ))} <img src={tube1} alt='London Tube Train' className='tube-m' />
      </div>
    ) : null}
  </div>
  

  );
}
export default Planner;


    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <label>
    //       Start Station:
    //       <select value={startStation} onChange={event => setStartStation(event.target.value)}>
           
    //         {lineData.lines.map(line => line.stops.map(station => <option key={station}>{station}</option>))}
    //       </select>
    //     </label>
    //     <br />
    //     <label>
    //       End Station:
    //       <select value={endStation} onChange={event => setEndStation(event.target.value)}>
           
    //         {lineData.lines.map(line => line.stops.map(station => <option key={station}>{station}</option>))}
    //       </select>
    //     </label>
    //     <br />
    //     <button type="submit">Plan Journey</button>
    //   </form>
    //   {journey.length > 0 ? (
    //     <div>
    //       {journey.map(journeyStations => (
    //         <p key={journeyStations}>{journeyStations.join(' -> ')}</p>
    //       ))}
    //     </div>
    //   ) : null}
    // </div>

