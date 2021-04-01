import s from "./ProfileInfo.module.sass";
import React, {useState} from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import avatar from "./../../../assets/image/ufo-2.png"
import {ProfileStatusWithHook} from "./ProfileInfoStatus/ProfileStatusWithHook";
import {NavLink} from "react-router-dom";
import {ProfileInfoFormRedux} from "../ProfileInfoForm/ProfileInfoForm";
import {ProfileInfoDescription} from "./ProfileInfoDescription/ProfileInfoDescription";
import {ProfileType} from "../../../redux/redux-store";

export type ProfileInfoType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto?: (photo: string) => void
    updateProfile: (dataForm: ProfileType) => any
    refreshProfile: () => void
}


export const ProfileInfo = ({isOwner, profile, status, updateStatus, savePhoto, updateProfile}: ProfileInfoType) => {
    //достаем значения из объекта и складываем в массив
    //фильтруем массив
    //возвращаем разметку со значениями из массива

    let [editMode, setEditMode] = useState<boolean>(false)
    //более правильное решение: создать флаг в бизнесе и менять
    //режим редактирования в соответсствии с его значением
    let submitProfileInfoReduxForm = (dataForm: any) => {
        updateProfile(dataForm).then(() => setEditMode(!editMode))
    }

    if (!profile) return <Preloader/>

    return (
        <div>

            {
                editMode
                    //@ts-ignore
                    ? <div><ProfileInfoFormRedux initialValues={profile}
                                                 profile={profile}
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
                        {isOwner && <button onClick={() => setEditMode(!editMode)}>Edit</button>}

                    </div>

            }

        </div>
    )
}

/*//work in progress...
let arr2 = [2, 1, 1, 1, 1, 1, 1, 1, 1, 1]
let arr3 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 2]
let arr = [1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1] // "2" - 7 по счету, 6 по индексу, length - 13,индексы до 12

function findUniq(arr) {
    let res = 0;
    if (arr[0] !== arr[arr.length - 1]) {
        if (arr[0] !== arr[1]) {
            res = arr[0]
        } else {
            res = arr[arr.length - 1]
        }

        //нужно вставить вот эту проверку на нечетное количство элементов в массиве
        //на случай, если отличающееся число в центре
        if((arr.length / 2) % 2 !== 0 && arr[Math.floor(arr.length / 2)] === res) {
            res += arr[Math.floor(arr.length / 2)]
        }

    } else {
        res += arr[0]

        for (let i = 1; i < Math.ceil(arr.length / 2); i++) {

            if (arr[i] !== arr[arr.length - i - 1] && arr[i] === res) {
                res += arr[i]
                break
            } else if (arr[i] !== arr[arr.length - i - 1] && arr[arr.length - i - 1] === res) {
                res += arr[arr.length - i - 1]
                break
            }
        }
    }

    return res
}

findUniq(arr)
findUniq(arr3)
findUniq(arr2)*/











