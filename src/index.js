import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import {combineReducers} from "redux";
import redux, {createStore, applyMiddleware} from "redux";

import Main from "./components/main";
import {NavBar} from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";

import reducerredirect from "./reducers/reducer_redirect";
import lang from "./reducers/reducer_lang.js";
import { Router, Route, hashHistory } from 'react-router';

import { configureStore} from './reducers/ReducerFactory';


const store =  configureStore();

console.log("after create store,store.getState(),in index.js: ");
console.log(store.getState());

const app = document.getElementById('app');

ReactDom.render(
    // <Provider store={store}>
    //     <Router history={hashHistory}>
    //         <Route path="/" component={Main}/>
    //         <Route path="/navbar" component={NavBar}/>
    //         <Route path="/footer" component={Footer}/>
    //     </Router>
    // </Provider>,

    <Provider store={store}>
        <Main/>
    </Provider>,
    app);

// export default store;


