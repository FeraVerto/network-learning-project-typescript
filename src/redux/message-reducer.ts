import React from 'react';
import {actionType, MessagesPageType} from "./store";

const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

let initialState = {
    messages: [
        {id: 1, name1: "Инженер", textMessage1: "Hello", name2: "Особа", textMessage2: "Hi"},
        {id: 2, name1: "Инженер", textMessage1: "Как дела?", name2: "Особа", textMessage2: "Хорошо"}
    ],

    newMessageText: ""
}

export function messageReducer(state: MessagesPageType = initialState, action: actionType) {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 1,
                name1: "Инженер",
                textMessage1: state.newMessageText,
                name2: "Особа",
                textMessage2: ""
            }
            state.messages.push(message);
            state.newMessageText = ""
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.word;
            return state;

        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageTextAC = (word: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, word: word} as const)