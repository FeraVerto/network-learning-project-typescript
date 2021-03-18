import s from './ProfileInfoDescription.module.sass'
import React from "react";

export const ProfileInfoDescription = ({profile}: any) => {
    return (
        <div>

            <div className={s.info}>
                <div className={s.info_name}>fullName: {profile.fullName}</div>

                {
                    !profile.lookingForAJobDescription &&
                    <div
                        className={s.info_description}>Description: {profile.lookingForAJobDescription}</div>
                }

                {
                    !profile.lookingForAJob &&
                    <div className={s.info_job}>lookingForAJob: {profile.lookingForAJob}</div>

                }
                <div className={s.info_contacts}>contacts:{profile.contact}</div>

            </div>
        </div>
    )
}