import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType, PostType} from "../../../redux/redux-store";
import {Dispatch} from "redux";


type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
}

type mapDispatchToPropsType = {
    addPost: () => void
    onPostChange: (text: string) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },

        onPostChange: (text: string) => {
            dispatch(updateNewPostTextAC(text));
        }
    }
}

export const MyPostsContainer = connect<mapStateToPropsType,mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts)