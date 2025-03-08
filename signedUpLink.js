import React from 'react';
import { NavLink } from 'react-router-dom';

const SignUpLink = () => {
    return (
        <ul className = "right">
            <li><NavLink to= '/signIn'>Sign In</NavLink> </li>
            <li><NavLink to= '/'></NavLink> </li>
        </ul>
    )
}
export default SignUpLink;