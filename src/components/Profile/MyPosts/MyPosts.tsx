import React from "react";
import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.css";
import {MyPostsPropsType} from "../../../App";


export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let newPosts = props.posts.map(p => <MyPost message={p.message} like={p.like}/>)

    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Delete post</button>
            </div>
            <div>
                {newPosts}
            </div>
        </div>
    )
}

export default MyPosts;