import React, { useState } from 'react'

const BooleanToogle = () => {
     const [isActive, setIsActive] = useState(false)

    const toggleStatus = () => {
        setIsActive(!isActive)
    }

    return (
        <>
            <h2>User Status</h2>

            <h3>{isActive ? "Active" : "Inactive"}</h3>

            <button onClick={toggleStatus}>
                Change Status
            </button>
        </>
    )
}

export default BooleanToogle