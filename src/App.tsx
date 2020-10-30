import React, {PropsWithChildren} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Messages from "./components/Dialogs/Messages/Messages";
import {addMessage, RootStateType} from "./redux/state";

export type AppType = {
    state: RootStateType
    addPost: (newPost: string) => void
    addMessage: (newMessage: string) => void
}


const App: React.FC<AppType> = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Navbar friends={props.state.sidebar.friends}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile posts={props.state.profilePage.posts} addPost={props.addPost}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}/>}/>
                    <Route path="/messages" render={() => <Messages messages={props.state.messagesPage.messages} addMessage={addMessage}/>}/>
                    <Route exact path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                </div>
            </div>

    );
}

export default App;


