import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {messageReducer} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
import {appReducer} from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

//типизируем reducers
export type RootReducerType = typeof rootReducer
//типизируем state
export type AppStateType = ReturnType<RootReducerType>

export type StoreType = Store<AppStateType>
/*export type StoreType = Store<AppStateType, actionType>*/

//@ts-ignore
/*const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export let store: StoreType = createStore(reducer, composeEnhancers(applyMiddleware(thunkMiddleware)));*/
//создаем store
export let store: StoreType = createStore(rootReducer, applyMiddleware(thunkMiddleware));


/*------------------------------------------------------*/

export type FriendType = {
    id: number,
    name: string,
    avatar: string
}

export type UsersLocationType = {
    city: string
    country: string
}


export type SidebarFriendsType = {
    friends: Array<FriendType>
}


/*---------------------------Users----------------------------*/
/*export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    },
    followed: boolean
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    isFetching: boolean
    followingInProgress: Array<number>
}*/

/*export type photoType = {
    small: string,
    large: string
}*/
/*---------------------------Users----------------------------*/

/*---------------------------Auth----------------------------*/
/*export type authType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    photo: photoType
}*/
/*---------------------------Auth----------------------------*/



