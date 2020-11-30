import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/message-reducer";
import Messages from "./Messages";
import {AppType} from "../../../App";


export const MessagesContainer: React.FC<AppType> = (props) => {


    const addMessage = () => {
        props.dispatch(addMessageAC());
    }

    const onChangeMessage = (text: string) => {
        props.dispatch(updateNewMessageTextAC(text))
    }

    return (<Messages addMessage={addMessage}
                      onChangeMessage={onChangeMessage}
                      messages={props.store.messagesPage.messages}
                      newMessageText={props.store.messagesPage.newMessageText}

    />)
}
