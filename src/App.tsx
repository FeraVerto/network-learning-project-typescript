import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {MessagesContainer} from "./components/Dialogs/Messages/MessagesContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import {UsersContainer} from "./components/Users/UsersContainer";


const App = () => {
    return (
        <div className='app-wrapper grid-container'>
            <div className="main_link">Главная</div>
            <header className="header">
                <Header/>
            </header>

            <div className="menu">

            </div>

            <div className="app-wrapper-content main">
                <Route path="/profile" render={() => <Profile/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/messages" render={() => <MessagesContainer/>}/>
                <Route exact path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;


