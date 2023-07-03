export default function WeatherDisplay({ weatherApi }) {
    const loaded = () => {
        return (
            <>

            </>
        )
    }

    const loading = () => {
        return <h1>No Cities to Display</h1>
    }

    return weatherApi && weatherApi.current ? loaded() : loading();
}