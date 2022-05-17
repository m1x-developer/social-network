import React from 'react';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <header className='header'>
            <div><img src="https://bestprogrammer.ru/wp-content/uploads/2020/04/React-Native.jpg" alt=""/></div>
            <div>
                { props.isAuth ?
                    props.login
                    :
                    <Link className="link" to="/login">Login</Link>
                }
            </div>
        </header>
    );
};

export default Header;
// https://social-network.samuraijs.com/api/1.0/auth/me