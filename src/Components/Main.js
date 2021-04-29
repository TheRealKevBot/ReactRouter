import React, { Component } from 'react'

import Home from '../Pages/Home'
import Blogs from '../Pages/Blog'
import News from '../Pages/News'
import Favorites from '../Pages/Favorites'

export default class Main extends Component {

    render() {
        return (
            <div className='main'>
                <Home />
                <Blogs />
                <News />
                <Favorites />
            </div>
        )
    }
}
