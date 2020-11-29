import React, {PropsWithChildren} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Messages from "./components/Dialogs/Messages/Messages";
import {actionType, RootStateType} from "./redux/store";

export type AppType = {
    store: RootStateType
    dispatch: (action: actionType) => void
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.store.sidebar.friends}/>
            <div className="app-wrapper-content">
                <Route path="/profile" render={() => <Profile posts={props.store.profilePage.posts}
                                                              dispatch={props.dispatch}
                                                              newPostText={props.store.profilePage.newPostText}
                />}/>
                <Route path="/dialogs" render={() => <Dialogs dialogs={props.store.dialogsPage.dialogs}/>}/>
                <Route path="/messages" render={() => <Messages messages={props.store.messagesPage.messages}
                                                                dispatch={props.dispatch}
                                                                newMessageText={props.store.messagesPage.newMessageText}/>}/>
                <Route exact path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
            </div>
        </div>

    );
}

export default App;


