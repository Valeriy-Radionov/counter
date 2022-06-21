import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

export const minValue = 0
export const maxValue = 5

function App() {
    const [displayState, setDisplayState] = useState<number>(minValue)

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