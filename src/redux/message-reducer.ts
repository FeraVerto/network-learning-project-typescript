export const ADD_MESSAGE = "ADD_MESSAGE"


export type addMessageACType = ReturnType<typeof addMessageAC>

let initialState = {
    messages: [
        {id: 1, name: "Он", textMessage: "Hello"},
        {id: 2, name: "Ты", textMessage: "Hello"},
        {id: 1, name: "Он", textMessage: "Ты такая хорошая! Ты даже лучше, чем сахар!"},
        {id: 2, name: "Ты", textMessage: "Спасибо! Приходи сегодня"},
    ]

}

export function messageReducer(state = initialState, action: addMessageACType) {
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

export const addMessageAC = (newMessageText: string) => ({type: ADD_MESSAGE, newMessageText} as const)