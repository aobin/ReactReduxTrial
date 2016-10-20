/* import React from "react";
import ReactDom from "react-dom";

import Main from  "./components/Main";


const app = document.getElementById('app');

ReactDom.render( <Main/>,app)
*/
/*
import {combineReducers, createStore} from  "redux";

const userReducer = function(state={}, action) {
    switch(action.type) {
        case "CHANGE_FIRSTNAME" :
            state.firstname = action.payload;
            break;
        case "CHANGE_LASTNAME" :
            state.lastname = action.payload;
            break;
}
return state;
}
const countriesReducer  = function (state=[], action){
return state;
}
const reducers = combineReducers( {
    user: userReducer,
    countries : countriesReducer,
})

const store = createStore(reducers);

store.subscribe(() => {
console.log ("store changed", store.getState())
})

store.dispatch({type:"CHANGE_FIRSTNAME", payload: "Sangeetha"})
store.dispatch({type:"CHANGE_LASTNAME", payload: "K"})

*/
/*
import {applyMiddleware , createStore} from "Redux";

const reducer =  function (initialState =0, action) {
return state;
}
const middleware =  applyMiddleware()

const store =  createStore(reducer,  middleware)

store.subscribe(() => {
    console.log ("store changed", store.getState())
})

store.dispatch({type:"FOO"})
*/

import React from "react";
import ReactDom from "react-dom";
import {Provider} from 'react-redux';
import {combineReducers} from "redux";
import redux, {createStore, applyMiddleware} from "redux";

import Main from "./components/main";
import NavBar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";

import reducerredirect from "./reducers/reducer_redirect";
import lang from "./reducers/reducer_lang.js";
import { Router, Route, hashHistory } from 'react-router'

const reducer = combineReducers({reducerredirect,lang});

const store =  createStore(reducer,  window.devToolsExtension && window.devToolsExtension());

console.log(store.getState());

const app = document.getElementById('app');

ReactDom.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={Main}/>
            <Route path="/navbar" component={NavBar}/>
            <Route path="/footer" component={Footer}/>
        </Router>
    </Provider>,
    app);

export default store;


