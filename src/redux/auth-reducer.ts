import {authType} from "./redux-store";
import {authAPI, usersAPI} from "../api/api";

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

export const getUserPhoto = (userId: string) => (dispatch: any) => {
    usersAPI.getProfile(userId).then(response => {
        if (response.data.resultCode === 0) {
            let small = response.data.photos.small
            let large = response.data.photos.large
            dispatch(setUserPhoto(small, large))
        }
    })
}