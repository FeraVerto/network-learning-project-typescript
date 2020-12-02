import React from "react";
import s from "./Navbar.module.sass";
import {NavLink} from "react-router-dom";
import {SidebarFriendsType} from "../../redux/redux-store";
import {Friends} from "./Friends/Friends";
import {FriendsContainer} from "./Friends/FriendsContainer";

type NavbarType = {
    /*state: SidebarFriendsType*/
}

const Navbar: React.FC<NavbarType> = (props) => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav_list}>
                {/*NavLink - не перезагружая страницу, меняем адресную строку*/}
                <li className={s.nav_item}><NavLink className={s.nav_item_link} to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li className={s.nav_item}><NavLink className={s.nav_item_link} to="/dialogs">Dialogs</NavLink></li>
                <li className={s.nav_item}><NavLink className={s.nav_item_link} to="/news" href="#">News</NavLink></li>
                <li className={s.nav_item}><NavLink className={s.nav_item_link} to="/music">Music</NavLink></li>
                <li className={s.nav_item}><NavLink className={s.nav_item_link} to="/settings">Settings</NavLink></li>
            </ul>

            <FriendsContainer />
        </nav>
    )
}

export default Navbar;