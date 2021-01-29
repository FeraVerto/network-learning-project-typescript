import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {MessagesContainer} from "./components/Dialogs/Messages/MessagesContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Navbar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import ProfileInfoContainer from "./components/Profile/ProfileInfo/ProfileInfoContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className="header">
                <HeaderContainer/>
            </header>
            <div className="app-wrapper-content">

                <main className="content">
                    <div className="main_content">
                        <div className="profile_navbar">
                            <Route exact path="/profile/:userId?" render={() => <ProfileInfoContainer/>}/>
                            <Route path="/login" render={() => <Login />}/>
                            <Navbar/>
                        </div>
                        <div className="main">
                            <Route exact path="/profile" render={() => <ProfileContainer/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/messages" render={() => <MessagesContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
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


