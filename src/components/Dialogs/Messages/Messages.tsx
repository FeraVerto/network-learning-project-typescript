import React from "react";
import s from "./Messages.module.sass";
import {MessagesPropsType} from "../../../App";

const Messages: React.FC<MessagesPropsType> = (props) => {

    let newMessages = props.messages.map(m=> <div>{m.textMessage}</div>)

    return (
        <div className={s.dialog_window}>
            <div className={s.dialog_header}>
                <button>Exit</button>
                <div>Avatar + name</div>
            </div>
            <div className={s.dialog_body}>
                {newMessages}
            </div>
            <div className={s.dialog_footer}>
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Messages;