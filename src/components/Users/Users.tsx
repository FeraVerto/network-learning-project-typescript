import React from 'react'
import s from "./Users.module.sass"
import {UserType} from "../../redux/redux-store";
import {Avatar} from "@material-ui/core";

type UsersType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
}

export function Users(props: UsersType) {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    avatar: "",
                    fullName: "person-1",
                    followed: false,
                    status: "Человек-1-status",
                    location: {city: "Ekaterinburg", country: "Russia"}
                },
                {
                    id: 2,
                    avatar: "",
                    fullName: "person-2",
                    followed: false,
                    status: "Человек-2-status",
                    location: {city: "Ekaterinburg", country: "Russia"}
                },
                {
                    id: 3,
                    avatar: "",
                    fullName: "person-3",
                    followed: false,
                    status: "Человек-3-status",
                    location: {city: "Ekaterinburg", country: "Russia"}
                }
            ]
        )
    }

    return (
        <div className={s.users}>
            {
                props.users.map(u =>
                    <div key={u.id} className={s.user}>
                        <div className={s.user_avatar}>
                            <Avatar variant='rounded'
                                    className={s.avatar}
                                    src={u.avatar}
                                    alt={u.fullName}

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
                                <div className={s.user_name}>{u.fullName}</div>
                                <div className={s.user_status}>{u.status}</div>
                            </div>
                            <div>
                                <div>{u.location.city}</div>
                                <div>{u.location.country}</div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    )
}