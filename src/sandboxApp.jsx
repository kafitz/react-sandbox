import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'

import reducer from './rootReducer'
import { defineRoutes } from './routes'


const store = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(reducer)

const history = syncHistoryWithStore(browserHistory, store)
const routes = defineRoutes(history, store)

const appJSX = (
    <Provider store={store}>
        { routes }
    </Provider>
)
ReactDOM.render(appJSX, document.getElementById('app-root'))
