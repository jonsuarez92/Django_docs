export default function WeatherDisplay({ weatherApi, loader }) {
    const loaded = () => {
        return (
            <>
                {console.log(weatherApi.cities)}
                {weatherApi.cities.map((city, index) => {
                    return (
                        <div key={index}>
                            <h1>{city.City}</h1>
                            <p>State: {city.state}</p>
                            <p>Temperature: {city.temperature}</p>
                            <p>Wind Speed: {city.wind_speed}</p>
                            {Array.isArray(city.weather) &&
                                city.weather.map((weather, index) => (
                                    <div key={index}>
                                        <p>Weather {index + 1}: </p>
                                        <p>Main: {weather.main}</p>
                                        <p>Description: {weather.description}</p>
                                        <p>Icon: {weather.icon}</p>
                                    </div>
                                ))}
                        </div>
                    );
                })}
            </>
        );
    };

    const loading = () => {
        return <h1>No Cities to Display</h1>;
    };

    return weatherApi && !loader ? loaded() : loading();
}
