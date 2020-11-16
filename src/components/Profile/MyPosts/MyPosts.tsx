import React from "react";
import MyPost from "./Post/MyPost";
import {ProfileType} from "../Profile";


export const MyPosts: React.FC<ProfileType>  = (props) => {
    let newPosts = props.posts.map(p => <MyPost id={p.id} message={p.message} like={p.like}/>)
    /*Создаем ссылку на какой-то элемент из jsx*/
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    /*let [post, setPost] = useState()
    let [changePost, setChangePost] = useState()*/
    let addPost = () => {
        /*setPost(props.addPost(changePost))*/
            props.dispatch({type: "ADD_POST"});
    }

    let onPostChange = () => {
        /*if (newPostElement.current) {
            props.updateNewPostText(newPostElement.current.value)
        }*/
        /*newPostElement.current && props.updateNewPostText(newPostElement.current.value)*/

        props.dispatch({type: "UPDATE-NEW-POST-TEXT", text: newPostElement.current ? newPostElement.current.value : "----"});
    }


    return (
        <div>
            My posts
            <div>
                <textarea ref={newPostElement}
                          value={props.newPostText}
                          placeholder="Напиши че-нить"
                          onChange={onPostChange}/>
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