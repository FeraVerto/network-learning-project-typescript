import React from "react";
import s from "./Profile.module.sass";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {actionType, AppStateType, ProfilePageType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </main>
    )
}
