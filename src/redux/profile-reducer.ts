import React from 'react';
import {actionType, ProfilePageType} from "./store";

const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let initialState = {
    posts: [
        {id: 1, message: "Это передача сдохни или умри!", like: 25},
        {id: 2, message: "Или сдохни", like: 40},
        {id: 3, message: "Или умри", like: 1}
    ],

    newPostText: ""
}

export function profileReducer(state: ProfilePageType = initialState, action: actionType) {
    switch (action.type) {
        case ADD_POST:
            let post = {id: 5, message: state.newPostText, like: 25}
            state.posts.push(post);
            state.newPostText = ''
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text;
            return state;

        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text} as const)
