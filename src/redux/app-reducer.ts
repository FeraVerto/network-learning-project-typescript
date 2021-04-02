import {getUserAuthData} from "./auth-reducer";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

//typing
type InitialStateType = {
    initialized: boolean
}

export type initializedSuccessType = ReturnType<typeof initializedSuccess>
type ActionType = initializedSuccessType

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionType>
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


export const initializeApp = (): ThunkType => async (dispatch) => {
    let promise = await dispatch(getUserAuthData() as any)
    Promise.all([promise]).then(() =>
        dispatch(initializedSuccess() as any)
    )
}

