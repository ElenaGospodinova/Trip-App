import React, { useState, useEffect } from 'react';

function TflData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.tfl.gov.uk/Line/Mode/tube/Status')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
     
    <div className='tube-services'>  
      {data.map(line => (
        <div key={line.id}>
          <h4>{line.name}</h4>
          <p>{line.lineStatuses[0].statusSeverityDescription}</p>
        </div>
      ))}
    </div>
    <div>
    </div>
    </>
  );
}

export default TflData;



