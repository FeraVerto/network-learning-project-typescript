import React from 'react'
import s from "./Button.module.sass"

type ButtonType = {
    style?: string
    children?: string
    onChange?: () => void
}

export const Button: React.FC<ButtonType> = ({style, children, onChange, ...restProps}) => {
    console.log("Button", style)
    return (
        <button className={s.button + " " + style} onChange={onChange} {...restProps}>
            {children}
        </button>
    )
}
