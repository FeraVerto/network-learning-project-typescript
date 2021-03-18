import s from "./ProfileInfo.module.sass";
import React, {useState} from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from "./../../../assets/image/ufo-2.png"
import {ProfileStatusWithHook} from "./ProfileInfoStatus/ProfileStatusWithHook";
import {NavLink} from "react-router-dom";
import {ProfileType} from "../ProfileContainer";
import {ProfileInfoFormRedux} from "../ProfileInfoForm/ProfileInfoForm";
import {ProfileInfoDescription} from "./ProfileInfoDescription/ProfileInfoDescription";

type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: string
    savePhoto?: (photo: string) => void
}


export const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}: ProfileInfoType) => {
    //достаем значения из объекта и складываем в массив
    //фильтруем массив
    //возвращаем разметку со значениями из массива
    /*let contact = profile !== null && profile !== undefined && Object
        .values(profile.contacts)
        .filter(item => item !== null)
        .map((a: any) => {
            return <div key={a} className={s.contact}>
                <a rel="stylesheet" href={a}>{a} </a>
            </div> //6326
        })*/

    console.log("ProfileInfo", profile)
    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            //@ts-ignore
            savePhoto(e.target.files[0])
        }
    }

    let [editMode, setEditMode] = useState<boolean>(false)

    let submitProfileInfoReduxForm = (value: any) => {
        //add thunk
    }

    if (!profile) return <Preloader/>

    return (
        <div>

            {
                editMode
                    //@ts-ignore
                    ? <div><ProfileInfoFormRedux contact={profile.contacts} onSubmit={() => {
                    }}/>
                        <button onClick={() => setEditMode(!editMode)}>Save</button>
                    </div>
                    : <div className={s.profile}>
                        <div className={s.profile_info}>
                            <div>
                                <div className={s.avatar}><img src={profile.photos.large || avatar}
                                                               alt="user avatar"
                                                               width="180"
                                                               height="180"/></div>
                                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

                                <div>
                                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                                </div>
                                <div className={s.button_block}>
                                    <button className={s.button}><NavLink to={"/dialogs"}>Dialog</NavLink></button>
                                    <button className={s.button}>Follow</button>
                                </div>
                            </div>

                            <ProfileInfoDescription profile={profile} contact={profile.contacts}/>
                        </div>
                        <button onClick={() => setEditMode(!editMode)}>Edit</button>
                    </div>

            }

        </div>
    )
}















