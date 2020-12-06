let initialState = {
    friends: [
        {
            id: 1,
            name: "Друг-1",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        },
        {
            id: 2,
            name: "Друг-2",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        },
        {
            id: 3,
            name: "Друг-3",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        }
    ]
}

export const sidebarReducer = (state = initialState, action: any) => {
    return state
}