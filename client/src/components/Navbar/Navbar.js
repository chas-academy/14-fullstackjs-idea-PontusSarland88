import React, { Component } from 'react';

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
                <a className="navbar-item" href="#">
                    Produkter
                </a>
                <a className="navbar-item" href="#">
                    Om
                </a>
                <a className="navbar-item" href="#">
                    Login
                </a>
            </div>
        </nav>
    )
  }
}
