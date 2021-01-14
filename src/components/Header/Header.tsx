import React from "react";
import s from "./Header.module.sass";
import {NavLink} from "react-router-dom";
import {authType} from "../../redux/redux-store";


const Header = (props: authType) => {
    console.log(props)
    return (
        <>
            <div className={s.site_name}>Spacebook</div>
            <div className={s.login}>
                <img src={props.photo.small} alt="avatar"/>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </>
    )
}

export default Header;