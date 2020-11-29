import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.sass";
import React from "react";
import {Avatar} from "@material-ui/core";
import {DialogsItemType} from "../../../redux/redux-store";


export const DialogsItem: React.FC<DialogsItemType> = (props) => {
    return (
        <NavLink className={s.link} to={"/messages/" + props.id}>
            <li className={s.item}>
                <Avatar alt="Remy Sharp" src={props.avatar} />
                <div className={s.message}>
                    <div className={s.user_name}>{props.name}</div>
                    <div className={s.last_message}>{props.lastMessage}</div>
                </div>
            </li>
        </NavLink>
    )
}



