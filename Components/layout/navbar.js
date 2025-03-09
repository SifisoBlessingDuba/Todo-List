import React from 'react';
import { Link } from 'react-router-dom';
import SignInLink from './signedInLink';
import SignUpLink from './signedUpLink';

const Navbar = () => {
    return (
       <nav className="nav-wrapper blue darken-3">
        <div className="container">
            <Link to='/' className = "brand-logo">ToDo List</Link>
        <SignInLink />
        <SignUpLink />
        </div>

       </nav>
    )
}
export default Navbar;