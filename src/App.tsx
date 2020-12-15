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
import {UsersContainer} from "./components/Users/UsersContainer";
import {FriendsContainer} from "./components/Navbar/Friends/FriendsContainer";
import {ProfileInfo} from "./components/Profile/ProfileInfo/ProfileInfo";
import logo from "./assets/image/logo.png"

const App = () => {
    return (
        <div className='app-wrapper grid-container'>
            <div className="profile_navbar">
{/*
                <div className="logo"><img src={logo} alt="logo" width="150"/></div>
*/}
                <ProfileInfo/>
                <Navbar/>
            </div>

            <div className="app-wrapper-content">
                <header className="header">
                    <Header/>
                </header>
                <main className="content">
                    <div className="main_content">
                        <Route path="/profile" render={() => <Profile/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/messages" render={() => <MessagesContainer/>}/>
                        <Route exact path="/news" render={() => <News/>}/>
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                    </div>
                    <div className="main_content_friends">
                        Friends
                    </div>
                </main>
            </div>
            <FriendsContainer/>
        </div>
    );
}

export default App;


