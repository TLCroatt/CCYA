import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import './style.css';

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="success" light expand="md">
        <NavbarBrand><NavLink to="/" id="nav-header">Commerce City Youth Athletics</NavLink></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink to="/about" id="nav-text">About -</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/teams" id="nav-text">- Teams -</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/contact" id="nav-text">- Contact</NavLink>
            </NavItem> 
            <NavItem>
              <NavLink to="/calendar" id="nav-text">- Calendar</NavLink>
            </NavItem> 
          </Nav>
          <Nav>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="nav-options">
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 Log In
                </DropdownItem>
                <DropdownItem>
                  Sign Up
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>   
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;