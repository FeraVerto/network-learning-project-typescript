import s from "./ProfileInfo.module.sass";
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from "./../../../assets/image/ufo-2.png"
import {ProfileStatusWithHook} from "./ProfileStatusWithHook";
import {NavLink} from "react-router-dom";

type ProfileInfoType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: string
}

export const ProfileInfo = ({isOwner, profile, status, updateStatus}: ProfileInfoType) => {
    //достаем значения из объекта и складываем в массив
    //фильтруем массив
    //возвращаем разметку со значениями из массива
    let contact = profile !== null && profile !== undefined && Object
        .values(profile.contacts)
        .filter(item => item !== null)
        .map((a: any) => {
            return <div key={a} className={s.contact}>
                <a rel="stylesheet" href={a}>{a} </a>
            </div> //6326
        })

    if (!profile) return <Preloader/>

    return (
        <div className={s.profile}>

            <div className={s.profile_info}>
                <div>
                    {
                        profile.photos.large
                            ? <div className={s.avatar}><img src={profile.photos.large}
                                                             alt="user avatar"
                                                             width="180"
                                                             height="180"/></div>
                            : <div className={s.avatar}><img src={avatar}
                                                             alt="no avatar"
                                                             width="180"
                                                             height="240"/></div>

                    }
                    <div className={s.info_name}>{profile.fullName}</div>
                    <div>
                        <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                    </div>
                    <div className={s.button_block}>
                        <button className={s.button}><NavLink to={"/dialogs"}>Dialog</NavLink></button>
                        <button className={s.button}>Follow</button>
                    </div>
                </div>


                <div className={s.info}>

                    {
                        profile.lookingForAJobDescription === null
                            ?
                            <div
                                className={s.info_description}>Description: {profile.lookingForAJobDescription}</div>
                            : null
                    }

                    {
                        profile.lookingForAJob === null
                            ? <div className={s.info_job}>lookingForAJob: {profile.lookingForAJob}</div>
                            : null
                    }
                    <div className={s.info_contacts}>contacts:{contact}</div>

                </div>
            </div>
            <div>
            </div>
        </div>
    )
}











