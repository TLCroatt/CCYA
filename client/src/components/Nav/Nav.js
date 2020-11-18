import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand><Link to="/">Commerce City Youth Athletics</Link></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
            <Link to="/about">About</Link>
            </NavItem>
            <NavItem>
            <Link to="/teams">Teams</Link>
            </NavItem>
            <NavItem>
            <Link to="/contact">Contact</Link>
            </NavItem> 
          </Nav>
          <Nav>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
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