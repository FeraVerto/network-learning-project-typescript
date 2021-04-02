import React, {useState} from 'react'
import s from "../Paginator/Paginator.module.sass"

let classNames = require('classnames')

type PropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number | string
    onPageChanged: (pageNumber: number) => void
    portionSize?: number
}

export const Paginator: React.FC<PropsType> = (
    {
        totalItemsCount,
        pageSize,
        currentPage,
        onPageChanged,
        portionSize = 10
    }) => {

    //totalItemsCount -

    //pagesCount - все странички
    let pagesCount = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }

    //portionSize - размер порции
    //portionCount - количество порций
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState<number>(1);
    //левая граница порции
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    //правая граница порции
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={s.users_paginator}>

            {
                portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>PREV</button>
            }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                    return (
                        <div className={s.number}>
                            <span className={classNames({
                                [s.selectPage]: currentPage === p
                            }, s.pageNumber)}
                                  key={p}
                                  onClick={() => {
                                      onPageChanged(p);
                                  }}>{p}</span>
                        </div>
                    )
                })}

            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>NEXT</button>}

        </div>
    )
}

