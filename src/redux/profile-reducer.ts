import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = "samurai-network/profile/ADD_POST"
const SET_PROFILE_INFO = "samurai-network/profile/SET_PROFILE_INFO"
const SET_STATUS = "samurai-network/profile/SET_STATUS"
const UPDATE_STATUS = "samurai-network/profile/UPDATE_STATUS"


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

export const getUserProfile = (userId: string) => async (dispatch: Dispatch) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(res.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === 0) {
        dispatch(updateUserStatus(status))
    }
}

