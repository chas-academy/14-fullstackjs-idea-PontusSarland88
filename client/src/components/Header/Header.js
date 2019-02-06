import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
class Header extends Component {
    render() {
        return (
            <section className="hero is-dark">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title" >
                            <a href="/">Pralinbutiken</a>
                        </h1>
                        <h2 className="subtitle">
                            something something...
                        </h2>
                        <Navbar />
                    </div>
                </div>
            </section>
        );
    }
}
export default Header;
