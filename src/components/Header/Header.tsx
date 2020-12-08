import React from "react";
import s from "./Header.module.sass";
import logo from '../../assets/image/logo.png';

const Header = () => {
    return (
        <>
            <span className={s.icon_search}>Search</span>
            <input className={s.search} type="search"/>
            {/*<img className={s.logo} src={logo} alt=""/>*/}
        </>
    )
}

export default Header;