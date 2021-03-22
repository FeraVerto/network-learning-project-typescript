import s from "./ProfileInfo.module.sass";
import React, {useState} from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from "./../../../assets/image/ufo-2.png"
import {ProfileStatusWithHook} from "./ProfileInfoStatus/ProfileStatusWithHook";
import {NavLink} from "react-router-dom";
import {ProfileType} from "../ProfileContainer";
import {ProfileInfoFormRedux} from "../ProfileInfoForm/ProfileInfoForm";
import {ProfileInfoDescription} from "./ProfileInfoDescription/ProfileInfoDescription";

export type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto?: (photo: string) => void
    updateProfile: (dataForm: ProfileType) => void
}


export const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, updateProfile}: ProfileInfoType) => {
    //достаем значения из объекта и складываем в массив
    //фильтруем массив
    //возвращаем разметку со значениями из массива


    let [editMode, setEditMode] = useState<boolean>(false)

    let submitProfileInfoReduxForm = (dataForm: any) => {
        console.log("submitProfileInfoReduxForm", dataForm)
        updateProfile(dataForm)
        setEditMode(!editMode)
    }

    if (!profile) return <Preloader/>

    return (
        <div>

            {
                editMode
                    //@ts-ignore
                    ? <div><ProfileInfoFormRedux profile={profile}
                                                 onSubmit={submitProfileInfoReduxForm}
                                                 isOwner={isOwner}
                                                 savePhoto={savePhoto}
                                                 setEditMode={setEditMode}
                                                 editMode={editMode}
                    />

                    </div>
                    : <div className={s.profile}>
                        <div className={s.profile_info}>
                            <div>
                                <div className={s.avatar}><img src={profile.photos.large || avatar}
                                                               alt="user avatar"
                                                               width="180"
                                                               height="180"/></div>
                                {/*{isOwner && <input type="file" onChange={onMainPhotoSelected}/>}*/}

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















