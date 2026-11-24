import React, { useState } from 'react'

const Numbers = () => {
     const [numberValue, setNumberValue] = useState(10)

    const incrementNumber = () => {
        setNumberValue(numberValue + 5)
    }

    const decrementNumber = () => {
        setNumberValue(numberValue - 2)
    }

    const multiplyNumber = () => {
        setNumberValue(numberValue * 3)
    }

    const resetNumber = () => {
        setNumberValue(10)
    }

    return (
        <>
            <h2>Number Operations</h2>

            <h3>Current Number: {numberValue}</h3>

            <h3>
                {numberValue % 2 === 0 ? "Even Number" : "Odd Number"}
            </h3>

            <button onClick={incrementNumber}>Increment +5</button>

            <button onClick={decrementNumber}>Decrement -2</button>

            <button onClick={multiplyNumber}>Multiply ×3</button>

            <button onClick={resetNumber}>Reset</button>
        </>
    )
}

export default Numbers