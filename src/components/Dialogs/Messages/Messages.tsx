import React from "react";
import s from "./Messages.module.sass";

const Messages = () => {
    return (
        <div className={s.dialog_window}>
            <div className={s.dialog_header}>
                <button>Exit</button>
                <div>Avatar + name</div>
            </div>
            <div className={s.dialog_body}>
                <div>My message</div>
                <div>Her message</div>
            </div>
            <div className={s.dialog_footer}>
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>
    )
}

export default Messages;