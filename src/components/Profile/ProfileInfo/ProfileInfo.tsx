import s from "./ProfileInfo.module.sass";
import React from "react";
import avatar from './../../../assets/image/avatar.jpg'
import {Preloader} from "../../common/Preloader/Preloader";
import {Button} from "@material-ui/core";

type ProfileInfoType = {
    profile: any
}

export const ProfileInfo = (props: ProfileInfoType) => {
    console.log(props)
    if(!props.profile) return <Preloader/>
    return (
        <div className={s.profile_info}>
            <img src={props.profile.photos.large} alt="" width="180" height="180"/>
            <div>{props.profile.fullName}</div>
            <div>lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
            <div>lookingForAJob: {props.profile.lookingForAJob}</div>
            <div>contacts:
                <div>{props.profile.contacts.facebook}</div>
                <div>{props.profile.contacts.github}</div>
                <div>{props.profile.contacts.vk}</div>
                <div>{props.profile.contacts.instagram}</div>
                <div>{props.profile.contacts.twitter}</div>
                <div>{props.profile.contacts.website}</div>
                <div>{props.profile.contacts.youtube}</div>
                <div>{props.profile.contacts.mainLink}</div>
            </div>
            <button className={s.button}>Dialog</button>
            <button className={s.button}>Follow</button>
        </div>

    )
}