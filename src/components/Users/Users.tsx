import React from 'react'
import s from "./Users.module.sass"
import {UserType} from "../../redux/redux-store";
import {Avatar} from "@material-ui/core";
import axios from 'axios';
import avatar from './../../assets/image/avatar-alien.png'

type UsersType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersType) {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                props.setUsers(response.data.items)
            })

        }
    }


    return (
        <div className={s.users}>
            <button onClick={getUsers}>get users</button>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.user}>
                        <div className={s.user_avatar}>
                            <Avatar variant='rounded'
                                    className={s.avatar}
                                    src={u.photos.small !== null ? u.photos.small : `${avatar}`}
                                    alt={u.name}

                            />
                            {u.followed ?
                                <button className={s.follow_unfollow_button}
                                        onClick={() => props.unfollow(u.id)}>
                                    Unfollow
                                </button>
                                : <button className={s.follow_unfollow_button}
                                          onClick={() => props.follow(u.id)}>
                                    Follow
                                </button>
                            }
                        </div>
                        <div className={s.user_info}>
                            <div className={s.user_info_name}>
                                <div className={s.user_name}>{u.name}</div>
                                <div className={s.user_status}>{u.status}</div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}