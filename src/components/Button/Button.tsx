import React from "react";
import s from "./Button.module.css"

type ButtonType = {
    name: string
    disabled: boolean
    callBack: () => void
}

export const Button = (props: ButtonType) => {
    return (
        <div className={s.wrapperButton}>
            <button className={s.button} onClick={props.callBack} disabled={props.disabled}>{props.name}</button>
        </div>
    )
}