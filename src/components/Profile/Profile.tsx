import React from "react";
import s from "./Profile.module.sass";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export const Profile = (props: any) => {
    console.log("Profile props", props)
    return (
        <main className={s.main_profile}>
            <ProfileInfo {...props}
                         isOwner={props.isOwner}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </main>
    )
}
