import React from "react";
import s from "./MyPost.module.css";
import logo from "../../../../assets/image/logo.png";
import {PostType} from "../../../../redux/store";


const MyPost: React.FC<PostType> = (props) => {

    return (
        <div>
            <img className={s.post_avatar} src={logo} alt="Аватарка"/>
            <div>{props.message}{props.id}</div>
            <span>{props.like}</span>
        </div>
    )
}

export default MyPost;