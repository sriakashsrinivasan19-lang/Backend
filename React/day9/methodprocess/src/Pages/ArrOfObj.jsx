import React, { useState } from 'react'

const ArrOfObj = () => {
 

    const [mobileStock, setMobileStock] = useState([
        { id: 1, brand: "Samsung", price: 30000 },
        { id: 2, brand: "Apple", price: 60000 },
        { id: 3, brand: "Vivo", price: 20000 }
    ])

    const addMobile = () => {
        setMobileStock([
            ...mobileStock,
            { id: 4, brand: "OnePlus", price: 40000 }
        ])
    }

    const updateMobilePrice = () => {
        setMobileStock(
            mobileStock.map((mobile) =>
                mobile.id === 2
                    ? { ...mobile, price: 70000 }
                    : mobile
            )
        )
    }

    const deleteMobile = () => {
        setMobileStock(
            mobileStock.filter((mobile) => mobile.id !== 3)
        )
    }

    return (
        <>
            <h2>Mobile Stock Details</h2>

            {mobileStock.map((mobile) => (
                <div key={mobile.id}>
                    <h3>ID: {mobile.id}</h3>
                    <h3>Brand: {mobile.brand}</h3>
                    <h3>Price: {mobile.price}</h3>
                    <hr />
                </div>
            ))}

            <button onClick={addMobile}>Add Mobile</button>

            <button onClick={updateMobilePrice}>Update Mobile</button>

            <button onClick={deleteMobile}>Delete Mobile</button>
        </>
    )
}

export default ArrOfObj