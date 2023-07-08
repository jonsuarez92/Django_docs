import React, { useState, useEffect } from "react";

const WeatherForm = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
        props.setEmojiPicker(event.target.value);
        // console.log(event.target.value);
        // console.log(props)


    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.citiesSearch(searchTerm);
        pickEmoji(props.emojiPicker)


    };

    const pickEmoji = (str) => {
        switch (str) {

            case 'Rain':
                props.setPick('🌧️');
                break;
            case "Clear":
                props.setPick('☀️');
                break;
            case "Snow":
                props.setPick('❄');
                break;
            case "Drizzle":
                props.setPick('⛆');
                break;
            case "Thunderstorm":
                props.setPick('⛈️');
                break;
            case "Atmosphere":
                props.setPick('💨');
                break;
            case "Clouds":
                props.setPick('☁️');
                break;


        }
    }
    return (
        <div >
            <form onSubmit={handleSubmit}>
                <select
                    name="searchTerm"
                    onChange={handleChange}
                    value={searchTerm}
                >
                    <option value="Thunderstorm">Thunderstorm</option>
                    <option value="Drizzle">Drizzle</option>
                    <option value="Rain">Rain</option>
                    <option value="Snow">Snow</option>
                    <option value="Atmosphere">Atmosphere</option>
                    <option value="Clear">Clear</option>
                    <option value="Clouds">Clouds</option>
                </select>
                <input type="submit" value="Search" />
            </form>
        </div>
    );
};

export default WeatherForm;