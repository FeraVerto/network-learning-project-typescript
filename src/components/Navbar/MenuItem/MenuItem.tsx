import React from 'react'
import s from "../Navbar.module.sass";
import {NavLink} from "react-router-dom";

export type MenuItemType = {
    to: string
    item: string
}

export const MenuItem = (props: MenuItemType) => {
    return (
        <li className={s.nav_item}>
            <NavLink className={s.nav_item_link}
                     to={props.to}
                     activeClassName={s.active}>
                {/*<img src={profile} alt="profile"/>*/}
                <span>{props.item}</span>
            </NavLink>
        </li>
    )
}