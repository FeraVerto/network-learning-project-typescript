import React from "react";
import {addMessageAC, MessageType} from "../../../redux/message-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    messages: Array<MessageType>
}

type mapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        messages: state.messagesPage.messages
    }
}

/*https://stackoverflow.com/questions/49808004/parameter-dispatch-implicitly-has-an-any-type*/
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessage: (newMessageText: string) => {
            dispatch(addMessageAC(newMessageText));
        }
    }
}

export const MessagesContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(Messages)
