import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function TravelSearchInput() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(`https://api.tfl.gov.uk/Journey/JourneyResults/${from}/to/${to}`);
    const data = await response.json();
    // Use history.push() to navigate to the results page with the data
    history.push({
      pathname: '/results',
      state: { data }
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="from">From:</label>
        <input type="text" id="from" value={from} onChange={(event) => setFrom(event.target.value)} />
        <label htmlFor="to">To:</label>
        <input type="text" id="to" value={to} onChange={(event) => setTo(event.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default TravelSearchInput;

