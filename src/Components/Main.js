import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from '../Pages/Home'
import Blogs from '../Pages/Blog'
import News from '../Pages/News'
import Favorites from '../Pages/Favorites'

export default class Main extends Component {

    render() {
        return (
            <div className='main'>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/Blogs'>
                        <Blogs />
                    </Route>
                    <Route path='/News'>
                        <News />
                    </Route>
                    <Route path='/Favorites'>
                        <Favorites />
                    </Route>
                </Switch>
                <Redirect path='/' />
            </div>
        )
    }
}
