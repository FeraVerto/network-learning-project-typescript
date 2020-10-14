import React from "react";
import s from "./MyPost.module.css";
import logo from "../../../../assets/image/logo.png";

type MyPostsPropsType = {
    message: string
    like: number
}

const MyPost = (props:MyPostsPropsType) => {
    return (
        <div>
            <img className={s.post_avatar} src={logo} alt="Аватарка"/>
            <div>{props.message}</div>
            <span>{props.like}</span>
        </div>
    )
}

export default MyPost;