import React, { useState } from 'react'

const ObjUpdateDelete = () => {
     const [productInfo, setProductInfo] = useState({
        brand: "Samsung",
        model: "S24",
        price: 50000,
        color: "Black"
    })

    const updatePrice = () => {
        setProductInfo({
            ...productInfo,
            price: 60000
        })
    }

    const deleteColor = () => {
        const { color, ...remainingDetails } = productInfo

        setProductInfo(remainingDetails)
    }

    return (
        <>
            <h2>Product Details</h2>

            <h3>Brand: {productInfo.brand}</h3>
            <h3>Model: {productInfo.model}</h3>
            <h3>Price: {productInfo.price}</h3>
            <h3>Color: {productInfo.color}</h3>

            <button onClick={updatePrice}>Update Price</button>

            <button onClick={deleteColor}>Delete Color</button>
        </>
    )
}

export default ObjUpdateDelete