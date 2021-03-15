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

export const ProfileInfo = (props: ProfileInfoType) => {
    //достаем значения из объекта и складываем в массив
    //фильтруем массив
    //возвращаем разметку со значениями из массива
    let contact = props.profile !== null && props.profile !== undefined && Object
        .values(props.profile.contacts)
        .filter(item => item !== null)
        .map((a: any) => {
            return <div key={a} className={s.contact}>
                <a rel="stylesheet" href={a}>{a} </a>
            </div> //6326
        })

    if (!props.profile) return <Preloader/>

    return (
        <div className={s.profile}>

            <div className={s.profile_info}>
                <div>
                    {
                        props.profile.photos.large
                            ? <div className={s.avatar}><img src={props.profile.photos.large}
                                                             alt="user avatar"
                                                             width="180"
                                                             height="180"/></div>
                            : <div className={s.avatar}><img src={avatar}
                                                             alt="no avatar"
                                                             width="180"
                                                             height="240"/></div>

                    }
                    <div className={s.info_name}>{props.profile.fullName}</div>
                    <div>
                        <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
                    </div>
                    <div className={s.button_block}>
                        <button className={s.button}><NavLink to={"/dialogs"}>Dialog</NavLink></button>
                        <button className={s.button}>Follow</button>
                    </div>
                </div>


                <div className={s.info}>

                    {
                        props.profile.lookingForAJobDescription === null
                            ?
                            <div
                                className={s.info_description}>Description: {props.profile.lookingForAJobDescription}</div>
                            : null
                    }

                    {
                        props.profile.lookingForAJob === null
                            ? <div className={s.info_job}>lookingForAJob: {props.profile.lookingForAJob}</div>
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











