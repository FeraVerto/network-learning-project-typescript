import React from "react";
import s from "./Navbar.module.sass";
import {NavLink} from "react-router-dom";
import profile from "./../../assets/image/astronaut.png";
import dialogs from "./../../assets/image/dialogs.png";
import photo from "./../../assets/image/photo.png";
import news from "./../../assets/image/news.png";
import setting from "./../../assets/image/setting.png";
import users from "./../../assets/image/users.png";

type NavbarType = {
    /*state: SidebarFriendsType*/
}

const Navbar: React.FC<NavbarType> = (props) => {
    console.log("navbar")
    return (
        <nav className={s.nav}>
            <ul className={s.nav_list}>
                {/*NavLink - не перезагружая страницу, меняем адресную строку*/}
                <li className={s.nav_item}>
                    <NavLink className={s.nav_item_link}
                             to="/profile"
                             activeClassName={s.active}>
                        <img src={profile} alt="profile"/>
                        <span>Profile</span>
                    </NavLink>
                </li>
                <li className={s.nav_item}>
                    <NavLink className={s.nav_item_link}
                             to="/dialogs">
                        <img src={dialogs} alt=""/>
                        <span>Dialogs</span>
                    </NavLink>
                </li>
                <li className={s.nav_item}>
                    <NavLink className={s.nav_item_link}
                             to="/news" href="#">
                        <img src={photo} alt="profile"/>
                        <span>Photo</span>
                    </NavLink>
                </li>
                <li className={s.nav_item}>
                    <NavLink className={s.nav_item_link} to="/music">
                        <img src={news} alt="profile"/>
                        <span>News</span>
                    </NavLink>
                </li>
                <li className={s.nav_item}>
                    <NavLink className={s.nav_item_link}
                             to="/settings">
                        <img src={setting} alt="profile"/>
                        <span>Settings</span>
                    </NavLink>
                </li>
                <li className={s.nav_item}>
                    <NavLink className={s.nav_item_link}
                             to="/users">
                        <img src={users} alt="profile"/>
                        <span>Users</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;