import React from "react";
import s from "./Display.module.css"
import {maxValue} from "../../../App";

export type DisplayType = {
    value: number
}

export const Display = (props: DisplayType) => {
    // let displayStyle = [s.default]
    // if (props.value === 5) {
    //     displayStyle.push(s.maxValue)
    // }
    let displayStyle = `${s.default} ${props.value === maxValue ? s.maxValue : ''}`

    return (
        <div className={displayStyle}>
            {props.value}
        </div>
    )
}