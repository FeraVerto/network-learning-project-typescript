import React from 'react'
import preloader from "./../../../assets/image/preloader.svg"
import s from "./Preloader.module.sass"

export const Preloader = () => {
    return (
        <>
            <img src={preloader} alt="preloader"/>
        </>
    )
}