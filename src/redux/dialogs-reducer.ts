let initialState = {
    dialogs: [
        {
            id: 1,
            name: "Человек-1",
            lastMessage: "Привет!",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        },
        {
            id: 2,
            name: "Человек-2",
            lastMessage: "Хочу предложить тебе новый способ заработать, сидя на диване",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        },
        {
            id: 3,
            name: "Человек-3",
            lastMessage: "Скинь фотки",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        },
        {
            id: 4,
            name: "Человек-4",
            lastMessage: "Сотку когда вернешь?",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        },
        {
            id: 5,
            name: "Человек-5",
            lastMessage: "Жрать охота",
            avatar: "https://www.meme-arsenal.com/memes/3736fb7f61101f1468bcc568ce13dd71.jpg"
        }
    ]
}

export function dialogsReducer(state = initialState, action: any) {
    return state
}
