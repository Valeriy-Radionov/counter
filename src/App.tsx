import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter/Counter";

function App() {

    let [displayState, setDisplayState] = useState<number>(0)
    let [disableInc, setDisable] = useState<boolean>(false)
    let [disableReset, setDisableReset] = useState<boolean>(true)

    const incCallBack = () => {
        if (displayState < 5) {
            displayState += 1
            disableReset = false
            setDisableReset(disableReset)
        }
        if (displayState === 5) {
            disableInc = true
            setDisable(disableInc)
        }
        setDisplayState(displayState)
    }

    const resetCallBack = () => {
        displayState = 0
        setDisplayState(displayState)
        disableInc = false
        setDisable(disableInc)
        disableReset = true
        setDisableReset(disableReset)
    }

    return (
        <div className="App">
            <Counter displayState={displayState} disableInc={disableInc} disableReset={disableReset}
                     callBackCounter={incCallBack} resetCallBack={resetCallBack}/>
        </div>
    );
}

export default App;
