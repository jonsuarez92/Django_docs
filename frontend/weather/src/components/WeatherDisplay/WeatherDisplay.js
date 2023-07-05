import { Spinner, Card } from "react-bootstrap"
export default function WeatherDisplay({ weatherApi, loader }) {
    const loaded = () => {
        if (weatherApi.cities.length === 0) {
            return <h1>No Cities to Display</h1>;
        }
        else {
            return (
                <div className="weatherwrap">
                    {console.log(weatherApi.cities)}
                    {weatherApi.cities.map((city, index) => {
                        return (

                            <div className="card" style={{ width: "18rem" }} key={index}>
                                <div className="card-body">
                                    <h1 className="card-title">{city.City}</h1>
                                    <p className="card-text">State: {city.state}</p>
                                    <p className="card-text">Temperature: {city.temperature}°F </p>
                                    <p className="card-text">Wind Speed: {city.wind_speed} mph</p>
                                </div>
                            </div>


                        );
                    })
                    }
                </div >
            );
        }
    };

    const loading = () => {
        if (!loader) {
            <h3> Select Following Inputs To Find Weather Condition For Different Cities : Thunderstorm, Drizzle, Rain, Snow, Atmosphere, Clear, Clouds</h3>;
        }
        else {
            return (
                <div className="spinnerBox">
                    <Spinner variant="primary" animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </div>
            )
        }
        // return <h3> Select Following Inputs To Find Weather Condition For Different Cities : Thunderstorm, Drizzle, Rain, Snow, Atmosphere, Clear, Clouds
        // </h3>;
    };

    return weatherApi && !loader ? loaded() : loading();
}
