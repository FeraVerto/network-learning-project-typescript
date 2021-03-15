import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {MessagesContainer} from "./components/Dialogs/Messages/MessagesContainer";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FriendsContainer} from "./components/Navbar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {ProfileInfo} from "./components/Profile/ProfileInfo/ProfileInfo";
import ProfileContainer from "./components/Profile/ProfileContainer";


type AppContainerType = mapStateToPropsType & mapDispatchToPropsType
type mapDispatchToPropsType = {
    initializeApp: () => void
}

type mapStateToPropsType = {
    initialized: boolean
}

let mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export class App extends React.Component<AppContainerType> {
    componentDidMount() {
        //запрашиваем авторизационные данные
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <header className="header">
                    <HeaderContainer/>
                </header>
                <div className="app-wrapper-content">
                    <main className="content">
                        <div className="">
                            <Navbar/>
                        </div>
                        <div className="main_content">
                            <div className="main">
                                <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                                {/*<Route exact path="/profile" render={() => <ProfileContainer/>}/>*/}
                                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                                <Route path="/messages" render={() => <MessagesContainer/>}/>
                                <Route path="/news" render={() => <News/>}/>
                                <Route path="/music" render={() => <Music/>}/>
                                <Route path="/users" render={() => <UsersContainer/>}/>
                                <Route path="/login" component={() => <Login/>}/>
                                <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
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
}

export default compose(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializeApp})(App)
);


