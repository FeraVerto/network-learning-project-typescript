import React, {useEffect, useState} from 'react'
import {ProfileInfoFormRedux} from "../Profile/ProfileInfoForm/ProfileInfoForm";
import {ProfileInfoDescription} from "../Profile/ProfileInfo/ProfileInfoDescription/ProfileInfoDescription";
import {useDispatch, useSelector} from "react-redux";
import {getUserProfile, updateProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {ProfileType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";


type PathParamsType = {
    userId: string
}

//@ts-ignore
export const Settings: React.FC<any> = withRouter(({savePhoto, match, history}) => {

        let profileState = useSelector<AppStateType, ProfileType>(state => state.profilePage.profile)
        let authorizedUserId = useSelector<AppStateType>(state => state.auth.id)

        let [editMode, setEditMode] = useState<boolean>(false)
        let dispatch = useDispatch()

        let submitProfileInfoReduxForm = (dataForm: ProfileType) => {
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
                        /*//@ts-ignore*/
                        ? <div><ProfileInfoFormRedux initialValues={profileState}
                                                     isOwner={match.params.userId}
                                                     profile={profileState}
                            //@ts-ignore
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