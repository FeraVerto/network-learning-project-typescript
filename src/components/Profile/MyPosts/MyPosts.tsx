import React, {ChangeEvent} from "react";
import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.sass"
import {TextareaAutosize} from "@material-ui/core";
import {PostType} from "../../../redux/redux-store";
import {Redirect} from "react-router-dom";


export type MyPostsType = {
    posts: Array<PostType>
    updateNewPostTextAC: (text: string) => void
    addPostAC: () => void
    newPostText: string
    isAuth: boolean | null
}


const MyPosts: React.FC<MyPostsType> = (props) => {
    let newPosts = props.posts.map(p => <MyPost key={p.id} id={p.id} message={p.message} like={p.like}/>)
    /*Создаем ссылку на какой-то элемент из jsx*/
    /*let [post, setPost] = useState()
    let [changePost, setChangePost] = useState()*/
    let addPost = () => {
        /*setPost(props.addPost(changePost))*/
        props.addPostAC();
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }*/
        /*newPostElement.current && props.updateNewPostText(newPostElement.current.value)*/
        props.updateNewPostTextAC(e.target ? e.target.value : "----")
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.my_post}>
            <div className={s.posts_block}>
                <div className={s.posts}>
                    <TextareaAutosize
                                      rows={5}
                                      value={props.newPostText}
                                      onChange={onPostChange}
                                      aria-label="empty textarea"
                                      placeholder="Empty"
                                      className={s.posts_textarea}
                    />
                    <div className={s.button_block}>
                        <button className={s.posts_button} onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div>
                    {newPosts}
                </div>
            </div>
        </div>
    )
}

export default MyPosts


