import React from 'react'

const Nullish = () => {
     const userDetails = {
        name: "Sriakash",
        age: 0,
        city: null,
        phone: undefined
    }

    return (
        <>
            <h2>User Information</h2>

            <h3>Name: {userDetails.name ?? "Not Available"}</h3>

            <h3>Age: {userDetails.age ?? "Not Available"}</h3>

            <h3>City: {userDetails.city ?? "Not Available"}</h3>

            <h3>Phone: {userDetails.phone ?? "Not Available"}</h3>
        </>
    )
}

export default Nullish