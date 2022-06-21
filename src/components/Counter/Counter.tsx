import React from "react";
import {Display} from "./Display/Display";
import {Button} from "./Button/Button";
import s from "./Counter.module.css"

type CounterType = {
    displayState: number
    disableInc: boolean
    disableReset: boolean
    callBackCounter: () => void
    resetCallBack: () => void
}

export const Counter = (props: CounterType) => {

    return (
        <div className={s.wrapper}>
            <Display numberState={props.displayState}/>
            <div className={s.buttonWrapper}>
                <Button name={"inc"} callBack={props.callBackCounter} disable={props.disableInc}/>
                <Button name={"reset"} callBack={props.resetCallBack} disable={props.disableReset}/>
            </div>
        </div>
    )
}