import React from "react";
import s from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav_list}>
                <li className={s.nav_item}><a href="#">Profile</a></li>
                <li className={s.nav_item}><a href="#">Messages</a></li>
                <li className={s.nav_item}><a href="#">News</a></li>
                <li className={s.nav_item}><a href="#">Music</a></li>
                <li className={s.nav_item}><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;