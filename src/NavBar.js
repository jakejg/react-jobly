import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/companies'>Companies</NavLink>
            <NavLink to='/jobs'>Jobs</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/login'>Login</NavLink>
        </nav>
    )
}

export default NavBar;