import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const userLoginInput = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('/api/users/login', userLoginInput)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }
    
  render() {
    return (
        <div className="container is-centered">
            <h2 className="title">Logga in</h2>
            <form onSubmit={this.onSubmit}>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon="envelope" />
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <input className="input" name="password" type="password" placeholder="Lösenord" value={this.state.password} onChange={this.onChange}/>
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon="key" />
                        </span>
                        <span className="icon is-small is-right">
                            <i className="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div className="field is-grouped">
                <div className="control">
                    <button className="button is-success is-link">Logga in</button>
                </div>
                <div className="control">
                    <Link className="button is-danger is-text" to="/">
                        Avbryt
                    </Link>
                </div>
                </div>
            </form>
        </div>
    )
  }
}
export default Login;
