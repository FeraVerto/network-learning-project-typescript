import s from './ProfileInfoDescription.module.sass'
import React from "react";
import {ProfilePageType, ProfileType} from "../../../../types/types";

type ProfileInfoDescriptionType = {
    profile: ProfileType
}

export const ProfileInfoDescription: React.FC<ProfileInfoDescriptionType> = (
    props) => {
    /*userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: ContactsType
    photos: PhotosType*/
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
            {props.profile !== null &&
            <div className={s.info}>
                <div className={s.info_name}><b>fullName:</b> {props.profile.fullName}</div>

                {
                    props.profile.lookingForAJobDescription &&
                    <div
                        className={s.info_description}><b>Description:</b> {props.profile.lookingForAJobDescription}
                    </div>
                }

                {
                    props.profile.lookingForAJob &&
                    <div className={s.info_job}><b>lookingForAJob:</b> {props.profile.lookingForAJob}</div>

                }

                {
                    props.profile.aboutMe &&
                    <div className={s.info_job}><b>AboutMe:</b> {props.profile.aboutMe}</div>

                }

                {/*<div>
                    Contacts:
                    {
                        props.profile &&
                        Object.keys(props.profile.contacts).map(c => <div key={"contacts." + c}>{props.profile.contacts[c]}</div>)
                    }
                </div>*/}

            </div>}
        </div>
    )
}