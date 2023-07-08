// import { useState } from "react";
import { Spinner } from "react-bootstrap"
export default function WeatherDisplay({ weatherApi, loader, emojiPicker, pick, searchClicked }) {



    const loaded = () => {


        if (weatherApi.cities.length === 0) {
            return <h1>No Cities to Display</h1>;
        }
        else {
            return (
                <div className="outterWrapper">
                    {console.log(weatherApi.cities)}
                    {weatherApi.cities.map((city, index) => {
                        return (

                            <div key={index} className="weathercard">
                                <div className="todayWeather">
                                    <span>Today's Weather</span>
                                </div>
                                <div className="location"><span>{`${city.City}, ${city.state}`}</span></div>
                                <div className="weatherContent">
                                    <div className="temp">{`${city.temperature}°F`}</div>
                                    <div className="emoji">{pick}</div>
                                </div>
                                <div className="windWrapper">
                                    <div className="windContent"><span>{`Wind Speed is ${city.wind_speed} mph`}</span></div>
                                    <div className="weatherStatus"><span>{emojiPicker}</span></div>
                                </div>
                            </div>


                        );
                    })
                    }
                </div>
            );
        }
    };

    const loading = () => {
        if (searchClicked && loader) {
            return (<div className="spinnerBox" >
                <Spinner variant="primary" animation="border" role="status">

                    <span className="visually-hidden">Loading...</span>

                </Spinner>
            </div >)

        }
        else {
            return (
                <h3> Select Following Inputs To Find Weather Condition For Different Cities : Thunderstorm, Drizzle, Rain, Snow, Atmosphere, Clear, Clouds</h3>
            )
        };

    };

    return weatherApi && !loader ? loaded() : loading();
}
