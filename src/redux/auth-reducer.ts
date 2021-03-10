import {authType} from "./redux-store";
import {authAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_USER_PHOTO = 'SET_USER_PHOTO'


export const initialState: authType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: {
        small: "",
        large: ""
    }
}

export type setUserDataType = ReturnType<typeof setUserData>
export type setUserPhotoType = ReturnType<typeof setUserPhoto>

export function authReducer(state = initialState, action: setUserDataType | setUserPhotoType) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }

        case SET_USER_PHOTO:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}

const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)

const setUserPhoto = (small: string, large: string) => ({
    type: SET_USER_PHOTO,
    data: {small, large}
} as const)


export const getUserAuthData = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let id = response.data.data.id
            let email = response.data.data.email
            let login = response.data.data.login
            dispatch(setUserData(id, email, login, true))
        }
    })
}

export const getUserPhoto = (userId: string) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        if (response.data.resultCode === 0) {
            let small = response.data.photos.small
            let large = response.data.photos.large
            dispatch(setUserPhoto(small, large))
        }
    })
}

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe, captcha).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getUserAuthData() as any)
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
            dispatch(stopSubmit("login", {_error: message}))
        }
    })
}

export const logoutTC = () => (dispatch: Dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
    })
}