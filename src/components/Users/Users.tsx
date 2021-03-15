import React from 'react'
import s from "./Users.module.sass"
import {UserType} from "../../redux/redux-store";
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";

type UsersType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
}

export const Users = ({users, totalUsersCount, pageSize, currentPage, onPageChanged, followingInProgress, unfollow, follow}: UsersType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>

            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalUsersCount={totalUsersCount}
                       pageSize={pageSize}/>

            <div className={s.users_list}>
                {
                    users.map(u => <User user={u} key={u.id}
                                         followingInProgress={followingInProgress}
                                         unfollow={unfollow}
                                         follow={follow}/>)
                }

            </div>

        </div>
    )
}
