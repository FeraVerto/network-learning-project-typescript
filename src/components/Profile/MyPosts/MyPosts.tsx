import React, {createRef, useState} from "react";
import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.css";
import {ProfilePageType} from "../../../redux/state";
import {ProfileType} from "../Profile";

import {TaskType} from "../../../../../../it-incubator-todolist-ts-01/src/App";


export const MyPosts: React.FC<ProfileType>  = (props) => {
    let newPosts = props.posts.map(p => <MyPost id={p.id} message={p.message} like={p.like}/>)

    /*Создаем ссылку на какой-то элемент из jsx*/
    let newPostElement = React.createRef<HTMLTextAreaElement>();

    /*let [post, setPost] = useState()
    let [changePost, setChangePost] = useState()*/

    let addPost = () => {
        /*setPost(props.addPost(changePost))*/
            props.addPost();
    }

    let onPostChange = () => {
        if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }
    }

    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement} value={props.newPostText} placeholder="Напиши че-нить" onChange={onPostChange}/>
                {/*value={post} onChange={(e) => {setChangePost(e.currentTarget.value)}}*/}
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