import {UsersType, UserType} from "./redux-store";
import {usersAPI} from "../api/api";

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
export const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
export const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS"

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
                users: state.users.map(u => {
                    return action.id === u.id ? {...u, followed: true} : u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    return action.id === u.id ? {...u, followed: false} : u
                })
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

export const requestUsers = (page: number | string, pageSize: number) => (dispatch: any) => {
    dispatch(setToggleIsFetching(true))
    dispatch(setCurrentPage(page))
    usersAPI.getUsers(page, pageSize).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setToggleIsFetching(false))
    })


    /*usersAPI.getUsersPage(currentPage, pageSize).then(data => {
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
        dispatch(setToggleIsFetching(false))
    })*/

    /*usersAPI.getUser(userId).then(data => {
        dispatch(setUserProfile(data))
    })*/
}

export const follow = (id: number) => (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, id))
    usersAPI.follow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        })

}

export const unfollow = (id: number) => (dispatch: any) => {
    dispatch(toggleFollowingProgress(true, id))
    usersAPI.unfollow(id)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(toggleFollowingProgress(false, id))
        })
}
