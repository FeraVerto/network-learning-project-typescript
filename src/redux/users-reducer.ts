import {UsersType, UserType} from "./redux-store";

export const FOLLOW = "FOLLOW"
export const UNFOLLOW = "UNFOLLOW"
export const SET_USERS = "SET_USERS"
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
export const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"

export const initialState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2
}

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>
export type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
export type setTotalUsersCountAC = ReturnType<typeof setTotalUsersCountAC>

export function usersReducer(state = initialState, action: followACType | unfollowACType | setUsersACType | setCurrentPageACType | setTotalUsersCountAC) {
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

        default:
            /*throw new Error("Bad action type")*/
            return state
    }
}

export const followAC = (id: number) => ({type: FOLLOW, id: id} as const)
export const unfollowAC = (id: number) => ({type: UNFOLLOW, id: id} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage: currentPage} as const)
export const setTotalUsersCountAC = (totalCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalCount: totalCount} as const)