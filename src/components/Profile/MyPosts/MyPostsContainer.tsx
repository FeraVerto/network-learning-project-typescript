import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {AppType} from "../../../App";


export const MyPostsContainer: React.FC<AppType> = (props) => {
    let state= props.store

    let addPost = () => {
        props.dispatch(addPostAC());
    }

    let onPostChange = (text: string) => {
        props.dispatch(updateNewPostTextAC(text));
    }

    return (<MyPosts state={state.profilePage.posts}
                     newPostText={state.profilePage.newPostText}
                     onPostChange={onPostChange}
                     addPost={addPost}
    />)
}