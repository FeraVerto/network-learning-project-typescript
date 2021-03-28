import React, {useEffect, useState} from 'react'
import {ProfileInfoFormRedux} from "../Profile/ProfileInfoForm/ProfileInfoForm";
import {ProfileInfoDescription} from "../Profile/ProfileInfo/ProfileInfoDescription/ProfileInfoDescription";
import {useDispatch, useSelector} from "react-redux";
import {getStatus, getUserProfile, updateProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

export const Settings = withRouter(({savePhoto, match, history}: any) => {

        let profileState = useSelector<any>(state => state.profilePage.profile)
        let authorizedUserId = useSelector<any>(state => state.auth.id)

        let [editMode, setEditMode] = useState(false)
        let dispatch = useDispatch()

        let submitProfileInfoReduxForm = (dataForm: any) => {
            dispatch(updateProfile(dataForm))
            setEditMode(!editMode)
        }

        let userId = match.params.userId;

        useEffect(() => {
            dispatch(getUserProfile(userId));
        }, [])


        if (!userId) {
            userId = authorizedUserId;
            if (!userId) {
                //Не самое лучшее решение, но по-быструхе можно так сделать
                history.push("/login");
            }
        }

        return (
            <div>
                {
                    editMode
                        //@ts-ignore
                        ? <div><ProfileInfoFormRedux initialValues={profileState}
                                                     isOwner={match.params.userId}
                                                     profile={profileState}
                                                     onSubmit={submitProfileInfoReduxForm}
                                                     savePhoto={savePhoto}
                                                     setEditMode={setEditMode}
                                                     editMode={editMode}
                        />

                        </div>
                        : <div>
                            <ProfileInfoDescription profile={profileState}/>
                            <button onClick={() => setEditMode(!editMode)}>Edit</button>
                        </div>
                }
            </div>
        )
    }
)