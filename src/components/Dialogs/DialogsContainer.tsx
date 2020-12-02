import React from "react";
import s from "./Dialogs.module.sass";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {DialogsPageType} from "../../redux/redux-store";
import {addPostAC, updateNewPostTextAC} from "../../redux/profile-reducer";
import {MyPosts} from "../Profile/MyPosts/MyPosts";
import {StoreContext} from "../../StoreContext/StoreContext";
import Dialogs from "./Dialogs";

type DialogsType = {
    /*state: DialogsPageType*/
}

const DialogsContainer: React.FC<DialogsType> = (props) => {

    return (
        <StoreContext.Consumer>
            {store => <Dialogs state={store.getState().dialogsPage}/>}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
