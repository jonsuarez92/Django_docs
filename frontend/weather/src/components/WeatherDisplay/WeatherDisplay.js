import { Spinner } from "react-bootstrap"
export default function WeatherDisplay({ weatherApi, loader }) {
    const loaded = () => {
        if (weatherApi.cities.length === 0) {
            return <h1>No Cities to Display</h1>;
        }
        else {
            return (
                <div >
                    {console.log(weatherApi.cities)}
                    {weatherApi.cities.map((city, index) => {
                        return (
                            <div key={index}>
                                <h1>{city.City}</h1>
                                <p>State: {city.state}</p>
                                <p>Temperature: {city.temperature}</p>
                                <p>Wind Speed: {city.wind_speed}</p>
                            </div>
                        );
                    })}
                </div>
            );
        }
    };

    const loading = () => {

        if (!loader) {
            <div className="spinnerBox">
                <Spinner variant="primary" animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        }
    };


    return weatherApi && !loader ? loaded() : loading();
}
