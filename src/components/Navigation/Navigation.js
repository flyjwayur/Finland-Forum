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

class Navigation extends Component {
  state = {
    isNavOpen: false
  };

  toggleNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  };

  render() {
    return (
      <div className="container">
        <Navbar color="dark" expand="md">
          <NavbarToggler color="light" onClick={this.toggleNav} />
          <NavbarBrand className="mr-auto" href="/">
            {/* post image */}
          </NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">
                  <span className="fa fa-home fa-lg"> Home </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/posts/newpost">
                  <span className="fa fa-list fa-lg"> New Post </span>
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
