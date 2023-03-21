import React, { useEffect,useState } from 'react';

//  function reducer(state, action) {
//    switch (action.type) {
//     case 'INCREMENT':
//        return { count: state.count + 1 };
//      default:
//       throw new Error();
//    }
// }
/// current Time for depart with bus

function getCurrentTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const timeString = `${hours}:${minutes}`;
  return timeString;
}

function MyComponent() {

  const [fromStopPointId, setFromStopPointId] = useState('');
  const [toStopPointId, setToStopPointId] = useState('');
  const [journeyPlan, setJourneyPlan] = useState(null);
  //const [state, dispatch] = useReducer(reducer, { count: 0 });

  //current time 
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);



  const handleSubmit = (event) => {
    event.preventDefault();

    const url = `https://api.tfl.gov.uk/journey/journeyresults/E9%207AL/to/E1%206JJ?mode=bus&via=490012462S`; 
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setJourneyPlan(data.journeys);
      })
      .catch((error) => console.error(error));
  };
console.log(setToStopPointId)

  return (
    <div>
      <h1 className='tfl-buses'>TFL Bus Total Time From Stop To Stop </h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fromStopPointId">From:</label>
        <input
          type="text"
          id="fromStopPointId"
          value={fromStopPointId}
          onChange={(event) => setFromStopPointId(event.target.value)}
        />

        <label htmlFor="toStopPointId">To:</label>
        <input
          type="text"
          id="toStopPointId"
          value={toStopPointId}
          onChange={(event) => setToStopPointId(event.target.value)} />

        <button  className='btn' type="submit">Plan Journey</button>
      </form>

      {journeyPlan && (
        <div className='bus'>
          <h2>Leave now {time} and arrive:</h2>
          <ul>
            {journeyPlan.map((journey, index) => (
              <li key={index} className="time-travel">
                <p className='route'>Duration: {journey.duration}</p>
                <p className='travelling'>Arrival Time: </p>
                <p className='arrival'>{journey.arrivalDateTime}</p>
              </li>
            ))}
            
          </ul>
        </div>
      )}
    </div>
  );
}

export default MyComponent;
