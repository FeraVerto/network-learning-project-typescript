import React, {useState} from "react";
import s from "./Messages.module.sass";
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {MessageType} from "../../../redux/state";

type MessagesType = {
    messages: Array<MessageType>
    addMessage: (newMessage: string) => void

}

const Messages: React.FC<MessagesType> = (props) => {
    let newMessages = props.messages.map(m => <div key={m.id} className={s.dialog_body}>
        {/*Не охота верстать, сделать потом*/}
        <div className={s.message_one}>
            <div>{m.name1}</div>
            <div>{m.textMessage1}</div>
        </div>
        <div className={s.message_two}>
            <div>{m.name2}</div>
            <div>{m.textMessage2}</div>
        </div>
    </div>)

    let newElement = React.createRef<HTMLTextAreaElement>();

   /* let [message, setMessage] = useState()
    let [change, setChange] = useState()
*/
    const addMessage = () => {
        /*setMessage(props.addMessage(change))*/
        if(newElement.current) {
            let message = newElement.current.value
            props.addMessage(message);
        }
    }

    return (
        <div className={s.dialog_window}>
            <div className={s.dialog_header}>
                <NavLink to="/dialogs">
                    <Button variant="contained" color="primary">Exit</Button>
                </NavLink>
                <div>Avatar + name</div>
            </div>
            {newMessages}
            <div className={s.dialog_footer}>
                <textarea ref={newElement}></textarea>
                {/*value={message} onChange={(e) => {setChange(e.currentTarget.value)}}*/}
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages;