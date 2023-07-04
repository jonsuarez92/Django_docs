import { useState } from 'react'
import React from 'react'
import axios from 'axios';

import WeatherForm from '../../components/WeatherForm/WeatherForm'
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay'

const WeatherApi = () => {

    // const apiKey = 'd09a5b8a5a1764e7ae30c5ff46c2a6f8';
    const [loader, setloader] = useState(true)
    const [weatherApi, setWeatherApi] = useState([])


    const getWeather = async (searchTerm) => {
        try {
            setloader(true)
            const response = await axios(`http://localhost:8000/polls/cities?weather_condition=${searchTerm}`)
            const data = response.data;
            // console.log(result);
            setWeatherApi(data);
            setloader(false)
        }

        // console.log(response.json());
        // const data = await response.json();
        // setWeatherApi(data);
        // console.log(data)
        catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h1>weatherApi</h1>
            <WeatherForm citiesSearch={getWeather} />
            <WeatherDisplay weatherApi={weatherApi} loader={loader} />
        </div>
    )
}

export default WeatherApi