import React from 'react';
import '../core-ui/Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className='navbar'>Home page</div>
            <a href='/home'>home</a>
            <a>about</a>
            <a>contact</a>
            <a>login</a>
        </div>
    )
}

export default Navbar
