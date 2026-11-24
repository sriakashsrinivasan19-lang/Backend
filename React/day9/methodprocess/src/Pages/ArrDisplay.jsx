import React, { useState } from 'react'

const ArrDisplay = () => {
  const [languages, setLanguages] = useState([
        "JavaScript",
        "Python",
        "Java",
        "React",
        "C++"
    ])

    return (
        <>
            <h2>Programming Languages</h2>

            {languages.map((language, index) => (
                <h3 key={index}>{language}</h3>
            ))}
        </>
    )
}


export default ArrDisplay