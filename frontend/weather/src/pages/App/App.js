import './App.css';
// import { useState } from 'react';
import WeatherApi from '../WeatherApi/weatherApi';
import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <main className="App">
      <Routes>
        <Route path="/weatherApi" element={<WeatherApi />} />
      </Routes>
    </main>
  );
}

export default App;
