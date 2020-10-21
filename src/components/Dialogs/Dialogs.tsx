import React from "react";
import s from "./Dialogs.module.sass";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import { DialogsType} from "../../App";


const Dialogs: React.FC<DialogsType> = (props) => {

    let newData = props.data.map(d => <DialogsItem id = {d.id} name={d.name} lastMessage={d.lastMessage}/>)

    return (
        <ul className={s.list}>
            {newData}
        </ul>
    )
}

export default Dialogs;
