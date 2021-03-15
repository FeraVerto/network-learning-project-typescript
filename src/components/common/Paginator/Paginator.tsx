import React from 'react'
import s from "../Paginator/Paginator.module.sass"

type UsersType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number | string
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}: UsersType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.users_paginator}>
            {
                pages.map(p => <span onClick={(e) => onPageChanged(p)}
                                     className={currentPage === p ? s.selectPage : s.page}>{p}</span>)
            }
        </div>
    )
}

