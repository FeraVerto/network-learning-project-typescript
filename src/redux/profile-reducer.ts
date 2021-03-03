import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "ADD_POST"
const SET_PROFILE_INFO = "SET_PROFILE_INFO"
const SET_STATUS = "SET_STATUS"
const UPDATE_STATUS = "UPDATE_STATUS"


export type addPostAC = ReturnType<typeof addPostAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setUserStatus = ReturnType<typeof setUserStatus>
export type updateUserStatus = ReturnType<typeof updateUserStatus>


let initialState = {
    posts: [
        {id: 1, message: "Это передача сдохни или умри!", like: 25},
        {id: 2, message: "Или сдохни", like: 40},
        {id: 3, message: "Или умри", like: 1}
    ],
    profile: null,
    status: ""
}

export function profileReducer(state = initialState, action: addPostAC | setUserProfileType | setUserStatus | updateUserStatus) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 5, message: action.newPostText, like: 25}, ...state.posts],
            }

        case SET_PROFILE_INFO:
            return {
                ...state,
                profile: action.profile
            }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        case UPDATE_STATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }
}

export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)
export const setUserProfile = (profile: any) => ({
    type: SET_PROFILE_INFO,
    profile
} as const)

export const setUserStatus = (status: string) => ({
    type: SET_STATUS,
    status
} as const)

export const updateUserStatus = (status: string) => ({
    type: UPDATE_STATUS,
    status
} as const)

export const getUserProfile = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(res => {
        dispatch(setUserStatus(res.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    console.log("updateStatus")
    console.log(status)
    profileAPI.updateStatus(status).then(res => {
        if (res.data.resultCode === 0) {
            console.log("Status thunk")
            console.log(res.data)
            dispatch(updateUserStatus(status))
        }
    })
}

