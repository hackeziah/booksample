import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/Home/home'
import BookView from './components/Books';
import Login from './container/Admin/LoginContainer'
import Layout from './hoc/layout'

import User from './components/Admin'
import AddBook from './container/Admin/AddBook '
import UserPosts from './component/Admin/UserPosts'
import Auth from './hoc/auth';
import Register from './container/Admin/Register'
const Routes = () => {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Auth(Home)} />
                <Route path="/login" exact component={Auth(Login, false)} />
                <Route path="/book/:id" exact component={Auth(BookView, null)} />
                <Route path="/user" exact component={Auth(User, true)} />
                <Route path="/user/add" exact component={Auth(AddBook, true)} />
                <Route path="/user/user-review" exact component={Auth(UserPosts, true)} />
                <Route path="/register" exact component={Auth(Register, true)} />
            </Switch>
        </Layout>
    )
}

export default Routes;
