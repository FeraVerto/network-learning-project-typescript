import React from "react";
import s from "./Profile.module.sass";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";

export type ProfileType = {
    posts: Array<PostType>
    addPost: () => void
    newPostText: string
    updateNewPostText: (word: string) => void

}

const Profile: React.FC<ProfileType>  = (props) => {
    return (
        <main className={s.main}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
        </main>
    )
}

export default Profile;