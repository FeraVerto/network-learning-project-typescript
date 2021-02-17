import s from "./ProfileInfo.module.sass";
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from "./../../../assets/image/ufo-2.png"
import {ProfileStatus} from "./ProfileStatus";
import {updateStatus} from "../../../redux/profile-reducer";

type ProfileInfoType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
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
        <div className={s.profile_info}>
            {
                props.profile.photos.large
                    ? <img src={props.profile.photos.large} alt="" width="180" height="180"/>
                    : <img src={avatar} alt="" width="180" height="180"/>
            }

            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>

            <div className={s.info_name}>{props.profile.fullName}</div>
            {
                props.profile.lookingForAJobDescription === null
                    ? <div className={s.info_description}>Description: {props.profile.lookingForAJobDescription}</div>
                    : null
            }

            {
                props.profile.lookingForAJob === null
                    ? <div className={s.info_job}>lookingForAJob: {props.profile.lookingForAJob}</div>
                    : null
            }

            <div className={s.info_contacts}>contacts:{contact}</div>
            <button className={s.button}>Dialog</button>
            <button className={s.button}>Follow</button>
        </div>

    )
}