import React from "react";
import s from "./Header.module.sass";
import {NavLink} from "react-router-dom";
import {authType} from "../../redux/redux-store";
import avatar from "./../../assets/image/ufo-2.png"

type HeaderType = authType

const Header = ({photo, logoutTC, isAuth, login}: any) => {
    return (
        <>
            <div className={s.site_name}>Spacebook</div>

            <div className={s.login}>
                {photo.small === ""
                    ? <img src={avatar} width="40px" height="40px" alt="avatar"/>
                    : <img src={photo.small} width="40px" height="40px" alt="avatar"/>}

                {isAuth
                    ? <div>{login} - <button onClick={logoutTC}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </>
    )
}

export default Header;