import React from "react";
import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "../../../types/types";

type mapStateToPropsType = {
    posts: Array<PostType>
    isAuth: boolean | null
    photo?: string
}

type mapDispatchToPropsType = {
    addPostAC: (newPostText: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        isAuth: state.auth.isAuth,
        photo: state.profilePage.profile?.photos.small
    }
}

export const MyPostsContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {
    addPostAC
})(MyPosts)