import React from "react";
import s from "./Dialogs.module.sass";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {DialogsItemType} from "../../redux/redux-store";
import { Redirect } from "react-router-dom";

type DialogsType = {
    dialogs: Array<DialogsItemType>
    isAuth: boolean | null
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let newData = props.dialogs.map(d => <DialogsItem key={d.id} id={d.id} name={d.name} lastMessage={d.lastMessage}
                                                      avatar={d.avatar}/>)

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <ul className={s.list}>
            {newData}
        </ul>
    )
}

export default Dialogs;
