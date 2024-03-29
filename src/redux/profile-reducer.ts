import {profileAPI, ResultCodesEnum, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";
import {photoType} from "./auth-reducer";
import {PostType, ProfileType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {FormAction} from "redux-form/lib/actions";

//typing
export type addPostAC = ReturnType<typeof addPostAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>
export type setUserStatus = ReturnType<typeof setUserStatus>
export type updateUserStatus = ReturnType<typeof updateUserStatus>
export type savePhotoACType = ReturnType<typeof savePhotoAC>

type ActionType = addPostAC | setUserProfileType | setUserStatus | updateUserStatus | savePhotoACType

type initialStateType = typeof initialState
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
//typing


const ADD_POST = "samurai-network/profile/ADD_POST"
const SET_PROFILE_INFO = "samurai-network/profile/SET_PROFILE_INFO"
const SET_STATUS = "samurai-network/profile/SET_STATUS"
const UPDATE_STATUS = "samurai-network/profile/UPDATE_STATUS"
const SAVE_PHOTO = "samurai-network/profile/SAVE_PHOTO"

let initialState = {
    posts: [
        {id: 1, message: "Сегодня был чудесный день!", like: 25},
        {id: 2, message: "Я покушал и поспал", like: 40},
        {id: 3, message: "Но не выспался", like: 1}
    ] as Array<PostType>,
    /* profile: {
         userId: null,
         lookingForAJob: false,
         lookingForAJobDescription: null,
         fullName: null,
         contacts: {
             github: null,
             vk: null,
             facebook: null,
             instagram: null,
             twitter: null,
             website: null,
             youtube: null,
             mainLink: null
         },
         photos: {
             small: null,
             large: null
         }
     },*/

    profile: null as ProfileType | null,

    status: ""
}

export const profileReducer = (state = initialState, action: ActionType): initialStateType => {
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

        case SAVE_PHOTO:
            return {
                ...state, profile: {...state.profile, photos: action.photo} as ProfileType
            }

        default:
            return state
    }
}

//newPostText: string
//action creator
//object
export const addPostAC = (newPostText: string) => ({type: ADD_POST, newPostText} as const)

//profile: ProfileType
//action creator
//object
export const setUserProfile = (profile: ProfileType) => ({
    type: SET_PROFILE_INFO,
    profile
} as const)

//status: string
//action creator
//object
export const setUserStatus = (status: string) => ({
    type: SET_STATUS,
    status
} as const)

//status: string
//action creator
//object
export const updateUserStatus = (status: string) => ({
    type: UPDATE_STATUS,
    status
} as const)

//photo: string
//action creator
//object
export const savePhotoAC = (photo: photoType) => ({
    type: SAVE_PHOTO,
    photo
} as const)

//userId: string
//return function
//dispatch
//server request, dispatch action creator
export const getUserProfile = (userId: string): ThunkType => async (dispatch) => {
    let data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}
//ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
//userId: string
//return function
//dispatch
//server request, dispatch action creator
export const getStatus = (userId: string): ThunkType=> async (dispatch) => {
    let res = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(res.data))
}

//status: string
//return function
//dispatch
//server request, dispatch action creator
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let res = await profileAPI.updateStatus(status)
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(updateUserStatus(status))
    }
}

//photo: string
//return function
//dispatch
//server request, dispatch action creator
export const savePhoto = (photo: string): ThunkType => async (dispatch) => {
    let res = await profileAPI.savePhoto(photo)
    if (res.data.resultCode === ResultCodesEnum.Success) {
        console.log("res.data.data",res.data.data)
        //@ts-ignore
        dispatch(savePhotoAC(res.data.data))
    }
}

//dataForm: ProfileType
//return function
//dispatch, getState
//server request, dispatch action creator
export const updateProfile = (dataForm: ProfileType): ThunkType => async (dispatch, getState) => {
    let userId = getState().auth.id
    let res = await profileAPI.updateProfile(dataForm)
    if (res.data.resultCode === ResultCodesEnum.Success) {
        //@ts-ignore
        dispatch(getUserProfile(userId))
    } else {
        //@ts-ignore
        dispatch(stopSubmit("edit-profile", {_error: res.data.messages[0]}))
        return Promise.reject(res.data.messages[0])
    }
}

