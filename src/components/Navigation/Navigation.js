import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "./navigation.css";

class Navigation extends Component {
  state = {
    isNavOpen: false
  };

  toggleNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  render() {
    return (
      <div>
        <Navbar expand="md" className="navBar">
          <NavbarBrand id="navBrand" href="/">
            Finland Forum
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  <span className="navLink"> Home </span>
                </NavLink>
              </NavItem>
              <NavItem className="">
                <NavLink className=".navLink nav-link" to="/posts/newpost">
                  <span className="navLink"> New Post </span>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
