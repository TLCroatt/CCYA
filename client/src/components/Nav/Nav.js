import React, { useState, useContext } from 'react';
import UserContext from '../../utils/UserContext';
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './style.css';

export const Navigation = (props) => {
  const {loggedIn, logout, isAdmin} = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  let admin = isAdmin();

  return (
      <Navbar className="navbar" light expand="md">
        <NavbarBrand tag={Link} to="/" id="nav-header">Commerce City Youth Athletics</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to={loggedIn ? "/members" : "/login"} id="nav-text">Members</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" id="nav-text">Contact</NavLink>
            </NavItem>
            {admin && <NavItem><NavLink tag={Link} to="/admin" id="nav-text">Admin</NavLink></NavItem>} 
          </Nav>
          <Nav>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="nav-options">
                Options
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu">
                <DropdownItem className="dropdown-item" tag={Link} to="/login">
                  Log In 
                </DropdownItem>
                <DropdownItem> 
                  <Link to = "/home">
                  <span onClick={logout}>Log Out</span>
                  </Link>
                </DropdownItem>
                <DropdownItem tag={Link} to="/signup">
                  Sign Up
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>   
          </Nav>
        </Collapse>
      </Navbar>
  );
}

export default Navigation;