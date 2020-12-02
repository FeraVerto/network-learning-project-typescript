import React from "react";
import {SidebarFriendsType} from "../../../redux/redux-store";
import {Avatar} from "@material-ui/core";
import s from "./Friends.module.sass";
import {AvatarGroup} from '@material-ui/lab';
import {Friends} from "./Friends";
import {StoreContext} from "../../../StoreContext/StoreContext";

export const FriendsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState().sidebar
                    return <Friends friends={state.friends}/>
                }
            }

        </StoreContext.Consumer>
    )
}