import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator} from "../../../utils/validators/validators";
import React from "react";
import s from './ProfileInfoForm.module.sass'
import avatar from "../../../assets/image/ufo-2.png";

const maxLength25 = maxLengthCreator(25)

type ProfileInfoFormType = {
    profile: any
    isOwner: boolean
    savePhoto?: (photo: string) => void
}


export const ProfileInfoForm = ({profile, isOwner, handleSubmit, savePhoto, setEditMode, editMode}: any) => {

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            //@ts-ignore
            savePhoto(e.target.files[0])
        }
    }

    console.log("ProfileInfoForm", profile)

    return (
        <div>
            <div className={s.avatar}><img src={profile.photos.large || avatar}
                                           alt="user avatar"
                                           width="180"
                                           height="180"/></div>
            {isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

            <form onSubmit={handleSubmit}>
                <span className={s.item_form}> fullName:
                    <Field component={Input}
                           name={"fullName"}
                           placeholder={"Full name"}
                           value={profile.fullName}
                    />
                </span>

                <div className={s.item_form}> lookingForAJobDescription:
                    <Field component={Input}
                           name={"lookingForAJobDescription"}
                           placeholder={"Empty"}
                           value={profile.lookingForAJobDescription}
                    />
                </div>

                <div className={s.item_form}> lookingForAJob:
                    <Field component={Input}
                           name={"lookingForAJob"}
                           placeholder={"Empty"}
                           value={profile.lookingForAJob}
                           type={"checkbox"}
                    />
                </div>

                <div className={s.item_form}> AboutMe:
                    <Field component={Textarea}
                           name={"aboutMe"}
                           placeholder={"Empty"}
                           value={profile.aboutMe}
                    />
                </div>


                <div className={s.info_contacts}>contacts:
                    {
                        Object.keys(profile.contacts).map(c => <div>{c}<Field component={Input}
                                                                              name={"contacts." + c}
                                                                              placeholder={"Empty"}
                                                                              value={c}
                                                                              key={c}
                        /></div>)
                    }
                </div>
                <button>Save</button>
            </form>
        </div>

    )
}

export const ProfileInfoFormRedux = reduxForm<ProfileInfoFormType>({
    form: 'edit-profile'
})(ProfileInfoForm)