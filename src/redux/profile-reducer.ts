
const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const SET_PROFILE_INFO = "SET_PROFILE_INFO"


export type addPostAC = ReturnType<typeof addPostAC>
export type updateNewPostTextAC = ReturnType<typeof updateNewPostTextAC>
export type setUserProfileType = ReturnType<typeof setUserProfile>


let initialState = {
    posts: [
        {id: 1, message: "Это передача сдохни или умри!", like: 25},
        {id: 2, message: "Или сдохни", like: 40},
        {id: 3, message: "Или умри", like: 1}
    ],

    newPostText: "",
    profile: null
}

export function profileReducer(state = initialState, action: addPostAC | updateNewPostTextAC| setUserProfileType) {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [{id: 5, message: state.newPostText, like: 25}, ...state.posts],
                newPostText: ""
            }

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.text
            };

        case SET_PROFILE_INFO:
            return {
                ...state,
                profile: action.profile
            }

        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST} as const)
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, text: text} as const)
export const setUserProfile = (profile: any) => ({
    type: SET_PROFILE_INFO,
    profile
} as const)