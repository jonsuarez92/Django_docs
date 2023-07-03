import { useState } from 'react'
import React from 'react'
import WeatherForm from '../../components/WeatherForm/WeatherForm'
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay'

const WeatherApi = () => {

    const apiKey = 'd09a5b8a5a1764e7ae30c5ff46c2a6f8';

    const [weatherApi, setWeatherApi] = useState({})
    const getWeather = async (searchTerm) => {
        try {
            const response = fetch(`http://localhost:8000/polls/cities?weather_condition=${searchTerm}`).then((data) => {
                console.log(data.json());

            });

            // console.log(response.json());
            // const data = await response.json();
            // setWeatherApi(data);
            // console.log(data)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h1>weatherApi</h1>
            <WeatherForm citiesSearch={getWeather} />
            {/* <WeatherDisplay weatherApi={weatherApi} /> */}
        </div>
    )
}

export default WeatherApi