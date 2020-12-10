import s from "./ProfileInfo.module.sass";
import React from "react";
import background_image from './../../../assets/image/background-image.jpeg'
import Navbar from "../../Navbar/Navbar";
import avatar from "./../../../assets/image/avatar.jpeg"

export const ProfileInfo = () => {
    return (
        <div className={s.profile_info}>
            <div className={s.img_block}>
                <img src={background_image} alt="background_image"/>
            </div>
            <div className={s.menu_info}>
                <div className={s.avatar_block}>
                    <div className={s.avatar}>
                        <img src={avatar} alt="" width="180" height="180"/>
                    </div>
                    <div>Еда Вкусная</div>
                </div>

                <div className={s.menu_list}>
                    <Navbar/>
                </div>
            </div>
        </div>
    )
}