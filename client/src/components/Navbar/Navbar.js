import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

class Navbar extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
        <div className="tabs">
            <li>
                <a href="" onClick={this.onLogoutClick.bind(this)} className="navbar-item">Logga ut</a>
            </li>
            <li>
                <a href="/profile" className="">{user.name} profil</a>
            </li>
        </div>
    );
    const guestLink = (
        <div className="tabs">
            <li>
                <Link className="navbar-item" to="/login">
                    Logga in
                </Link>
            </li>
            <li>
                <Link className="navbar-item" to="/register">
                    Registrera
                </Link>
            </li>
        </div>
    );

    return (
        <nav className="bd-tabs" role="navigation" aria-label="main navigation">
            {/* <div className="navbar-brand">
                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true">a</span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div> */}
            <div className="tabs " id="navMenu">
                <ul>
                  <li >
                    <Link to="/">
                      Produkter
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      Om
                    </Link>
                  </li>
                  {isAuthenticated ? authLinks : guestLink}
                </ul>
            </div>
            {/* <div className="navbar-menu" id="navMenuAuth"> */}
                {/* <Link className="navbar-item" to="/login">
                    Logga in
                </Link>
                <Link className="navbar-item" to="/register">
                    Registrera
                </Link> */}
            {/* </div> */}
        </nav>
    )
  }
}

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
})

export default connect(mapStateToProps, { logoutUser}) (Navbar);