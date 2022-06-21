import React from "react";
import s from "./Button.module.css"

type ButtonType = {
    name: string
    disable: boolean
    callBack: () => void
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <div className={s.wrapperButton}>
            <button className={s.button} onClick={onClickHandler} disabled={props.disable}>{props.name}</button>
        </div>
    )
}