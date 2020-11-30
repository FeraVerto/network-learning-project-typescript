import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import {BrowserRouter} from "react-router-dom";
import {AppStateType, store} from "./redux/redux-store";

export const rerenderEntireTree = (state: AppStateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <ScopedCssBaseline>
                    <App store={state}
                         dispatch={store.dispatch.bind(store)}/>
                </ScopedCssBaseline>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
serviceWorker.unregister();

store.subscribe(() => rerenderEntireTree(store.getState()))
rerenderEntireTree(store.getState())


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
