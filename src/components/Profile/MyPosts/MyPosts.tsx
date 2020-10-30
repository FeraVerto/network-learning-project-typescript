import React, {createRef, useState} from "react";
import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.css";
import {ProfilePageType} from "../../../redux/state";
import {ProfileType} from "../Profile";


export const MyPosts: React.FC<ProfileType>  = (props) => {
    let newPosts = props.posts.map(p => <MyPost id={p.id} message={p.message} like={p.like}/>)

    /*Создаем ссылку на какой-то элемент из jsx*/
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        debugger
        if(newPostElement.current) {
            let text = newPostElement.current.value
            props.addPost(text)
        }
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement} placeholder="Привет">Привет</textarea>
                <button onClick={addPost}>Add post</button>
                <button>Delete post</button>
            </div>
            <div>
                {newPosts}
            </div>
        </div>
    )
}

export default MyPosts;