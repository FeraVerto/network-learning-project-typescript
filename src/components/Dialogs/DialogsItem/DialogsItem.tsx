import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.sass";
import osoba from "../../../assets/image/osoba.png";
import React from "react";
import {DialogsItemProps} from "../../../App";



export const DialogsItem: React.FC<DialogsItemProps> = (props) => {
    return (
        <NavLink className={s.link} to={"/messages/" + props.id}>
            <li className={s.item}>
                <div className={s.user_avatar}>
                    <img src={osoba} alt="avatar"/>
                </div>
                <div className={s.message}>
                    <div className={s.user_name}>{props.name}</div>
                    <div className={s.last_message}>{props.lastMessage}</div>
                </div>
            </li>
        </NavLink>
    )
}



