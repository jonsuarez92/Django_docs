import './App.css';
import { useState } from 'react';
import WeatherApi from '../WeatherApi/weatherApi';
import WeatherShowApi from '../WeatherApi/weatherShowApi';
import { Routes, Route } from 'react-router-dom'

function App() {

  const [weatherApi, setWeatherApi] = useState({})
  return (
    <main className="App">
      <Routes>
        <Route path="/weatherApi" element={<WeatherApi setWeatherApi={setWeatherApi} />} />
        <Route path="/weatherShowApi" element={<WeatherShowApi weatherApi={weatherApi} />} />
      </Routes>
    </main>
  );
}

export default App;
