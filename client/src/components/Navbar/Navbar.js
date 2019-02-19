import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true">a</span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </div>
            </div>
            <div className="navbar-menu" id="navMenu">
                <Link className="navbar-item" to="/">
                    Produkter
                </Link>
                <Link className="navbar-item" to="/about">
                    Om
                </Link>
                <Link className="navbar-item" to="/login">
                    Login
                </Link>
                <Link className="navbar-item" to="/register">
                    Registrera
                </Link>
            </div>
        </nav>
    )
  }
}
