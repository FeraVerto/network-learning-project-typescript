import React from "react";
import {addMessageAC, updateNewMessageTextAC} from "../../../redux/message-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType, MessageType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    messages: Array<MessageType>
    newMessageText: string
}

type mapDispatchToPropsType = {
    addMessage: () => void
    onChangeMessage: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        messages: state.messagesPage.messages,
        newMessageText: state.messagesPage.newMessageText
    }
}

/*https://stackoverflow.com/questions/49808004/parameter-dispatch-implicitly-has-an-any-type*/
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMessage: () => {
            dispatch(addMessageAC());
        },

        onChangeMessage: (text: string) => {
            dispatch(updateNewMessageTextAC(text))
        }
    }
}

export const MessagesContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Messages)
