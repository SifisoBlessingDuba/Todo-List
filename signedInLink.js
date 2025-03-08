import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLink = () => {
    return (
        <ul className = "right">
            <li><NavLink to= '/signUp'>SignUp</NavLink> </li>
        </ul>
    )
}
export default SignInLink;