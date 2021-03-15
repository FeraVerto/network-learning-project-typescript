import {UsersType, UserType} from "./redux-store";
import {usersAPI} from "../api/api";
import {Dispatch} from "redux";
import {updateObInArray} from "../utils/object-helpers";

export const FOLLOW = "samurai-network/users/FOLLOW"
export const UNFOLLOW = "samurai-network/users/UNFOLLOW"
export const SET_USERS = "samurai-network/users/SET_USERS"
export const SET_CURRENT_PAGE = "samurai-network/users/SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "samurai-network/users/SET_TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "samurai-network/users/TOGGLE_IS_FETCHING"
export const TOGGLE_FOLLOWING_PROGRESS = "samurai-network/users/TOGGLE_FOLLOWING_PROGRESS"

export const initialState: UsersType = {
    users: [],
    pageSize: 50,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: []
}

export type followACType = ReturnType<typeof followSuccess>
export type unfollowACType = ReturnType<typeof unfollowSuccess>
export type setUsersACType = ReturnType<typeof setUsers>
export type setCurrentPageACType = ReturnType<typeof setCurrentPage>
export type setTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof setToggleIsFetching>
export type toggleFollowingProgressACType = ReturnType<typeof toggleFollowingProgress>

export type ActionType =
    followACType
    | unfollowACType
    | setUsersACType
    | setCurrentPageACType
    | setTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleFollowingProgressACType


export function usersReducer(state = initialState, action: ActionType) {
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
        default:
            return state
    }
}

export const followSuccess = (id: number) => ({
    type: FOLLOW,
    id
} as const)

export const unfollowSuccess = (id: number) => ({
    type: UNFOLLOW,
    id
} as const)

export const setUsers = (users: Array<UserType>) => ({
    type: SET_USERS,
    users
} as const)

export const setCurrentPage = (currentPage: number | string) => ({
    type: SET_CURRENT_PAGE,
    currentPage
} as const)

export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalCount
} as const)

export const setToggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
} as const)

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

export const requestUsers = (page: number | string, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setToggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(setToggleIsFetching(false))
}

const followUnfollowFlow = async (id: number, dispatch: Dispatch, apiMethod: any, actionCreator: any) => {

    dispatch(toggleFollowingProgress(true, id))
    let response = await apiMethod(id)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id))
    }
    dispatch(toggleFollowingProgress(false, id))
}

export const follow = (id: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(id, dispatch, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (id: number) => async (dispatch: Dispatch) => {
    followUnfollowFlow(id, dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}
