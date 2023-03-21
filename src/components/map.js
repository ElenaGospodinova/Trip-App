import React from 'react';

function TubeMap() {
  const mapUrl = 'https://tfl.gov.uk/cdn/static/cms/images/tube-map.gif';

  return (
    <div>
      <h1>London Timeout </h1>
      <img src={mapUrl} alt="London Tube Map" />
    </div>
  );
}

export default TubeMap;



// const url = `https://api.tfl.gov.ukjourney/${startStation}/to/${endStation}`;

//       axios.get(url)
//         .then(response => {
//           const journeys = response.data.journeys.filter(journey => ({
//             duration: journey.duration,
//             startDateTime: journey.startDateTime,
//             arrivalDateTime: journey.arrivalDateTime,
//             legs: journey.legs,
//             fare: journey.fare
//           }));
//           console.log(journeys);
//           setJourneys(journeys);
//         })
//         .catch(error => console.log(error));





 //https://api.tfl.gov.uk/journey/journeyresults/${startStation}/to/${endStation}
         //https://api.tfl.gov.uk/journey/journeyresults
  //  https://api.tfl.gov.ukjourney/${startStation}/to/${endStation}
    // const url = `https://api.tfl.gov.uk/Journey/JourneyResults/Stratford/to/Westminister?via=Jubilee&journeyPreference=LeastInterchange`;
    // axios.get(url)
   
    //   const url = `https://api.tfl.gov.uk/Journey/JourneyResults/Stratford/to/Westminister?via=Jubilee&journeyPreference=LeastInterchange`;
    //   axios.get(url)
    //     .then(response => {
    //       //const journeyData = response.data.journeys;
    //       const journeyData = response.data.filter(item => item.status === 'active');
    
    //       setJourneys(journeyData);
    //     })
    //     .catch(error => console.log(error));
    // }
// const [startStation, setStartStation] = useState('');
// const [endStation, setEndStation] = useState('');
// const [result, setResult] = useState('')

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const [startResponse, endResponse] = await Promise.all([
//         axios.get(`https://api.tfl.gov.uk/Stoppoint/${startStation}/TubeLines`),
//         axios.get(`https://api.tfl.gov.uk/Stoppoint/${endStation}/TubeLines`),
//         console.log(axios.get(`https://api.tfl.gov.uk/Stoppoint/${startStation}/TubeLines`))
//       ]);
//       const startLines = startResponse.data.map((line) => line.id);
//       const endLines = endResponse.data.map((line) => line.id);
//       const commonLines = startLines.filter((line) => endLines.includes(line));
//       if (commonLines.length > 0) {
//         setResult(`There is a direct line route between ${startStation} and ${endStation} via ${commonLines.join(', ')}.`);
//       } else {
//         setResult(`There is no direct line route between ${startStation} and ${endStation}.`);
//       }
//     } catch (error) {
//       console.error(error);
//       setResult('An error occurred while retrieving the journey information.');
//     }
  //};

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     function getUserAccount() {
//         return axios.get('/user/12345');
//       }
      
//       function getUserPermissions() {
//         return axios.get('/user/12345/permissions');
//       }
      
//       Promise.all([getUserAccount(), getUserPermissions()])
//         .then(function (results) {
//           const acct = results[0];
//           const perm = results[1];
//         });



const [startStation, setStartStation] = useState('');
const [endStation, setEndStation] = useState('');
const [journeys, setJourneys] = useState([]);

const handleSubmit = (e) => {
  e.preventDefault();
  fetch('https://api.tfl.gov.uk/Journey/JourneyResults/Stratford/to/Westminister?via=Jubilee&journeyPreference=LeastInterchange', {
    method: 'GET',
    // Request headers
    headers: {
        'Cache-Control': 'no-cache',}
})
.then(response => {
    console.log(response.status);
    console.log(response.text());
})
.catch(err => console.error(err));
}