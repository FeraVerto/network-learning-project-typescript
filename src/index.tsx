import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/redux-store";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <ScopedCssBaseline>
                    <App store={store.getState()}
                         dispatch={store.dispatch.bind(store)}/>
                </ScopedCssBaseline>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
serviceWorker.unregister();

store.subscribe(rerenderEntireTree)
rerenderEntireTree()


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
