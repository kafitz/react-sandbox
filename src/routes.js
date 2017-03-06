import React from 'react'
import { Router, Route } from 'react-router'

import { Sandbox } from './containers/Sandbox'


export function defineRoutes(history, store) {
    return(
        <Router history={history}>
            <Route path='/' component={Sandbox} />
        </Router>
    )
}