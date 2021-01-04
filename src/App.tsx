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
import {FriendsContainer} from "./components/Navbar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import ProfileInfoContainer from "./components/Profile/ProfileInfo/ProfileInfoContainer";
//import {ProfileInfoContainer} from "./components/Profile/ProfileInfo/ProfileInfoContainer";

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className="header">
                <Header/>
            </header>
            <div className="app-wrapper-content">

                <main className="content">
                    <div className="main_content">
                        <div className="profile_navbar">
                            <Route path="/profile" render={() => <ProfileInfoContainer/>}/>
                            <Navbar/>
                        </div>
                        <div className="main">
                            <Route path="/profile" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/messages" render={() => <MessagesContainer/>}/>
                            <Route exact path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                        </div>

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


