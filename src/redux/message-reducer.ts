//typing
export type MessageType = {
    id: number
    name: string
    textMessage: string
}

/*export type MessagesPageType = {
    messages: Array<MessageType>
}*/

type initialStateType = typeof initialState
type ActionType = addMessageType
//typing

export const ADD_MESSAGE = "samurai-network/message/ADD_MESSAGE"

let initialState = {
    messages: [
        {id: 1, name: "Он", textMessage: "Hello"},
        {id: 2, name: "Ты", textMessage: "Hello"},
        {id: 1, name: "Он", textMessage: "Ты такая хорошая! Ты даже лучше, чем сахар!"},
        {id: 2, name: "Ты", textMessage: "Спасибо! Приходи сегодня"},
    ] as Array<MessageType>
}

export type addMessageType = ReturnType<typeof addMessage>

export const messageReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: 2, name: "Ты", textMessage: action.newMessageText}]
            };

        default:
            return state
    }
}

//newMessageText: string
//action creator
//object
export const addMessage = (newMessageText: string) => ({type: ADD_MESSAGE, newMessageText} as const)