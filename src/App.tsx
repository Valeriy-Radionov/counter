import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

export const minValue = 0
export const maxValue = 5
export const incKeyLocalStorage = "inc"

function App() {
    const [displayState, setDisplayState] = useState<number>(() => {
        let value = localStorage.getItem(incKeyLocalStorage)
        return value ? JSON.parse(value) : 0
    })

    useEffect(() => {
        localStorage.setItem(incKeyLocalStorage, JSON.stringify(displayState))
    }, [displayState])

    useEffect(() => {
        let value = localStorage.getItem(incKeyLocalStorage)
        if (value) {
            let newValue = JSON.parse(value)
            setDisplayState(JSON.parse(newValue))
        }
    }, [])

    const incCallBack = () => {
        if (displayState < maxValue) {
            setDisplayState(displayState + 1)
        }
    }

    const resetCallBack = () => {
        setDisplayState(minValue)
    }

    return (
        <div className="App">
            <Counter displayValue={displayState} disabledInc={displayState === maxValue}
                     disabledReset={displayState === minValue}
                     callBackCounter={incCallBack} resetCallBack={resetCallBack}/>
        </div>
    )
}

export default App;