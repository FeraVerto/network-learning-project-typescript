import {authType} from "./redux-store";
import {authAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {FormDataType} from "../components/Login/Login";

export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_USER_PHOTO = 'SET_USER_PHOTO'
export const SET_LOGGED_IN = 'SET_LOGGED_IN'


export const initialState: authType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photo: {
        small: "",
        large: ""
    },
    isLoggedIn: false
}

export type setUserDataType = ReturnType<typeof setUserData>
export type setUserPhotoType = ReturnType<typeof setUserPhoto>
export type setIsLoggedInType = ReturnType<typeof setIsLoggedIn>

export function authReducer(state = initialState, action: setUserDataType | setUserPhotoType | setIsLoggedInType) {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
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

const setUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    data: {id, email, login}
} as const)

const setUserPhoto = (small: string, large: string) => ({
    type: SET_USER_PHOTO,
    data: {small, large}
} as const)

const setIsLoggedIn = (value: boolean) => ({
    type: SET_LOGGED_IN,
    value
} as const)


export const getUserAuthData = () => (dispatch: any) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let id = response.data.data.id
            let email = response.data.data.email
            let login = response.data.data.login
            dispatch(setUserData(id, email, login))
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

export const loginTC = (formData: FormDataType) => (dispatch: Dispatch) => {
    authAPI.login(formData).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setIsLoggedIn(true))
        }
    })
}