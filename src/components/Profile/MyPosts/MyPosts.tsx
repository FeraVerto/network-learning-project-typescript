import React from "react";
import MyPost from "./Post/MyPost";
import {ProfileType} from "../Profile";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

import s from "./MyPosts.module.css"
import {Button, TextareaAutosize} from "@material-ui/core";


export const MyPosts: React.FC<ProfileType> = (props) => {
    let newPosts = props.posts.map(p => <MyPost id={p.id} message={p.message} like={p.like}/>)
    /*Создаем ссылку на какой-то элемент из jsx*/
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    /*let [post, setPost] = useState()
    let [changePost, setChangePost] = useState()*/
    let addPost = () => {
        /*setPost(props.addPost(changePost))*/
        props.dispatch(addPostAC());
    }

    let onPostChange = () => {
        /*if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }*/
        /*newPostElement.current && props.updateNewPostText(newPostElement.current.value)*/

        props.dispatch(updateNewPostTextAC(newPostElement.current ? newPostElement.current.value : "----"));
    }

    return (
        <div>
            My posts
            <div className={s.posts}>
                {/*<textarea ref={newPostElement}
                          value={props.newPostText}
                          placeholder="Напиши че-нить"
                          onChange={onPostChange}/>*/}
                {/*value={post} onChange={(e) => {setChangePost(e.currentTarget.value)}}*/}
                <TextareaAutosize ref={newPostElement}
                                  rows={5}
                                  value={props.newPostText}
                                  onChange={onPostChange}
                                  aria-label="empty textarea"
                                  placeholder="Empty"
                                  className={s.posts_textarea}
                />
                <div className={s.button_block}>
                    {/*<Button onClick={addPost}
                            variant="contained"
                            color="default"
                            className={s.posts_button}
                    >Add Post
                    </Button>
                    <Button variant="contained"
                            color="default"
                            className={s.posts_button}
                    >Delete post
                    </Button>*/}
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

export default MyPosts;