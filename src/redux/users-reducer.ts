import {UsersType, UserType} from "./redux-store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"

const initialState: UsersType = {
    users: []
}

export type followACType = ReturnType<typeof followAC>
export type unfollowACType = ReturnType<typeof unfollowAC>
export type setUsersACType = ReturnType<typeof setUsersAC>

export function usersReducer(state = initialState, action: followACType | unfollowACType | setUsersACType) {
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
                users: [...state.users, ...action.users]
            }

        default:
            return state
    }
}

export const followAC = (id: number) => ({type: FOLLOW, id: id} as const)
export const unfollowAC = (id: number) => ({type: UNFOLLOW, id: id} as const)
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users: users} as const)