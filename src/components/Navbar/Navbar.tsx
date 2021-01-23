import React from "react";
import s from "./Navbar.module.sass";
import {NavLink} from "react-router-dom";
import profile from "./../../assets/image/astronaut.png";
import dialogs from "./../../assets/image/dialogs.png";
import photo from "./../../assets/image/photo.png";
import news from "./../../assets/image/news.png";
import setting from "./../../assets/image/setting.png";
import users from "./../../assets/image/users.png";
import {MenuItem} from "./MenuItem/MenuItem";

type NavbarType = {
    /*state: SidebarFriendsType*/
}

const Navbar: React.FC<NavbarType> = (props) => {
    console.log("navbar")
    return (
        <nav className={s.nav}>
            <ul className={s.nav_list}>
                {/*NavLink - не перезагружая страницу, меняем адресную строку*/}
                <MenuItem to={"/profile"} item={"Profile"}/>
                <MenuItem to={"/dialogs"} item={"Dialogs"}/>
                <MenuItem to={"/news"} item={"News"}/>
                <MenuItem to={"/music"} item={"Music"}/>
                <MenuItem to={"/settings"} item={"Settings"}/>
                <MenuItem to={"/users"} item={"Users"}/>
            </ul>
        </nav>
    )
}

export default Navbar;