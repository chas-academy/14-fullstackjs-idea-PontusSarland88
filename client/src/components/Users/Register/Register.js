import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import axios from 'axios';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
        axios.post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({
                errors: err.response.data
            })
        );
    }
    
    render() {
        const { errors } = this.state;
    return (
      <div className="container is-centered">
        <h2 className="title">Register</h2>
        <form noValidate onSubmit={this.onSubmit}>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className={classnames('input', {
                        'is-danger': errors.name
                    })} 
                    name="name" type="text" placeholder="Name" value={this.state.name} onChange={this.onChange}/>
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon="user" />
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
                {this.state.errors.name ?
            <p className="help is-danger">{this.state.errors.name}</p> : null}
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className={classnames('input', {
                        'is-danger': errors.email
                    })} 
                    name="email" type="email" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon="envelope" />
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
                {this.state.errors.email ?
            <p className="help is-danger">{this.state.errors.email}</p> : null}
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className={classnames('input', {
                        'is-danger': errors.password
                    })} 
                    name="password" type="password" placeholder="Lösenord" value={this.state.password} onChange={this.onChange}/>
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon="key" />
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
                {this.state.errors.email ?
                <p className="help is-danger">{this.state.errors.password}</p> : null}
            </div>
            <div className="field">
                <p className="control has-icons-left has-icons-right">
                    <input className={classnames('input', {
                        'is-danger': errors.password2
                    })} 
                    name="password2" type="password" placeholder="Upprepa Lösenord" value={this.state.password2} onChange={this.onChange}/>
                    <span className="icon is-small is-left">
                        <FontAwesomeIcon icon="key" />
                    </span>
                    <span className="icon is-small is-right">
                        <i className="fas fa-check"></i>
                    </span>
                </p>
                {this.state.errors.password2 ?
            <p className="help is-danger">{this.state.errors.password2}</p> : null}
            </div>
            <div className="field is-grouped">
            <div className="control">
                <button className="button is-success is-link">Registrera</button>
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
export default Register;