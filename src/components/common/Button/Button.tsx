import React from 'react'
import s from "./Button.module.sass"

type ButtonType = {
    style?: string
    children?: string
    onChange?: () => void
    onClick?: () => void
}

export const Button: React.FC<ButtonType> = ({style, children, onChange, onClick, ...restProps}) => {
    console.log("Button", style)
    return (
        <button className={s.button + " " + style} onChange={onChange} onClick={onClick} {...restProps}>
            {children}
        </button>
    )
}
