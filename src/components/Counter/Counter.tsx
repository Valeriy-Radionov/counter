import React from "react";
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import s from "./Counter.module.css"

type CounterType = {
    displayValue: number
    disabledInc: boolean
    disabledReset: boolean
    callBackCounter: () => void
    resetCallBack: () => void
}

export const Counter = (props: CounterType) => {
    return (
        <div className={s.wrapper}>
            <Display value={props.displayValue}/>
            <div className={s.buttonWrapper}>
                <Button name={"inc"} callBack={props.callBackCounter} disabled={props.disabledInc}/>
                <Button name={"reset"} callBack={props.resetCallBack} disabled={props.disabledReset}/>
            </div>
        </div>
    )
}