import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import React from "react";
import s from './ProfileInfoForm.module.sass'
import avatar from "../../../assets/image/ufo-2.png";


type ProfileInfoFormType = {
    profile: any
    isOwner: boolean
    savePhoto?: (photo: string) => void
}


export const ProfileInfoForm = ({profile, isOwner, handleSubmit, savePhoto, error}: any) => {

    const onMainPhotoSelected = (e: any) => {
        if (e.target.files.length) {
            //@ts-ignore
            savePhoto(e.target.files[0])
        }
    }

    console.log("error", error)

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
                    />
                </span>

                <div className={s.item_form}> lookingForAJobDescription:
                    <Field component={Input}
                           name={"lookingForAJobDescription"}
                           placeholder={"Empty"}
                    />
                </div>

                <div className={s.item_form}> lookingForAJob:
                    <Field component={Input}
                           name={"lookingForAJob"}
                           placeholder={"Empty"}
                           type={"checkbox"}
                    />
                </div>

                <div className={s.item_form}> AboutMe:
                    <Field component={Textarea}
                           name={"aboutMe"}
                           placeholder={"Empty"}
                    />
                </div>


                <div className={s.info_contacts}>contacts:
                    {
                        Object.keys(profile.contacts).map(c => <div>{c}<Field key={c}
                                                                              component={Input}
                                                                              name={"contacts." + c}
                                                                              placeholder={"Empty"}

                        /></div>)
                    }
                </div>

                {error && <div className={s.formSummaryError}>{error}</div>}

                <button>Save</button>
            </form>
        </div>

    )
}

export const ProfileInfoFormRedux = reduxForm<ProfileInfoFormType>({
    form: 'edit-profile'
})(ProfileInfoForm)