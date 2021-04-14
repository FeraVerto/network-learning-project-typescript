import {ResultCodesEnum, usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObInArray} from "../utils/object-helpers";
import {UserType} from "../types/types";
import {AppStateType} from "./redux-store";
import {ThunkAction} from "redux-thunk";

//typing
/*export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    isFetching: boolean
    followingInProgress: Array<number>
}*/

export type followACType = ReturnType<typeof followSuccess>
export type unfollowACType = ReturnType<typeof unfollowSuccess>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof setToggleIsFetching>
export type toggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgress>
export type setFilerType = ReturnType<typeof setFiler>

export type ActionType =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleFollowingProgressACType
    | setFilerType

type initialStateType = typeof initialState
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
//typing

export const FOLLOW = "samurai-network/users/FOLLOW"
export const UNFOLLOW = "samurai-network/users/UNFOLLOW"
export const SET_USERS = "samurai-network/users/SET_USERS"
export const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "samurai-network/users/SET_TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "samurai-network/users/TOGGLE_IS_FETCHING"
export const TOGGLE_FOLLOWING_PROGRESS = "samurai-network/users/TOGGLE_FOLLOWING_PROGRESS"
export const SET_FILTER = "samurai-network/users/SET_FILTER"

export const initialState = {
    users: [] as Array<UserType>,
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 2 as number | string,
    isFetching: false,
    followingInProgress: [] as Array<number>, // array of users id
    searchOption: '' as string | undefined
}

export const usersReducer = (state = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObInArray(state.users, action.id, "id", {followed: true})
            }

        case UNFOLLOW:
            return {
                ...state,
                users: updateObInArray(state.users, action.id, "id", {followed: false})
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id !== action.userId)]
            }

        case SET_FILTER:
            return {
                ...state,
                searchOption: action.term
            }
        default:
            return state
    }
}

//id: number
//action creator
//object
export const followSuccess = (id: number) => ({
    type: FOLLOW,
    id
} as const)

//id: number
//action creator
//object
export const unfollowSuccess = (id: number) => ({
    type: UNFOLLOW,
    id
} as const)

//users: Array<UserType>
//action creator
//object
export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
} as const)

//currentPage: number | string
//action creator
//object
export const setCurrentPage = (currentPage: number | string) => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)

//totalCount: number
//action creator
//object
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)

//isFetching: boolean
//action creator
//object
export const setToggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)

//isFetching: boolean, userId: number
//action creator
//object
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

export const setFiler = (term? : string) => ({
    type: SET_FILTER,
    term
} as const)

//page: number | string, pageSize: number
//return function
//Dispatch<ActionType>, getState: () => AppStateType
//server request getUsers, dispatch action creator
export const requestUsers = (page: number | string, pageSize: number, term?: string): ThunkType =>
    async (dispatch, getState) => {
        dispatch(setToggleIsFetching(true))
        dispatch(setCurrentPage(page))
        dispatch(setFiler(term))
        let data = await usersAPI.getUsers(page, pageSize, term)
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setToggleIsFetching(false))
    }

//id: number, dispatch: Dispatch, apiMethod: any, actionCreator: any
//server request follow-unfollow, dispatch action creator
const _followUnfollowFlow = async (id: number,
                                   dispatch: Dispatch<ActionType>,
                                   apiMethod: any,
                                   actionCreator: (userId: number) => followACType | unfollowACType) => {

    dispatch(toggleFollowingProgress(true, id))
    let response = await apiMethod(id)
    if (response.data.resultCode === ResultCodesEnum.Success) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id))
}

//id: number
//return function
//dispatch
//function followUnfollowFlow
export const follow = (id: number): ThunkType =>
    async (dispatch) => {
        _followUnfollowFlow(id, dispatch, usersAPI.follow.bind(usersAPI), followSuccess)
    }

//id: number
//return function
//dispatch
//function followUnfollowFlow
export const unfollow = (id: number): ThunkType => async (dispatch) => {
    _followUnfollowFlow(id, dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
