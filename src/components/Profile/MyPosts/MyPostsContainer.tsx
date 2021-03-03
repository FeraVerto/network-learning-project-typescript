import React from "react";
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType, PostType} from "../../../redux/redux-store";

type mapStateToPropsType = {
    posts: Array<PostType>
    isAuth: boolean | null
}

type mapDispatchToPropsType = {
    addPostAC: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        isAuth: state.auth.isAuth
    }
}

export const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    addPostAC
})(MyPosts)