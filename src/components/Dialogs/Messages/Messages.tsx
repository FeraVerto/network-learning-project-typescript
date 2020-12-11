import React from "react";
import s from "./Messages.module.sass";
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {MessageType} from "../../../redux/redux-store";
import {TextareaAutosize} from "@material-ui/core";

type MessagesType = {
    messages: Array<MessageType>
    addMessage: () => void
    onChangeMessage: (text: string) => void
    newMessageText: string
}

const Messages: React.FC<MessagesType> = (props) => {
    let newMessages = props.messages.map(m => <div key={m.id} className={s.dialog_body}>
        {/*Не охота верстать, сделать потом*/}

        <div className={m.id === 1 ? s.message_one : ""}>
            <div>{m.id === 1 ? m.name : null}</div>
            <div>{m.id === 1 ? m.textMessage : null}</div>
        </div>
        <div className={m.id === 2 ? s.message_two : ""}>
            <div>{m.id === 2 ? m.name : null}</div>
            <div>{m.id === 2 ? m.textMessage : null}</div>
        </div>


    </div>)

    let newElement = React.createRef<HTMLTextAreaElement>();

    /* let [message, setMessage] = useState()
     let [change, setChange] = useState()
 */
    const addMessage = () => {
        /*setMessage(props.addMessage(change))*/
        //Чтобы вынести в отдельную переменную, нужно типизировать эту переменную
        //так как action определяется как {type: string
        props.addMessage();
    }

    const onChangeMessage = () => {
        props.onChangeMessage(newElement.current ? newElement.current.value : "----")
    }

    return (
        <div className={s.dialog_window}>
            <div className={s.dialog_header}>
                <NavLink to="/dialogs">
                    <Button variant="contained" color="default">Exit</Button>
                </NavLink>
                <div>Avatar + name</div>
            </div>
            {newMessages}
            <div className={s.dialog_footer}>
                <TextareaAutosize ref={newElement}
                                  rows={5}
                                  value={props.newMessageText}
                                  onChange={onChangeMessage}
                                  aria-label="empty textarea"
                                  placeholder="Empty"
                                  className={s.dialog_footer_textarea}
                />
                {/*
                <textarea ref={newElement} value={props.newMessageText} onChange={onChangeMessage} rows={5}></textarea>
*/}
                {/*value={message} onChange={(e) => {setChange(e.currentTarget.value)}}*/}
                <Button
                    fullWidth={true}
                    onClick={addMessage}
                    variant="contained"
                    color="default"
                    className={s.button}
                    /*endIcon={<Icon>send</Icon>}*/
                >Send
                </Button>
                {/*<button onClick={addMessage}>Send</button>*/}
            </div>
        </div>
    )
}

export default Messages;