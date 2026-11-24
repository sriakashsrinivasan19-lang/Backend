import React, { useEffect, useState } from 'react'

const EffectTimer = () => {
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(true)

    useEffect(() => {

        if (!isRunning) return

        const timerId = setInterval(() => {

            setSeconds((previous) => previous + 1)

        }, 1000)

        return () => {
            clearInterval(timerId)
        }

    }, [isRunning])


    const startTimer = () => {
        setIsRunning(true)
    }

    const stopTimer = () => {
        setIsRunning(false)
    }

    const resetTimer = () => {
        setSeconds(0)
        setIsRunning(false)
    }


    return (
        <>
            <h2>Timer: {seconds}</h2>

            <button onClick={startTimer}>Start</button>

            <button onClick={stopTimer}>Stop</button>

            <button onClick={resetTimer}>Reset</button>
        </>
    )
}

export default EffectTimer