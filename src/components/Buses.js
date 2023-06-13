import React, { useEffect,useState } from 'react';
import bus1 from '../img/bus1.jpg';
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
    <div class="container">
      
        <div className='bus-timer'>
          <div className='title'>
            <h4 style={{marginLeft:'-323px', marginTop:'-43px'}} >Bus Total Time From Stop To Stop </h4>
          </div>
          <br/>
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
              <p className='result'>Leave now {time} and arrive:</p>
              <ul>
                {journeyPlan.map((journey, index) => (
                  <li key={index} className="time-travel">
                    <p className='route'>Duration: {journey.duration}</p>
                    <p className='travelling'>Arrival Time: </p>
                    <p className='arrival'>{journey.arrivalDateTime}</p>
                  </li>
                ))}<img src={bus1} alt='London Bus' className='bus-m'/>
                
              </ul>
            </div>
          )}
        </div>
    </div>
    
  );
}

export default MyComponent;
