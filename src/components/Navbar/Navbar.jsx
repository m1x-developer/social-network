import React from 'react';
import {
    Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='nav'>
            <ul>
                <Link className="link" to="/profile/*">Profile</Link>
                <Link className="link" to="/messages">Messages</Link>
                <Link className="link" to="/users">Users</Link>
                <Link className="link" to="/test">TEST</Link>
            </ul>
        </nav>
    );
};

export default Navbar;
