import React from 'react';
import {actionType, DialogsPageType} from "./redux-store";

let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Нателла Наумовна",
            lastMessage: "Ну да, ну путаню чуть-чуть, а что такого?",
            avatar: "https://pbs.twimg.com/profile_images/1298343897559703558/hYmXg4yy.jpg"
        },
        {
            id: 2,
            name: "Бандитник",
            lastMessage: "Как говорят американцы...",
            avatar: "https://pbs.twimg.com/media/ElgIpNvXUAIiFil.jpg"
        },
        {
            id: 3,
            name: "Татьяна",
            lastMessage: "Туие то натона то ааа туна",
            avatar: "https://vignette.wikia.nocookie.net/lapenkopedia/images/2/26/%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0%D0%92%D0%BE%D1%81%D1%8C%D0%BC%D0%B8%D0%B3%D0%BB%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0.jpg/revision/latest?cb=20200723222819&path-prefix=ru"
        },
        {
            id: 4,
            name: "Инженер",
            lastMessage: "Меня отправили в легкий отпуск!",
            avatar: "https://vignette.wikia.nocookie.net/lapenkopedia/images/c/c8/5zzLfQm1_400x400.jpg/revision/latest?cb=20200722112140&path-prefix=ru"
        },
        {
            id: 5,
            name: "Особа",
            lastMessage: "...",
            avatar: "https://vignette.wikia.nocookie.net/lapenkopedia/images/3/3d/2020-10-12_21-21-32.png/revision/latest/top-crop/width/360/height/450?cb=20201012182610&path-prefix=ru"
        }
    ]
}

export function dialogsReducer(state: DialogsPageType = initialState, action: actionType) {
    return state
}
