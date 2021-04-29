import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div className='navbar'>
            <ul className='navbar-links'>
                <Link to='/' className='link'>
                    <li className='navlinks'>Home</li>
                </Link>
                <Link to='/Blogs' className='link'>
                    <li className='navlinks'>Blogs</li>
                </Link>
                <Link to='/News' className='link'>
                    <li className='navlinks'>News</li>
                </Link>
                <Link to='/Favorites' className='link'>
                    <li className='navlinks'>Favorites</li>
                </Link>
            </ul>
        </div>
    )
}
