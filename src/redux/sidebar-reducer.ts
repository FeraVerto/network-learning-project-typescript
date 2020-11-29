import {actionType, SidebarFriendsType} from "./redux-store";

let initialState = {
    friends: [
        {
            id: 1,
            name: "Нателла Наумовна",
            avatar: "https://pbs.twimg.com/profile_images/1298343897559703558/hYmXg4yy.jpg"
        },
        {
            id: 2,
            name: "Бандитник",
            avatar: "https://pbs.twimg.com/media/ElgIpNvXUAIiFil.jpg"
        },
        {
            id: 3,
            name: "Татьяна",
            avatar: "https://vignette.wikia.nocookie.net/lapenkopedia/images/2/26/%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0%D0%92%D0%BE%D1%81%D1%8C%D0%BC%D0%B8%D0%B3%D0%BB%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0.jpg/revision/latest?cb=20200723222819&path-prefix=ru"
        }
    ]
}

export const sidebarReducer = (state: SidebarFriendsType = initialState, action: actionType) => {
    return state
}