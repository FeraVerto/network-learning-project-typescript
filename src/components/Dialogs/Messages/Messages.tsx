import React from "react";
import s from "./Messages.module.sass";
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {actionType, MessageType} from "../../../redux/redux-store";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/message-reducer";

type MessagesType = {
    messages: Array<MessageType>
    newMessageText: string
    dispatch: (action: actionType) => void
}

const Messages: React.FC<MessagesType> = (props) => {
    let newMessages = props.messages.map(m => <div key={m.id} className={s.dialog_body}>
        {/*Не охота верстать, сделать потом*/}

            <div className={m.id === 1 ? s.message_one : s.message_two}>
                <div>{m.id === 1 ? m.name : null}</div>
                <div>{m.id === 1 ? m.textMessage: null}</div>
            </div>
            <div className={m.id === 2 ? s.message_two : s.message_one}>
                <div>{m.id === 2 ? m.name : null}</div>
                <div>{m.id === 2 ? m.textMessage: null}</div>
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
        props.dispatch(addMessageAC());
    }

    const onChangeMessage = () => {
        props.dispatch(updateNewMessageTextAC(newElement.current ? newElement.current.value : "----"))
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
                <textarea ref={newElement} value={props.newMessageText} onChange={onChangeMessage}></textarea>
                {/*value={message} onChange={(e) => {setChange(e.currentTarget.value)}}*/}
                <button onClick={addMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages;