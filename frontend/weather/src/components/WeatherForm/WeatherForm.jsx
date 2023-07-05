// import { useState } from "react";
// import React from 'react'

// const WeatherForm = (props) => {


//     const [formData, setFormData] = useState({
//         searchTerm: ""
//     })

//     const handleChange = (event) => {
//         setFormData({ ...formData, [event.target.name]: event.target.value })
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         props.citiesSearch(formData.searchTerm)
//     }

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     name="searchTerm"
//                     onChange={handleChange}
//                     value={formData.searchTerm} />
//                 <input type="submit" value="Search" />
//             </form>
//         </div>
//     )
// }
// export default WeatherForm

import React, { useState } from "react";

const WeatherForm = (props) => {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.citiesSearch(searchTerm);



    };

    return (
        <div >
            <form onSubmit={handleSubmit}>
                <select
                    name="searchTerm"
                    onChange={handleChange}
                    value={searchTerm}
                >
                    <option value="">Select a weather condition</option>
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