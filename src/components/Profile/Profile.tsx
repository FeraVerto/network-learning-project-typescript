import React from "react";
import s from "./Profile.module.sass";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = ({isOwner, profile, status, updateStatus, savePhoto}: any) => {
    return (
        <main className={s.main_profile}>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
            />
            <MyPostsContainer/>
        </main>
    )
}
