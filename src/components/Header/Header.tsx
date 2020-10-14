import React from "react";
import s from "./Header.module.css";
import logo from '../../assets/image/logo.png';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.logo} src={logo} alt=""/>
        </header>
    )
}

export default Header;