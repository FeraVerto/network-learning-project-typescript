import React from "react";
import s from "./Profile.module.sass";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionType, AppStateType, ProfilePageType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppType} from "../../App";

/*export type ProfileType = {
    store: AppStateType
    dispatch: (action: actionType) => void
}*/

export const Profile: React.FC<AppType>  = (props) => {
    debugger
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store} dispatch={props.dispatch}/>
        </main>
    )
}
