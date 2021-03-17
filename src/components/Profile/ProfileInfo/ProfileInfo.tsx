import s from "./ProfileInfo.module.sass";
import React, {useState} from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from "./../../../assets/image/ufo-2.png"
import {ProfileStatusWithHook} from "./ProfileStatusWithHook";
import {NavLink} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Checkbox, Input} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import {CheckBox} from "@material-ui/icons";
import {PostsForm, PostsFormRedux, PostsFormType} from "../MyPosts/MyPosts";

type ProfileInfoType = {
    profile: any
    status: string
    updateStatus: (status: string) => void
    isOwner: string
    savePhoto?: (photo: string) => void
}

const maxLength25 = maxLengthCreator(25)

export const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto}: ProfileInfoType) => {
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

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            //@ts-ignore
            savePhoto(e.target.files[0])
        }
    }

    let [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) return <Preloader/>

    return (
        <div>
            {
                editMode ? <ProfileInfoForm contact={contact} onSubmit={() => {
                    }}/>
                    : <div className={s.profile}>

                        <div className={s.profile_info}>

                            <div>
                                <div className={s.avatar}><img src={profile.photos.large || avatar}
                                                               alt="user avatar"
                                                               width="180"
                                                               height="180"/></div>
                                {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

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
                                    !profile.lookingForAJobDescription &&
                                    <div
                                        className={s.info_description}>Description: {profile.lookingForAJobDescription}</div>
                                }

                                {
                                    !profile.lookingForAJob &&
                                    <div className={s.info_job}>lookingForAJob: {profile.lookingForAJob}</div>

                                }
                                <div className={s.info_contacts}>contacts:{contact}</div>

                            </div>
                        </div>
                    </div>
            }
            <button onClick={() => setEditMode(!editMode)}>Edit</button>
        </div>
    )
}

export const ProfileInfoForm = ({contact, handleSubmit}: any) => {
    console.log("ProfileInfoForm")
    return (
        <form onSubmit={handleSubmit}>
            <Field component={Input}
                   name={"fullName"}
                   placeholder={"Empty"}
                   validate={[requiredField, maxLength25]}
            />

            <Field component={Input}
                   name={"lookingForAJobDescription"}
                   placeholder={"Empty"}
                   validate={[requiredField, maxLength25]}
            />

            <Field component={Checkbox}
                   name={"lookingForAJob"}
                   placeholder={"Empty"}
                   validate={[requiredField, maxLength25]}
            />

            <div className={s.info_contacts}>contacts:
                {contact.map((c: string) => <Field component={Input}
                                                   name={c}
                                                   placeholder={"Empty"}
                                                   validate={[requiredField, maxLength25]}
                />)}
            </div>
        </form>
    )
}

export const ProfileInfoFormRedux = reduxForm<PostsFormType>({
    form: 'edit-profile'
})(ProfileInfoForm)











