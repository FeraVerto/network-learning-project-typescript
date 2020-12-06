import React from "react";
import s from "./Profile.module.sass";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";


export const Profile = () => {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPostsContainer />
        </main>
    )
}
