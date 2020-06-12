import React, { useState } from 'react';
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

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="NavBar" color="light" light expand="sm">
                <NavbarBrand href="/">Jobly</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse className='NavBar-collapse' isOpen={isOpen} navbar>
                    <Nav navbar>
                        <NavItem className="NavBar-item">
                            <NavLink to='/companies'>Companies</NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink to='/jobs'>Jobs</NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink to='/profile'>Profile</NavLink>
                        </NavItem>
                        <NavItem className="NavBar-item">
                            <NavLink to='/login'>Login</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
           
        </div>
    );
}

export default NavBar;