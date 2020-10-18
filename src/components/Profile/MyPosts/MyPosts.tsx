import React from "react";
import MyPost from "./Post/MyPost";
import s from "./MyPosts.module.css";

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Delete post</button>
            </div>
            <div>
                <MyPost message='Hi' like={15}/>
                <MyPost message='Bye' like={25}/>
            </div>
        </div>
    )
}

export default MyPosts;