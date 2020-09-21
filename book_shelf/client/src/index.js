import React from 'raect';
import ReactDom from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import promiseMiddleware from 'redux';
import ReduxThunk from 'redux-thunk';

import Routes from './routes';
import reduces from './reducers'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDom.render(
    <Provider store={createStoreWithMiddleware(reduces)}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));