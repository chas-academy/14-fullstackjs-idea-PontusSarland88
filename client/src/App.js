import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';

class App extends Component {
  render() {
    return (
        <div className="App Site">
        	<Header />
          <main className="Site-content">
            <Products /> 
          </main>
          <Footer />
        </div>
    );
  }
}

export default App;
