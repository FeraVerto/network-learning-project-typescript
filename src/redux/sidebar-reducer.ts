import {actionType, SidebarFriendsType} from "./redux-store";

let initialState = {
    friends: [
        {
            id: 1,
            name: "Нателла Наумовна",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        },
        {
            id: 2,
            name: "Бандитник",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        },
        {
            id: 3,
            name: "Татьяна",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        }
    ]
}

export const sidebarReducer = (state: SidebarFriendsType = initialState, action: actionType) => {
    return state
}