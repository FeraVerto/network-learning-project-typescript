import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";


//typing
export type photoType = {
    small: string,
    large: string
}

export type authType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    photo: photoType
}

export type setUserDataType = ReturnType<typeof setUserData>
export type setUserPhotoType = ReturnType<typeof setUserPhoto>
//typing

export const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA'
export const SET_USER_PHOTO = 'samurai-network/auth/SET_USER_PHOTO'

export const initialState: authType = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    photo: {
        small: "",
        large: ""
    }
}

export const authReducer = (state = initialState, action: setUserDataType | setUserPhotoType): authType => {
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

//id: number | null, email: string | null, login: string | null, isAuth: boolean
//action creator
//object
const setUserData = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)


//small: string, large: string
//action creator
//object
const setUserPhoto = (small: string, large: string) => ({
    type: SET_USER_PHOTO,
    data: {small, large}
} as const)

//return function
//dispatch
//server request, dispatch action creator
export const getUserAuthData = () => async (dispatch: Dispatch) => {
    let res = await authAPI.me()
    if (res.data.resultCode === 0) {
        let id = res.data.data.id
        let email = res.data.data.email
        let login = res.data.data.login
        dispatch(setUserData(id, email, login, true))
    }
}

console.log("getUserAuthData", getUserAuthData())

//userId: string
//return function
//dispatch
//server request, dispatch action creator
export const getUserPhoto = (userId: string) => (dispatch: Dispatch) => {
    /*usersAPI.getProfile(userId).then(response => {
        if (response.data.resultCode === 0) {
            let small = response.data.photos.small
            let large = response.data.photos.large
            dispatch(setUserPhoto(small, large))
        }
    })*/
}

//email: string, password: string, rememberMe: boolean, captcha?: boolean
//return function
//dispatch
//server request, dispatch action creator
export const loginTC = (email: string, password: string, rememberMe: boolean, captcha?: boolean) => async (dispatch: Dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getUserAuthData() as any)
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error"
        dispatch(stopSubmit("login", {_error: message}))
    }
}


//return function
//dispatch
//server request, dispatch action creator
export const logoutTC = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}