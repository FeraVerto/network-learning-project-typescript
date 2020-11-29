import React from "react";
import s from "./MyPost.module.css";
import logo from "../../../../assets/image/logo.png";
import {PostType} from "../../../../redux/redux-store";
import {Avatar, Checkbox, FormControlLabel} from "@material-ui/core";
import {Favorite, FavoriteBorder} from "@material-ui/icons";


const MyPost: React.FC<PostType> = (props) => {

    return (
        <div className={s.post_block}>
            <div className={s.post}>
                <Avatar src="https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg" alt="Аватарка"/>
                <FormControlLabel control={<Checkbox
                    icon={<FavoriteBorder/>}
                    checkedIcon={<Favorite/>}
                    name="checkedH"/>}
                                  label={props.like}

                />
            </div>
            <div className={s.post_text}>{props.message}</div>
        </div>
    )
}

export default MyPost;