import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType, PostType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
    isAuth: boolean | null
}

type mapDispatchToPropsType = {
    addPostAC: () => void
    updateNewPostTextAC: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        isAuth: state.auth.isAuth
    }
}

export const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    addPostAC,
    updateNewPostTextAC
})(MyPosts)