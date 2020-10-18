import React from "react";
import s from "./Navbar.module.sass";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav_list}>
                {/*NavLink - не перезагружая страницу, меняем адресную строку*/}
                <li className={s.nav_item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.nav_item}><NavLink to="/dialogs">Dialogs</NavLink></li>
                <li className={s.nav_item}><NavLink to="/news" href="#">News</NavLink></li>
                <li className={s.nav_item}><NavLink to="/music">Music</NavLink></li>
                <li className={s.nav_item}><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}

export default Navbar;