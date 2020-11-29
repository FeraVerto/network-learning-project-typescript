import {combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, updateNewPostTextAC} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {addMessageAC, messageReducer, updateNewMessageTextAC} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";

/*------------------------------------------------------*/
/*Типизируем каждый подобьект, начинаем с низшего уровня*/

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

/*-------------------------------------------------------*/
/*Типизируем каждую ветку*/
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsItemType>
}

export type MessagesPageType = {
    messages: Array<MessageType>
    newMessageText: string
}

export type SidebarFriendsType = {
    friends: Array<FriendType>
}

/*-------------------------------------------------------*/
/*Собираем все ветки в один обьект для state*/
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    messagesPage: MessagesPageType
    sidebar: SidebarFriendsType
}
/*-------------------------------------------------------*/

export type StoreType = {
    _state: RootStateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => RootStateType
    dispatch: (action: actionType) => void
}

export type actionType = addPostAC | updateNewPostTextAC | addMessageAC | updateNewMessageTextAC

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer
})

export let store = createStore(reducers);