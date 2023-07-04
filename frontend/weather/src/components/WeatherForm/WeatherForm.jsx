import { useState } from "react";
import React from 'react'

const WeatherForm = (props) => {


    const [formData, setFormData] = useState({
        searchTerm: ""
    })

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        props.citiesSearch(formData.searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="searchTerm"
                    onChange={handleChange}
                    value={formData.searchTerm}
                />
                <input type="submit" value="Search" />
            </form>
        </div>
    )
}
export default WeatherForm