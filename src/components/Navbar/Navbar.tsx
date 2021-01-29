import React from "react";
import s from "./Navbar.module.sass";
import {MenuItem} from "./MenuItem/MenuItem";

type NavbarType = {
    /*state: SidebarFriendsType*/
}

const Navbar: React.FC<NavbarType> = (props) => {

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