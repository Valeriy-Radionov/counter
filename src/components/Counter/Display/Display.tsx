import React from "react";
import s from "./Display.module.css"

export type DisplayType = {
    numberState: number
}

export const Display = (props: DisplayType) => {

    let displayStyle = [s.default]
    if (props.numberState === 5) {
        displayStyle.push(s.maxValue)
    }

    return (
        <div className={displayStyle.join(" ")}>
            {props.numberState}
        </div>
    )
}