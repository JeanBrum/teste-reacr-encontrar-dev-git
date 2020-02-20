import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Users from './pages/Users'
import User from './pages/User'
function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={LoginForm}></Route>
                <Route exact path="/users" component={Users}></Route>
                <Route exact path="/users/:id" component={User}></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes