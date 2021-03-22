import React, {useState} from 'react'
import {ProfileInfoFormRedux} from "../Profile/ProfileInfoForm/ProfileInfoForm";
import {ProfileInfoDescription} from "../Profile/ProfileInfo/ProfileInfoDescription/ProfileInfoDescription";
import {useSelector} from "react-redux";
import {ProfileInfoType} from "../Profile/ProfileInfo/ProfileInfo";

export const Settings = ({savePhoto}: any) => {

    let profileState = useSelector<ProfileInfoType>(state=> state.profile)
    let isOwnerState = useSelector<ProfileInfoType>(state=> state.isOwner)

    let [editMode, setEditMode] = useState(false)
    return (
        <div>
            {
                editMode
                    ? <div>
                       {/* <ProfileInfoFormRedux profile={profileState} isOwner={isOwnerState} savePhoto={savePhoto} onSubmit={() => {
                        }} />*/}
                        <button onClick={() => setEditMode(!editMode)}>Save</button>
                    </div>
                    : <div>
                        <ProfileInfoDescription profile={profileState}/>
                        <button onClick={() => setEditMode(!editMode)}>Edit</button>
                    </div>
            }
        </div>
    )
}