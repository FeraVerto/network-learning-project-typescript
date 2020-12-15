import React from "react";
import s from "./Profile.module.sass";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

/*<div className="Photo - main_photo">
    <div className="Photo-Profile"></div>
    <div className="Меню-профайл"></div>
</div>
<div className="ыы"></div>
<div className="ввы"></div>
<div className="ыыы"></div>*/

export const Profile = () => {
    return (
        <main className={s.main_profile}>
            <MyPostsContainer/>
        </main>
    )
}
