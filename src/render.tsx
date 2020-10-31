import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import {addMessage, addPost, RootStateType, updateNewPostText} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export const rerenderEntireTree = (state: RootStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <ScopedCssBaseline>
                    <App state={state} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText}/>
                </ScopedCssBaseline>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
serviceWorker.unregister();
