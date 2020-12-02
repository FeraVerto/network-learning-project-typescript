import React from "react";
import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.css"
import {TextareaAutosize} from "@material-ui/core";
import {PostType} from "../../../redux/redux-store";


export type MyPostsType = {
    state: Array<PostType>
    onPostChange: (text: string) => void
    addPost: () => void
    newPostText: string
}


export const MyPosts: React.FC<MyPostsType> = (props) => {
    let newPosts = props.state.map(p => <MyPost id={p.id} message={p.message} like={p.like}/>)
    /*Создаем ссылку на какой-то элемент из jsx*/
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    /*let [post, setPost] = useState()
    let [changePost, setChangePost] = useState()*/
    let addPost = () => {
        /*setPost(props.addPost(changePost))*/
        props.addPost();
    }

    let onPostChange = () => {
        /*if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }*/
        /*newPostElement.current && props.updateNewPostText(newPostElement.current.value)*/
        props.onPostChange(newPostElement.current ? newPostElement.current.value : "----")
    }

    return (
        <div>
            My posts
            <div className={s.posts}>
                <TextareaAutosize ref={newPostElement}
                                  rows={5}
                                  value={props.newPostText}
                                  onChange={onPostChange}
                                  aria-label="empty textarea"
                                  placeholder="Empty"
                                  className={s.posts_textarea}
                />
                <div className={s.button_block}>
                    <button className={s.posts_button} onClick={addPost}>Add post</button>
                    <button className={s.posts_button}>Delete post</button>
                </div>
            </div>
            <div>
                {newPosts}
            </div>
        </div>
    )
}
