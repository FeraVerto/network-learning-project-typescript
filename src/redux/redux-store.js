import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {messageReducer} from "./message-reducer";
import {sidebarReducer} from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    messagesPage: messageReducer,
    sidebar: sidebarReducer
})

let store = createStore()