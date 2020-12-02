import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbar" light expand="md">
        <NavbarBrand><NavLink tag={Link} to="/" id="nav-header">Commerce City Youth Athletics</NavLink></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/teams" id="nav-text">Teams</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/contact" id="nav-text">Contact</NavLink>
            </NavItem> 
          </Nav>
          <Nav>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret id="nav-options">
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={Link} to="/login">
                 Login 
                </DropdownItem>
                <DropdownItem tag={Link} to="/signup">
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