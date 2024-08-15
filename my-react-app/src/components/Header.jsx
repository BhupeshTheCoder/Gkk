import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import SessionService from '../service/SessionService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faSignOutAlt, faHome} from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined,
      role: undefined,
      isNavbarCollapsed: true, // Added for navbar collapse
    };

    this.handleLogout = this.handleLogout.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this); // Added toggle function
  }

  componentDidMount() {
    const user = SessionService.getCurrentUser();
    const role = SessionService.getRole();

    if (user) {
      this.setState({
        user,
        role,
      });
    }
  }

  handleLogout() {
    SessionService.logout();
    this.setState({
      user: undefined,
      role: undefined,
    });
  }

  toggleNavbar() {
    this.setState(prevState => ({
      isNavbarCollapsed: !prevState.isNavbarCollapsed,
    }));
  }

  render() {
    const { user, isNavbarCollapsed } = this.state;

    return (
      <>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          {/* Logo */}
          <NavLink to="/" className="navbar-brand">
            <img src="GKR image logo.jpg" alt="logo" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          </NavLink>

          {/* Name */}
          <span className="navbar-text">Ghar Ki Rasoi</span>

          {/* Collapsible button for small screens */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={this.toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
            style={{ marginLeft: 'auto' }} // Ensure hamburger button is aligned to the right
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible content */}
          <div className={`collapse navbar-collapse ${isNavbarCollapsed ? '' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <FontAwesomeIcon icon={faHome} /> Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/aboutUs" className="nav-link">About Us</NavLink>
              </li>
              {!user && (
                <li className="nav-item ml-2">
                  <NavLink to="/login" className="nav-link btn btn-success">
                    <FontAwesomeIcon icon={faSignInAlt} /> Login
                  </NavLink>
                </li>
              )}
              {user && (
                <li className="nav-item ml-2">
                  <NavLink to="/" className="btn btn-danger" onClick={this.handleLogout}>
                    <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                  </NavLink>
                </li>
              )}
              {!user && (
                <li className="nav-item ml-2">
                  <NavLink to="/signup" className="nav-link btn btn-primary">
                    <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </nav>

        {/* Wrapper for page content */}
        <div className="content-wrapper" style={{ paddingTop: '56px' }}>
          {/* Your page content goes here */}
        </div>
      </>
    );
  }
}

export default Header;


