import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Messages from "./components/Dialogs/Messages/Messages";

let posts = [
    {id: 1, message: "Это передача сдохни или умри!", like: 25},
    {id: 2, message: "Или сдохни", like: 40},
    {id: 3, message: "Или умри", like: 1}
]

let data = [
    {id: 1, name: "Нателла Наумовна", lastMessage: "Ну да, ну путаню чуть-чуть, а что такого?"},
    {id: 2, name: "Бандитник", lastMessage: "Как говорят американцы..."},
    {id: 3, name: "Татьяна", lastMessage: "Туие то натона то ааа туна"},
    {id: 4, name: "Инженер", lastMessage: "Меня отправили в легкий отпуск!"},
    {id: 5, name: "Особа", lastMessage: "..."}
]


export type PostType = {
    id: number
    message: string
    like: number
}

export type MyPostsPropsType = {
    posts: Array<PostType>
}

export type DialogsItemProps = {
    id: number
    name: string
    lastMessage: string
}

export type DialogsType = {
    data: Array<DialogsItemProps>
}

let messages = [
    {id: 1, textMessage: "Hello"},
    {id: 2, textMessage: "Hi"}
]

export type MessagesType = {
    id: number
    textMessage: string
}

export type MessagesPropsType ={
    messages: Array<MessagesType>
}



const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render = { () => <Profile posts={posts} /> }/>
                    <Route path="/dialogs" render = { () => <Dialogs data={data}/> }/>
                    {/*//Временно*/}
                    <Route path="/messages" render = { () => <Messages messages={messages}/> } />
                    {/*//Временно*/}
                    <Route exact path="/news" render = { () => <News /> }/>
                    <Route path="/music" render = { () => <Music /> }/>

                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
