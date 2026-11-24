import React, { useState } from 'react'

const ArrDelete = () => {
   const [cityList, setCityList] = useState([
        "Chennai",
        "Madurai",
        "Salem",
        "Coimbatore",
        "Trichy"
    ])

    const deleteCity = () => {
        setCityList(
            cityList.filter((city) => city !== "Chennai")
        )
    }

    return (
        <>
            <h2>City List</h2>

            {cityList.map((city, index) => (
                <h3 key={index}>{city}</h3>
            ))}

            <button onClick={deleteCity}>Delete Chennai</button>
        </>
    )
}

export default ArrDelete