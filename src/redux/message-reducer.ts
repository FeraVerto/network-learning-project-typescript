const ADD_MESSAGE = "ADD_MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"

export type addMessageACType = ReturnType<typeof addMessageAC>
export type updateNewMessageTextACType = ReturnType<typeof updateNewMessageTextAC>

let initialState = {
    messages: [
        {id: 1, name: "Он", textMessage: "Hello"},
        {id: 2, name: "Ты", textMessage: "Hello"},
        {id: 1, name: "Он", textMessage: "Ты такая хорошая! Ты даже лучше, чем сахар!"},
        {id: 2, name: "Ты", textMessage: "Спасибо! Приходи сегодня"},
    ],

    newMessageText: ""
}

export function messageReducer(state = initialState, action: addMessageACType | updateNewMessageTextACType) {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 2, name: "Ты", textMessage: state.newMessageText}],
                newMessageText: ""
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.word
            };

        default:
            return state
    }
}

export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const updateNewMessageTextAC = (word: string) => ({type: UPDATE_NEW_MESSAGE_TEXT, word: word} as const)