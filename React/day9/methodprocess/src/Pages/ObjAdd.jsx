import React, { useState } from 'react'

const ObjAdd = () => {
  const [studentInfo, setStudentInfo] = useState({
        name: "Sriakash",
        age: 21,
        city: "Chennai"
    })

    const addCountry = () => {
        setStudentInfo({
            ...studentInfo,
            country: "India"
        })
    }

    return (
        <>
            <h2>Student Details</h2>

            <h3>Name: {studentInfo.name}</h3>
            <h3>Age: {studentInfo.age}</h3>
            <h3>City: {studentInfo.city}</h3>
            <h3>Country: {studentInfo.country}</h3>

            <button onClick={addCountry}>Add Country</button>
        </>
    )

}

export default ObjAdd