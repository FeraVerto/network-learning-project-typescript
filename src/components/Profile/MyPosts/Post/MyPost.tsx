import React from "react";
import s from "./MyPost.module.css";
import logo from "../../../../assets/image/logo.png";

type MyPostPropsType = {
    message: string
    like: number
}

const MyPost: React.FC<MyPostPropsType> = (props) => {
    return (
        <div>
            <img className={s.post_avatar} src={logo} alt="Аватарка"/>
            <div>{props.message}</div>
            <span>{props.like}</span>
        </div>
    )
}

export default MyPost;