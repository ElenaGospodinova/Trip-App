
import React, { useState } from 'react';

const journeyData = [
  { from: 'Stratford ', to: 'Marble Arch', line: 'Jubilee Line' },
  { from: 'Westminster', to: 'Bond Street', line: 'Jubilee Line' },
  { from: 'Bond Street', to: 'Stratford', line: 'Central Line' },
  { from: 'Stratford', to: 'Highbury & Islington', line: 'Central and Overground Line' },
];

function Travel() {
  const [startStation, setStartStation] = useState('');
  const [endStation, setEndStation] = useState('');
  const [journey, setJourney] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const foundJourney = journeyData.find(
      (j) => j.from === startStation && j.to === endStation
    );

    if (foundJourney) {
      setJourney(foundJourney);
    } else {
      setJourney({ line: 'No journey found.' });
    }
  };

  return (
    <div>
      <h1>Journey Planner ME</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Start Station:
          <input
            type="text"
            value={startStation}
            onChange={(e) => setStartStation(e.target.value)}
          />
        </label>
        <label>
          End Station:
          <input
            type="text"
            value={endStation}
            onChange={(e) => setEndStation(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <h2>Journey:</h2>
      <p>
        {/* {journey.from} {journey.to} */}
        {journey.line} 
      </p>
    </div>
  );
}

export default Travel;
