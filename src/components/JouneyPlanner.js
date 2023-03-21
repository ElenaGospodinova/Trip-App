// import React, { useState } from 'react';
// import lineData from '../tubePlanner.json';

// function JourneyPlanner() {
//   const [startStation, setStartStation] = useState('');
//   const [endStation, setEndStation] = useState('');
//   const [journey, setJourney] = useState([]);
//   const [lineTubs, setTubes] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Find the start and end stations in the lineData
//     const startLine = lineData.lines.find(line => line.stops.includes(startStation));
//     const endLine = lineData.lines.find(line => line.stops.includes(endStation));
//     const lineTubs = startLine.name;

//     // Check if the start and end stations are on the same line
//     if (startLine.id === endLine.id) {
//       const startIndex = startLine.stops.indexOf(startStation);
//       const endIndex = startLine.stops.indexOf(endStation);
//       // Create an array of stations on the same line between the start and end stations
//       const journeyStations = startLine.stops.slice(Math.min(startIndex, endIndex), Math.max(startIndex, endIndex) + 1);
//       setJourney([journeyStations]);
//     } else {
//       // If the start and end stations are on different lines, find the stations where the lines intersect
//       const interchangeStations = startLine.stops.filter(station => endLine.stops.includes(station));
//       // Create an array of possible journeys with one interchange
//       const possibleJourneys = [];
//       interchangeStations.forEach((interchange, index) => {
//         const startLineIndex = startLine.stops.indexOf(startStation);
//         const startInterchangeIndex = startLine.stops.indexOf(interchange);
//         const endLineIndex = endLine.stops.indexOf(endStation);
//         const endInterchangeIndex = endLine.stops.indexOf(interchange);
//         const startLineJourneyStations = startLine.stops.slice(Math.min(startLineIndex, startInterchangeIndex), Math.max(startLineIndex, startInterchangeIndex) + 1);
//         const endLineJourneyStations = endLine.stops.slice(Math.min(endInterchangeIndex, endLineIndex), Math.max(endInterchangeIndex, endLineIndex) + 1);
//         possibleJourneys.push([...startLineJourneyStations, ...endLineJourneyStations]);
//       });

//       setJourney(possibleJourneys);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Start station:
//           <input type="text" value={startStation} onChange={(e) => setStartStation(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           End station:
//           <input type="text" value={endStation} onChange={(e) => setEndStation(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Plan Journey</button>
//       </form>

//       {journey.length > 0 ? (
//         <div>
//           {journey.map(journeyStations => (
//             <p key={startStation}>
//               Traveling from:

//               {startStation} to {endStation} on the {lineTubs.name} line.
//             <br />
//             <button onClick={() => setShowStations(!
//            {/* Stations{journeyStations.join(", ")} */}
//             </p>
//       ) : null}
//     </div>
//   );
// }

            
            
// export default JourneyPlanner;

      {/* {journey.length > 0 ? (
        <div>
          

    {journey.map(journeyStations => (
        <p key={startStation}> Traveling from: <p/>
        <br/>
        
  <p>{startStation} to {endStation} </p>
  <p> You need to take </p>
  {lineTubs} line: {journeyStations[0]} - {journeyStations[journeyStations.length-1]}
  {journey.length > 1 && (
    <span>Change to {lineTubs.name} line at {journeyStations[journeyStations.length-1]}</span>
  )}
</p>


    ))}
  </div>
) : null} */}

     
      {/* {journey.length > 0 ? (
        <div>
          {journey.map(journeyStations => (
            <p key={startStation}>{endStation.join}</p>
          ))}
        </div> */}
      {/* ) : null} */}
  









// import React from 'react';
// import  { useState } from 'react';
// import lineData from '../tubePlanner.json';

// function JourneyPlanner() {
//   const [startStation, setStartStation] = useState('');
//   const [endStation, setEndStation] = useState('');
//   const [journey, setJourney] = useState([]);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Find the start and end stations in the tubeData
//     const startLine = lineData.lines.find(line => line.stops.includes(startStation));
//     const endLine = lineData.lines.find(line => line.stops.includes(endStation));
    
//     // Check if the start and end stations are on the same line
//     if (startLine.id === endLine.id) {
//       const startIndex = startLine.stops.indexOf(startStation);
//       const endIndex = startLine.stops.indexOf(endStation);
//       // Create an array of stations on the same line between the start and end stations
//       const journeyStations = startLine.stops.slice(Math.min(startIndex, endIndex), Math.max(startIndex, endIndex) + 1);
//       setJourney([journeyStations]);
//     } else {
//       // If the start and end stations are on different lines, find the stations where the lines intersect
//       const interchangeStations = startLine.stops.filter(station => endLine.stops.includes(station));
//       // Create an array of possible journeys with one interchange
//       const possibleJourneys = [];
//       interchangeStations.forEach(interchange => {
//         const startLineIndex = startLine.stops.indexOf(startStation);
//         const startInterchangeIndex = startLine.stops.indexOf(interchange);
//         const endLineIndex = endLine.stops.indexOf(endStation);
//         const endInterchangeIndex = endLine.stops.indexOf(interchange);
//         const startLineJourneyStations = startLine.stops.slice(Math.min(startLineIndex, startInterchangeIndex), Math.max(startLineIndex, startInterchangeIndex) + 1);
//         const endLineJourneyStations = endLine.stops.slice(Math.min(endInterchangeIndex, endLineIndex), Math.max(endInterchangeIndex, endLineIndex) + 1);
//         possibleJourneys.push([startLineJourneyStations, endLineJourneyStations]);
//       });
//       setJourney(possibleJourneys);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Start Station:
//           <select value={startStation} onChange={event => setStartStation(event.target.value)}>
           
//             {lineData.lines.map(line => line.stops.map(station => <option key={station}>{station}</option>))}
//           </select>
//         </label>
//         <br />
//         <label>
//           End Station:
//           <select value={endStation} onChange={event => setEndStation(event.target.value)}>
           
//             {lineData.lines.map(line => line.stops.map(station => <option key={station}>{station}</option>))}
//           </select>
//         </label>
//         <br />
//         <button type="submit">Plan Journey</button>
//       </form>
//       {journey.length > 0 ? (
//         <div>
//           {journey.map(journeyStations => (
//             <p key={journeyStations}>{journeyStations.join(' -> ')}</p>
//           ))}
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default JourneyPlanner;
