import React, { Component } from 'react';
import { Link } from "react-router-dom"
import SessionService from '../service/SessionService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faSignInAlt, faSignOutAlt, faHome, faUser } from '@fortawesome/free-solid-svg-icons';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: undefined,
            role: undefined
        }

        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        const user = SessionService.getCurrentUser();
        const role = SessionService.getRole();

        if (user) {
            this.setState({
                user: user,
                role: role
            })
        }
    }

    handleLogout() {
        SessionService.logout();
        this.setState({
            user: undefined,
            role: undefined
        })
    }

    render() {
        const { user, role } = this.state;

        return (
            <div className="my-1">
                <nav className="navbar navbar-expand-md navbar-inverted bg-dark">
                    {/* Logo */}
                    <span className="navbar-brand">
                        <img className="image" src="./mkr-logo.png" height="35" alt="logo" />
                    </span>

                    {/* Name */}
                    <span className="navbar-text">Maa Ki Rasoi</span>

                    {
                        user && <span className="ml-5 nav-link nav-link-inverted">
                            <Link to={"/user"} className="nav-link"><FontAwesomeIcon icon={faUser} />  {role} : {user.name}
                            </Link>
                        </span>
                    }
                    {/* Nav Links */}

                    {/* <!-- Collasable button for small screens --> */}
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#nb">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* <!-- div to contain the collapable contents --> */}
                    <div className="collapse navbar-collapse" id="nb">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link to="/" tag="a" className="nav-link">
                                <FontAwesomeIcon icon={faHome} /> Home
                                </Link></li>
                            <li className="nav-item">
                                <Link to="/aboutUs" tag="a" className="nav-link">About Us
                            </Link></li>
                            {
                                !user && <li className="nav-item  ml-2">
                                    <Link to="/login" tag="a" className="nav-link btn btn-success">
                                        <FontAwesomeIcon icon={faSignInAlt} /> Login
                                        </Link>
                                </li>
                            }
                            {
                                user && <li className="nav-item  ml-2">
                                    <Link to="/" className="btn btn-danger" onClick={this.handleLogout}>
                                        <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                              </Link>
                                </li>
                            }
                            {
                                !user && <li className="nav-item ml-2">
                                    <Link to="/signup" className="nav-link btn btn-primary" tag="a" >
                                        <FontAwesomeIcon icon={faUserPlus} /> Sign Up
                                        </Link>
                                </li>
                            }

                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;