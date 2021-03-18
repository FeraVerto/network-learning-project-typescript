import React, {useState} from 'react'
import {useSelector} from "react-redux";
import {ProfileType} from "../Profile/ProfileContainer";
import {ProfileInfoFormRedux} from "../Profile/ProfileInfoForm/ProfileInfoForm";
import {ProfileInfoDescription} from "../Profile/ProfileInfo/ProfileInfoDescription/ProfileInfoDescription";

export const Settings = () => {
    let profile = useSelector<ProfileType>(state => state)
    let [editMode, setEditMode] = useState(false)
    return (
        <div>
            {
                editMode
                    ? <div>
                        <ProfileInfoFormRedux/>
                        <button onClick={() => setEditMode(!editMode)}>Save</button>
                    </div>
                    : <div>
                        <ProfileInfoDescription profile={profile}/>
                        <button onClick={() => setEditMode(!editMode)}>Edit</button>
                    </div>
            }
        </div>
    )
}