import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios';
import WeatherForm from '../../components/WeatherForm/WeatherForm'
import WeatherDisplay from '../../components/WeatherDisplay/WeatherDisplay'

const WeatherApi = () => {

    // const apiKey = 'd09a5b8a5a1764e7ae30c5ff46c2a6f8';
    const [loader, setloader] = useState(true)
    const [searchClicked, setSearchClicked] = useState(false);
    const [weatherApi, setWeatherApi] = useState([])
    const [emojiPicker, setEmojiPicker] = useState('')
    const [pick, setPick] = useState('')





    const getWeather = async (searchTerm) => {
        try {
            setloader(true)
            setSearchClicked(true);
            const response = await axios(`http://localhost:8000/polls/cities?weather_condition=${searchTerm}`)
            const data = response.data;
            // console.log(result);
            setWeatherApi(data);

        }
        catch (error) {
            console.error(error)
        }
        finally {
            setloader(false)
        }
    }
    return (
        <div>
            <h1>Weather Status</h1>
            <WeatherForm citiesSearch={getWeather} setEmojiPicker={setEmojiPicker} setPick={setPick} emojiPicker={emojiPicker} />
            <WeatherDisplay weatherApi={weatherApi} loader={loader} emojiPicker={emojiPicker} pick={pick} searchClicked={searchClicked} />
        </div>
    )
}

export default WeatherApi