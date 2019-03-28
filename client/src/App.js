import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import AddProduct from './components/Dashboard/AddProduct';
import EditProducts from './components/Dashboard/EditProducts';
import EditUsers from './components/Dashboard/EditUsers';
// import Navbar from './components/Navbar/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEnvelope, faUser, faKey } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faEnvelope, faUser, faKey);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App Site">
          <Header />
          <main className="Site-content">
            <Route exact path="/" component={ Products }/>
            <div className="container">
              <Route exact path="/register" component={ Register } />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/dashboard" component={ Dashboard } />
              <Route exact path="/dashboard/add/product" component={ AddProduct } />
              <Route exact path="/dashboard/edit/products" component={ EditProducts } />
              <Route exact path="/dashboard/edit/users" component={ EditUsers } />
            </div>
          </main>
          <Footer />  
        </div>
      </Router>
    );
  }
}

export default App;
