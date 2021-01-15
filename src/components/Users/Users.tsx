import React from 'react'
import s from "./Users.module.sass"
import {UserType} from "../../redux/redux-store";
import avatar from './../../assets/image/ufo-2.png'
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersType = {
    users: Array<UserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    onPageChanged: (pageNumber: number) => void
    onClickUser: (userId: number) => void

    //setTotalUsersCount: (totalCount: number) => void
    //setUsers: (users: Array<UserType>) => void
    //setCurrentPage: (pageNumber: number) => void
}

export const Users = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users}>

            <div className={s.users_paginator}>
                {pages.map(p => <span onClick={(e) => props.onPageChanged(p)}
                                      className={props.currentPage === p ? s.selectPage : s.page}>{p}</span>)}
            </div>

            <div className={s.users_list}>
                {
                    props.users.map(u =>
                        <div key={u.id} className={s.user}>

                            <div className={s.user_avatar}>
                                <NavLink to={"/profile/" + u.id} onClick={() => props.onClickUser(u.id)}>
                                    <img className={s.avatar}
                                         src={u.photos.large !== null ? u.photos.large : `${avatar}`}
                                         alt={u.name}
                                    />
                                </NavLink>

                            </div>

                            <div className={s.button_followed}>
                                {u.followed ?
                                    <button className={s.follow_unfollow_button}
                                            onClick={() => {
                                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                    withCredentials: true,
                                                    headers: {
                                                        "API-KEY": "175e24f1-c22d-463c-ba2f-3d45c5594942"
                                                    }
                                                }).then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }

                                                })
                                            }}>
                                        Unfollow
                                    </button>
                                    : <button className={s.follow_unfollow_button}
                                              onClick={() => {
                                                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                      withCredentials: true,
                                                      headers: {
                                                          "API-KEY": "175e24f1-c22d-463c-ba2f-3d45c5594942"
                                                      }
                                                  }).then(response => {
                                                      if (response.data.resultCode === 0) {
                                                          props.follow(u.id)
                                                      }

                                                  })
                                              }}>
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
                                    )
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


                                    /*123321
                                    let palindromeChainLength = function (n) {
                                    // let newN = String(n).split("")
                                    let newN2 = String(n).split("").reverse().join()
                                    if(n !== newN2) {
                                    let sum = n + Number(newN2)
                                    return palindromeChainLength(sum)
                                    } else {
                                    return n
                                    }
                                    };

                                    palindromeChainLength(44)*/
