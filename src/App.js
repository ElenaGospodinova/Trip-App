import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Grid } from '@mui/material';
import './styles/global.css';
import './styles/style.scss';
import Navbar from './components/main/Navbar.js';
import TimeOuts from './pages/Timeouts.js';
import Restaurants from './pages/Restaurants.js';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Navbar />
            <div className="container">
              <Routes>
              <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/timeouts" element={<TimeOuts />} />
                <Route path="/restaurants" element={<Restaurants />} />
              </Routes>
            </div>
          </Grid>
        </Grid>
      </BrowserRouter>
    </div>
  );
}

export default App;
