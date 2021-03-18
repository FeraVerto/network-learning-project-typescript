import React, {Suspense} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import {MessagesContainer} from "./components/Dialogs/Messages/MessagesContainer";
/*import {DialogsContainer} from "./components/Dialogs/DialogsContainer";*/
import {FriendsContainer} from "./components/Navbar/Friends/FriendsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {AppStateType, store} from "./redux/redux-store";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";
import {Settings} from "./components/Settings/Settings";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))


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
                        <Suspense fallback={<Preloader/>}>
                            <div className="main_content">
                                <div className="main">
                                    <Route exact path="/" render={() => <Redirect to={'/profile'}/>}/>
                                    <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
                                    <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
                                    <Route path="/messages" render={() => <MessagesContainer/>}/>
                                    <Route path="/news" render={() => <News/>}/>
                                    <Route path="/music" render={() => <Music/>}/>
                                    <Route path="/users" render={() => <UsersContainer/>}/>
                                    <Route path="/settings" render={() => <Settings/>}/>
                                    <Route path="/login" component={() => <Login/>}/>
                                    <Route path="*" render={() => <div>404 NOT FOUND</div>}/>
                                </div>
                            </div>
                        </Suspense>

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

let AppContainer = compose(
    connect<mapStateToPropsType, mapDispatchToPropsType, {}, AppStateType>(mapStateToProps, {initializeApp})(App)
);

export const MainApp = () => {
    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
}


