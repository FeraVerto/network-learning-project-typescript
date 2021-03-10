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

let reducer = combineReducers({
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
export type RootReducerType = typeof reducer
//типизируем state
export type AppStateType = ReturnType<RootReducerType>

export type StoreType = Store<AppStateType>
/*export type StoreType = Store<AppStateType, actionType>*/

//создаем store
export let store: StoreType = createStore(reducer, applyMiddleware(thunkMiddleware));


/*------------------------------------------------------*/

export type PostType = {
    id: number
    message: string
    like: number
}

export type DialogsItemType = {
    id: number
    name: string
    lastMessage: string
    avatar: string
}

export type MessageType = {
    id: number
    name: string
    textMessage: string
}
export type FriendType = {
    id: number,
    name: string,
    avatar: string
}

export type UsersLocationType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    },
    followed: boolean
}


/*-------------------------------------------------------*/
/*Типизируем каждую ветку*/
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string,
    profile: any,
    status: any
}

export type DialogsPageType = {
    dialogs: Array<DialogsItemType>
}

export type MessagesPageType = {
    messages: Array<MessageType>
}

export type SidebarFriendsType = {
    friends: Array<FriendType>
}

export type UsersType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    isFetching: boolean
    followingInProgress: Array<number>
}

export type photoType = {
    small: string,
    large: string
}

export type authType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    photo: photoType
}



