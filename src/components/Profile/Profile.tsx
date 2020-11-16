import React from "react";
import s from "./Profile.module.sass";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";
import {AddMessage, AddPostType, UpdateNewMessageText, UpdateNewPostTextType} from "../../redux/store";

export type ProfileType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: AddPostType | UpdateNewPostTextType | AddMessage | UpdateNewMessageText) => void
}

export const Profile: React.FC<ProfileType>  = (props) => {
    return (
        <main className={s.main}>
            Hello
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostText={props.newPostText} dispatch={props.dispatch}/>
        </main>
    )
}
