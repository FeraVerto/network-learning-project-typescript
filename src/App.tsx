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
import {actionType, AppStateType} from "./redux/redux-store";
import {MessagesContainer} from "./components/Dialogs/Messages/MessagesContainer";

export type AppType = {
    store: AppStateType
    dispatch: (action: actionType) => void
}


const App: React.FC<AppType> = (props) => {
    return (
        <div>
            <Header/>
            <div className='app-wrapper'>
                <Navbar state={props.store.sidebar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile" render={() => <Profile store={props.store}
                                                                  dispatch={props.dispatch}/>}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.store.dialogsPage}/>}/>
                    <Route path="/messages" render={() => <MessagesContainer store={props.store}
                                                                             dispatch={props.dispatch}
                    />}/>
                    <Route exact path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                </div>
            </div>
        </div>
    );
}

export default App;


