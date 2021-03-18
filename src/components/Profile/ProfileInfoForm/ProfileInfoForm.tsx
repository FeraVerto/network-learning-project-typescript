import {Field, reduxForm} from "redux-form";
import {Checkbox, Input} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utils/validators/validators";
import React from "react";
import s from './ProfileInfoForm.module.sass'

const maxLength25 = maxLengthCreator(25)

export const ProfileInfoForm = ({profile, handleSubmit}: any) => {
    console.log("ProfileInfoForm")
    return (
        <form onSubmit={handleSubmit}>
            <div className={s.item_form}> fullName:
                <Field component={Input}
                       name={"fullName"}
                       placeholder={"Empty"}
                       validate={[requiredField, maxLength25]}
                />
            </div>

            <div className={s.item_form}> lookingForAJobDescription:
                <Field component={Input}
                       name={"lookingForAJobDescription"}
                       placeholder={"Empty"}
                       validate={[requiredField, maxLength25]}
                />
            </div>

            <div className={s.item_form}> lookingForAJob:
                <Field component={Checkbox}
                       name={"lookingForAJob"}
                       placeholder={"Empty"}
                       validate={[requiredField, maxLength25]}
                />
            </div>


            {/*<div className={s.info_contacts}>contacts:
                {profile.contacts.map((c: string) => <Field component={Input}
                                                   name={c}
                                                   placeholder={"Empty"}
                                                   validate={[requiredField, maxLength25]}
                />)}
            </div>*/}
        </form>
    )
}

export const ProfileInfoFormRedux = reduxForm<any>({
    form: 'edit-profile'
})(ProfileInfoForm)