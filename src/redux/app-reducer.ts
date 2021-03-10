import {Dispatch} from "redux";
import {getUserAuthData} from "./auth-reducer";

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


export const initialState = {
    initialized: false
}

export type initializedSuccessType = ReturnType<typeof initializedSuccess>

export function appReducer(state = initialState, action: initializedSuccessType) {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
} as const)


export const initializeApp = () => (dispatch: Dispatch) => {
    let promise = dispatch(getUserAuthData() as any)
    Promise.all([promise]).then(() =>
        dispatch(initializedSuccess() as any)
    )
}

