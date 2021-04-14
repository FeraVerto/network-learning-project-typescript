import React from 'react'
import s from "./Users.module.sass"
import {Paginator} from "../common/Paginator/Paginator";
import {User} from "./User/User";
import {UserType} from "../../types/types";
import {Search} from "./Search/UserSearch";

type PropsType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    onPageChanged: (pageNumber: number) => void
    followingInProgress: Array<number>
    onSearch: (term: {term: string}) => void
    search?: string
}

export const Users: React.FC<PropsType> = (
    {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        followingInProgress,
        unfollow,
        follow,
        onSearch
    }) => {

    return (
        <div className={s.users}>
            <Search onSearch={onSearch}/>
            <Paginator currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       totalItemsCount={totalUsersCount}
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
