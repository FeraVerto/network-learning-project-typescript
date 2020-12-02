import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/message-reducer";
import Messages from "./Messages";
import {StoreContext} from "../../../StoreContext/StoreContext";


export const MessagesContainer = () => {


    return (
        <StoreContext.Consumer>
            { store => {
                let state = store.getState().messagesPage

                const addMessage = () => {
                    store.dispatch(addMessageAC());
                }

                const onChangeMessage = (text: string) => {
                    store.dispatch(updateNewMessageTextAC(text))
                }
                return <Messages addMessage={addMessage}
                                 onChangeMessage={onChangeMessage}
                                 messages={state.messages}
                                 newMessageText={state.newMessageText}

                />
            }}
        </StoreContext.Consumer>
    )
}
