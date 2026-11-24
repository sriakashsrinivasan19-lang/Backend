import React, { useState } from 'react'

const ArrUpdate = () => {
   const [fruitList, setFruitList] = useState([
        "Apple",
        "Orange",
        "Banana",
        "Grapes"
    ])

    const updateFruit = () => {
        setFruitList(
            fruitList.map((fruit) =>
                fruit === "Apple" ? "Mango" : fruit
            )
        )
    }

    return (
        <>
            <h2>Fruit List</h2>

            {fruitList.map((fruit, index) => (
                <h3 key={index}>{fruit}</h3>
            ))}

            <button onClick={updateFruit}>Update Apple</button>
        </>
    )
}

export default ArrUpdate