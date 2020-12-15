import s from "./ProfileInfo.module.sass";
import React from "react";
import avatar from './../../../assets/image/avatar.jpg'

export const ProfileInfo = () => {
    return (
        <div className={s.profile_info}>
            <img src={avatar} alt="" width="180" height="180"/>
            <div>Info</div>
        </div>

    )
}