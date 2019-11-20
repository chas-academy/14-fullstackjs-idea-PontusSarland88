import React, { Component } from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import 'bulma/css/bulma.css';
import 'bulma-extensions';
import store from './store';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Register from './components/Users/Register/Register';
import Login from './components/Users/Login/Login';

// import Navbar from './components/Navbar/Navbar';

import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEnvelope, faUser, faKey } from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faEnvelope, faUser, faKey);

// checkForToken
if(localStorage.jwtToken) {
  // Set the auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticatad
  store.dispatch(setCurrentUser(decoded));
  // Check if token has expired
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser);
    // TODO: clear current profile.
    
    window.location.href = '/login';
  }
}


class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App Site">
            <Header />
            <main className="Site-content">
              <Route exact path="/" component={ Products }/>
              <div className="container">
                <Route exact path="/register" component={ Register } />
                <Route exact path="/login" component={ Login } />
              </div>
            </main>
            <Footer />  
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
