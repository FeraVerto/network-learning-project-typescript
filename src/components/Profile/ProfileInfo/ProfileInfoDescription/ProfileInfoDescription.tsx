import s from './ProfileInfoDescription.module.sass'
import React from "react";
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";

export const ProfileInfoDescription = ({profile}: any) => {
    console.log("Contacts", profile)
    /* let contact = profile !== null && profile !== undefined && Object
         .values(profile.contacts)
         .filter(item => item !== null)
         .map((a: any) => {
             return <div key={a} className={s.contact}>
                 <a rel="stylesheet" href={a}>{a} </a>
             </div> //6326
         })*/

    return (
        <div>

            <div className={s.info}>
                <div className={s.info_name}>fullName: {profile.fullName}</div>

                {
                    profile.lookingForAJobDescription &&
                    <div
                        className={s.info_description}>Description: {profile.lookingForAJobDescription}</div>
                }

                {
                    profile.lookingForAJob &&
                    <div className={s.info_job}>lookingForAJob: {profile.lookingForAJob}</div>

                }

                {
                    profile.aboutMe &&
                    <div className={s.info_job}>AboutMe: {profile.aboutMe}</div>

                }
                {/*<div className={s.info_contacts}>contacts:{profile.contacts}</div>*/}

                {
                    Object.keys(profile.contacts).map(c => <div key={"contacts." + c}>{c}</div>)
                }


            </div>
        </div>
    )
}