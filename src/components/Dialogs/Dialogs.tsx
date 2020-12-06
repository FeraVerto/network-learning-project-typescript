import React from "react";
import s from "./Dialogs.module.sass";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {DialogsItemType} from "../../redux/redux-store";

type DialogsType = {
    dialogs: Array<DialogsItemType>
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let newData = props.dialogs.map(d => <DialogsItem key={d.id} id = {d.id} name={d.name} lastMessage={d.lastMessage} avatar={d.avatar}/>)

    return (
        <ul className={s.list}>
            {newData}
        </ul>
    )
}

export default Dialogs;
