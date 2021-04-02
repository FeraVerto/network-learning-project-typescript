import React from "react";
import s from "./Dialogs.module.sass";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {DialogsItemType} from "../../types/types";

type DialogsType = {
    dialogs: Array<DialogsItemType>
    isAuth: boolean | null
}

const Dialogs: React.FC<DialogsType> = (props) => {

    let newData = props.dialogs.map(d => <DialogsItem key={d.id} id={d.id} name={d.name} lastMessage={d.lastMessage}
                                                      avatar={d.avatar}/>)

    return (
        <ul className={s.list}>
            {newData}
        </ul>
    )
}

export default withAuthRedirect(Dialogs);

