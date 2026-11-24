import React, { useState } from 'react'

const ArrAdd = () => {
  const [colorList, setColorList] = useState([
        "Red",
        "Blue",
        "Green"
    ])

    const addColor = () => {
        setColorList([...colorList, "Yellow"])
    }

    return (
        <>
            <h2>Color List</h2>

            {colorList.map((color, index) => (
                <h3 key={index}>{color}</h3>
            ))}

            <button onClick={addColor}>Add Color</button>
        </>
    )
}

export default ArrAdd