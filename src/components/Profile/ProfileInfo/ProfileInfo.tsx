import s from "./ProfileInfo.module.sass";
import React from "react";
import background_image from './../../../assets/image/background_profile.jpeg'

export const ProfileInfo = () => {
    return (
        <div className={s.profile_info}>
            <div className={s.img_block}>
                <img src={background_image} alt="background_image"/>
            </div>
            <div className={s.menu_info}>
                ava + descriptions
            </div>
        </div>
    )
}