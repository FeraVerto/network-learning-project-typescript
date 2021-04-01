import {Dispatch} from "redux";
import {getUserAuthData} from "./auth-reducer";

//typing
type InitialStateType = {
    initialized: boolean
}

export type initializedSuccessType = ReturnType<typeof initializedSuccess>
type ActionType = initializedSuccessType
//typing

export const INITIALIZED_SUCCESS = 'samurai-network/app/INITIALIZED_SUCCESS'

export const initialState: InitialStateType = {
    initialized: false
}

//state, action
//change state
//new state
export const appReducer = (state = initialState, action: ActionType): InitialStateType => {
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

//create action
//object {type: INITIALIZED_SUCCESS}
const initializedSuccess = () => ({
    type: INITIALIZED_SUCCESS
} as const)


export const initializeApp = () => async (dispatch: Dispatch) => {
    let promise = await dispatch(getUserAuthData() as any)
    Promise.all([promise]).then(() =>
        dispatch(initializedSuccess() as any)
    )
}

