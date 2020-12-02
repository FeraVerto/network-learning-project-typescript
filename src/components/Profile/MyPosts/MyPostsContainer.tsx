import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {StoreContext} from "../../../StoreContext/StoreContext";


export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {store => {
                let state = store.getState().profilePage
                let addPost = () => {
                    store.dispatch(addPostAC());
                }

                let onPostChange = (text: string) => {
                    store.dispatch(updateNewPostTextAC(text));
                }
                return <MyPosts state={state.posts}
                                newPostText={state.newPostText}
                                onPostChange={onPostChange}
                                addPost={addPost}
                />
            }}
        </StoreContext.Consumer>
    )
}