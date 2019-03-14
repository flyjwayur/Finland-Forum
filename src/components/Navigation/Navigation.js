import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import PropTypes from 'prop-types';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar light expand="md">
          <NavbarBrand id="navBrand" href="/">
            Finland Forum
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  className="navLink"
                  to="/"
                  activeStyle={{
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navLink"
                  to="/posts/newpost"
                  activeStyle={{
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  New Post
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="navLink"
                  to="/Info"
                  activeStyle={{
                    fontWeight: 'bold',
                    textDecoration: 'none',
                  }}
                >
                  Info
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

Navigation.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};

export default Navigation;
