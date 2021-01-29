import React from "react";
import s from "./Profile.module.sass";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export const Profile = () => {
    return (
        <main className={s.main_profile}>
            <MyPostsContainer/>
        </main>
    )
}
