import React from "react";
import s from "./Messages.module.sass";
import {NavLink} from "react-router-dom";
import Button from '@material-ui/core/Button';
import {MessageType} from "../../../redux/redux-store";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MessagesType = {
    messages: Array<MessageType>
    addMessage: (newMessageText: string) => void
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

    const onSubmit = (formData: MessagesPropsFormType) => {
        /*props.loginTC(formData)*/
        props.addMessage(formData.newMessageText)
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
            <MessagesReduxForm onSubmit={onSubmit}/>

        </div>
    )
}

export default Messages;

export type MessagesPropsFormType = {
    newMessageText: string
}

export const MessagesForm: React.FC<InjectedFormProps<MessagesPropsFormType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.dialog_footer}>
                <Field
                    component={"textarea"}
                    name={"newMessageText"}
                    placeholder={"Enter your message"}
                    className={s.dialog_footer_textarea}
                />

                <button className={s.button}>Send</button>
            </div>
        </form>
    )
}

export const MessagesReduxForm = reduxForm<MessagesPropsFormType>({
    form: 'newMessageText'
})(MessagesForm)