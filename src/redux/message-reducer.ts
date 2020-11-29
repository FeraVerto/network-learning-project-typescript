import {MessagesPageType} from "./redux-store";

const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

export type actionMessageType = addMessageAC | updateNewMessageTextAC
export type addMessageAC = ReturnType<typeof addMessageAC>
export type updateNewMessageTextAC = ReturnType<typeof updateNewMessageTextAC>

let initialState = {
    messages: [
        {id: 1, name: "Инженер", textMessage: "Hello"},
        {id: 2, name: "Особа", textMessage: "Hello"},
        {id: 1, name: "Инженер", textMessage: "Ты такая хорошая! Ты даже лучше, чем сахар!"},
        {id: 2, name: "Особа", textMessage: "Спасибо! Приходи сегодня"},
    ],

    newMessageText: ""
}

export function messageReducer(state: MessagesPageType = initialState, action: actionMessageType) {
    switch (action.type) {
        case ADD_MESSAGE:
            let message = {
                id: 1,
                name: "Инженер",
                textMessage: state.newMessageText,
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