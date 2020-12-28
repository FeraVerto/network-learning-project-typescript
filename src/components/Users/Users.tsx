import React from 'react'
import s from "./Users.module.sass"
import {UserType} from "../../redux/redux-store";
import {Avatar} from "@material-ui/core";
import axios from 'axios';
//import avatar from './../../assets/image/avatar-alien.png'
import avatar from './../../assets/image/ufo-2.png'

type UsersType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<UserType>) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

class Users extends React.Component<UsersType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i < pagesCount; i++) {
            pages.push(i)
        }

        return <div className={s.users}>
            <div className={s.users_paginator}>
                {/*{pages.map(p => <span className={this.props.currentPage === p && s.selectPage}>{p}</span>)}*/}
                {pages.map(p => <span onClick={(e) => this.onPageChanged(p)}
                                      className={this.props.currentPage === p ? s.selectPage : s.page}>{p}</span>)}
            </div>
            <div className={s.users_list}>
                {
                    this.props.users.map(u =>
                        <div key={u.id} className={s.user}>
                            <div className={s.user_avatar}>
                                <img className={s.avatar}
                                     src={u.photos.small !== null ? u.photos.small : `${avatar}`}
                                     alt={u.name}
                                />
                            </div>
                            <div className={s.button_followed}>
                                {u.followed ?
                                    <button className={s.follow_unfollow_button}
                                            onClick={() => this.props.unfollow(u.id)}>
                                        Unfollow
                                    </button>
                                    : <button className={s.follow_unfollow_button}
                                              onClick={() => this.props.follow(u.id)}>
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
        </div>
    }
}

export default Users

/*export function Users(props: UsersType) {

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
}*/