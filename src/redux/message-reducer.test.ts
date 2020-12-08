import {FOLLOW, SET_USERS, UNFOLLOW, usersReducer} from "./users-reducer";
import {MessagesPageType} from "./redux-store";
import {ADD_MESSAGE, messageReducer, UPDATE_NEW_MESSAGE_TEXT} from "./message-reducer";

let state: MessagesPageType;

beforeEach(() => {
    state = {
        messages: [
            {id: 1, name: "Он", textMessage: "Hello"},
            {id: 2, name: "Ты", textMessage: "Hello"},
            {id: 1, name: "Он", textMessage: "Ты такая хорошая! Ты даже лучше, чем сахар!"},
            {id: 2, name: "Ты", textMessage: "Спасибо! Приходи сегодня"},
        ],

        newMessageText: ""
    }
})

test("messageReducer with ADD_MESSAGE", () => {

    let action = {type: ADD_MESSAGE} as const
    let newState = messageReducer(state, action)

    expect(newState.messages.length).toBe(5)
    expect(newState.messages[4].id).toBe(2)
})

test("messageReducer with UPDATE_NEW_MESSAGE_TEXT", () => {

    let action = {type: UPDATE_NEW_MESSAGE_TEXT, word: "Все готово"} as const
    let newState = messageReducer(state, action)

    expect(newState.newMessageText).toBe("Все готово")
})


/*
test("error", () => {
    expect(() => {
        usersReducer(state, {type: "FAKE"})
    }).toThrowError();
})*/
