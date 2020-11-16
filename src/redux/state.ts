/*------------------------------------------------------*/
/*Типизируем каждый подобьект, начинаем с низшего уровня*/
let rerenderEntireTree = (state: any) => {
    console.log("state changed")
}

export type PostType = {
    id: number
    message: string
    like: number
}

export type DialogsItemType = {
    id: number
    name: string
    lastMessage: string
    avatar: string
}

export type MessageType = {
    id: number
    name1: string
    textMessage1: string
    name2: string
    textMessage2: string
}
export type FriendType = {
    id: number,
    name: string,
    avatar: string
}

/*-------------------------------------------------------*/
/*Типизируем каждую ветку*/
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsItemType>
}

export type MessagesPageType = {
    messages: Array<MessageType>
    newMessageText: string
}

export type SidebarFriendsType = {
    friends: Array<FriendType>
}

/*-------------------------------------------------------*/
/*Собираем все ветки в один обьект для state*/
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    messagesPage: MessagesPageType
    sidebar: SidebarFriendsType
}
/*-------------------------------------------------------*/

export let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Это передача сдохни или умри!", like: 25},
            {id: 2, message: "Или сдохни", like: 40},
            {id: 3, message: "Или умри", like: 1}
        ],

        newPostText: ""
    },
    dialogsPage: {
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
    },
    messagesPage: {
        messages: [
            {id: 1, name1: "Инженер", textMessage1: "Hello", name2: "Особа", textMessage2: "Hi"},
            {id: 2, name1: "Инженер", textMessage1: "Как дела?", name2: "Особа", textMessage2: "Хорошо"}
        ],

        newMessageText: ""
    },
    sidebar: {
        friends: [
            {
                id: 1,
                name: "Нателла Наумовна",
                avatar: "https://pbs.twimg.com/profile_images/1298343897559703558/hYmXg4yy.jpg"
            },
            {id: 2, name: "Бандитник", avatar: "https://pbs.twimg.com/media/ElgIpNvXUAIiFil.jpg"},
            {
                id: 3,
                name: "Татьяна",
                avatar: "https://vignette.wikia.nocookie.net/lapenkopedia/images/2/26/%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0%D0%92%D0%BE%D1%81%D1%8C%D0%BC%D0%B8%D0%B3%D0%BB%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0.jpg/revision/latest?cb=20200723222819&path-prefix=ru"
            }
        ]
    }
}


export let addPost = () => {
    let post: PostType = {id: 5, message: state.profilePage.newPostText, like: 25}
    state.profilePage.posts.push(post);
    state.profilePage.newPostText = ''
    rerenderEntireTree(state);
}

export let updateNewPostText = (word: string) => {
    state.profilePage.newPostText = word;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let message: MessageType = {id: 1, name1: "Инженер", textMessage1: state.messagesPage.newMessageText, name2: "Особа", textMessage2: ""}
    state.messagesPage.messages.push(message);
    rerenderEntireTree(state);
    state.messagesPage.newMessageText = ""
}

export let updateNewMessageText = (word: string) => {
    state.messagesPage.newMessageText = word;
    rerenderEntireTree(state);
}

export const subscribe = (observer: any) => {
    rerenderEntireTree = observer
}

/*window.state = state*/
//observer
//publisher-subscriber
//паттерны проектирования