import s from "./ProfileInfo.module.sass";
import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from "./../../../assets/image/ufo-2.png"
import {ProfileType} from "./ProfileInfoContainer";

type ProfileInfoType = {
    profile: any
}

export const ProfileInfo = (props: ProfileInfoType) => {

    /*let arr = []
    for (let c in props.profile?.contacts) {
        props.profile?.contacts[c] !== null && arr.push(props.profile?.contacts[c])
    }*/

    //достаем значения из объекта и складываем в массив
    //фильтруем массив
    //возвращаем разметку со значениями из массива
    let contact = Object
        .values(props.profile.contacts)
        .filter(item => item !== null)
        .map((a: any) => {
            return <div>{a}</div>
        })

    if (!props.profile) return <Preloader/>

    return (
        <div className={s.profile_info}>
            {
                props.profile.photos.large
                    ? <img src={props.profile.photos.large} alt="" width="180" height="180"/>
                    : <img src={avatar} alt="" width="180" height="180"/>
            }

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

            <div className={s.info_contacts}>contacts:
                {contact}
            </div>
            <button className={s.button}>Dialog</button>
            <button className={s.button}>Follow</button>
        </div>

    )
}