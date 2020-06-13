import React, { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Navbar

  } from 'reactstrap';
import './styles/NavBar.css';
import TokenContext from './TokenContext'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const { token, setToken, setUsername } = useContext(TokenContext);

    const logout = () => {
        setToken('');
        setUsername('');
    }

    const links = ['Companies', 'Jobs', 'Profile']
    const loggedInView = <>
                            {links.map(link=> (
                                <NavItem key={link} className="NavBar-item">
                                    <NavLink className="NavBar-link" to={`/${link.toLowerCase()}`}>{link}</NavLink>
                                </NavItem>))}
                            
                            <NavItem className="NavBar-item">
                                <NavLink className="NavBar-link" to='/login' onClick={logout}>Logout</NavLink>
                            </NavItem>
                        </>

    const loggedOutView =   <NavItem className="NavBar-item">
                                <NavLink className="NavBar-link" to='/login'>Login</NavLink>
                            </NavItem>

    return (
        <div>
            <Navbar className="NavBar" color="light" light expand="sm">
                <NavbarBrand href="/">Jobly</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className='NavBar-collapse' isOpen={isOpen} navbar>
                    <Nav navbar>
                        {token? loggedInView: loggedOutView }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;