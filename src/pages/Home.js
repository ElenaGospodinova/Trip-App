import React from 'react'
import { Grid } from '@mui/material';
import Planners from '../components/OneMore.js';
import TflData from '../components/London.js';
import MyComponent from '../components/Buses.js';
import Weather from '../components/Weather.js';
import Hero from '../components/Hero.js';
import '../styles/Home.css';
//import FromTo from '../components/A_Z';
//import MyComponent from './Buses';


const Home = () => {
  return (
    <>
      <Grid container spacing={3}>
        <Hero/>
          <Grid item xs={12}>
              <Weather />
          </Grid>
          <Grid item xs={24}>
              <TflData />
          </Grid>
          <Grid item xs={16}>
              <MyComponent />
          </Grid>
          <Grid item xs={16}>
              <br/>
              <Planners />
          </Grid>
      </Grid>
    </>
  );
}

export default Home;