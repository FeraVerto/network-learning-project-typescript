import s from './ProfileInfoDescription.module.sass'
import React, {useEffect} from "react";
import {Field} from "redux-form";
import {Input} from "../../../common/FormsControls/FormsControls";
import {useSelector} from "react-redux";

export const ProfileInfoDescription = ({profile}: any) => {
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
                <div className={s.info_name}><b>fullName:</b> {profile.fullName}</div>

                {
                    profile.lookingForAJobDescription &&
                    <div
                        className={s.info_description}><b>Description:</b> {profile.lookingForAJobDescription}</div>
                }

                {
                    profile.lookingForAJob &&
                    <div className={s.info_job}><b>lookingForAJob:</b> {profile.lookingForAJob}</div>

                }

                {
                    profile.aboutMe &&
                    <div className={s.info_job}><b>AboutMe:</b> {profile.aboutMe}</div>

                }


                <div>
                    Contacts:
                    {
                        Object.keys(profile.contacts).map(c => <div key={"contacts." + c}>{profile.contacts[c]}</div>)
                    }
                </div>


            </div>
        </div>
    )
}