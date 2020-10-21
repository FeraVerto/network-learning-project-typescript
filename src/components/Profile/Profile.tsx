import React from "react";
import s from "./Profile.module.sass";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsPropsType} from "../../App";


const Profile: React.FC<MyPostsPropsType>= (props) => {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </main>
    )
}

export default Profile;