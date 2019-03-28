import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllUsers, deleteUser } from '../../actions/userActions';

class EditUser extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      role: false,
      name: '',
      email: '',
      errors: {},
    };
  }

  componentWillMount() {
    this.setState({
      id: this.props.userData._id,
      role: this.props.userData.role,
      name: this.props.userData.name,
      email: this.props.userData.email,
    })
  }

  onSubmit(e) {
    e.preventDefault();
    const updatedProduct = {
      id: this.state.id,
      name: this.state.name,

    }  
  }

  onChange = (e, value) => {
    this.setState({[e.target.name]: value});
  }

  checkboxCheck = (e) => {
    this.setState({[e.target.name]: this.refs.availableCheck.checked});
  }

  checkboxValue = () => {
    return this.state.role ? "checked" : ""
  }

  deleteAUser = (e) => {
    e.preventDefault(); debugger;
    this.props.deleteUser(this.state.id, this.props.history);
  }

  render() {
    return (
      <div className="media">
        <div className="media-content box">
          <form onSubmit={this.onSubmit} key={this.props.key}>
            <input className="input" type="text" name="name" value={this.state.name} onChange={e => this.onChange(e, e.target.value)}/>
            <input className="input" type="text" name="email"  value={this.state.email} onChange={e => this.onChange(e, e.target.value)}/>
            <div className="level">
                <div className="level-left">              
                  <p className="level-item">Administratör</p>
                  <input className="checkbox level-item" type="checkbox" name="role" checked={this.checkboxValue()} ref="availableCheck" onChange={this.checkboxCheck} />
              </div>
            </div>
            <div className="field is-grouped">
              <div className="control">
                  <button className="button is-success is-small is-link">Spara användare</button>
              </div>
              <div className="control">
                  <button className="button is-danger is-small is-link" onClick={e => this.deleteAUser(e)}>Ta bort användare</button>
              </div>  
              </div>
          </form>
        </div>
      </div>
    )
  }
}

EditUser.propTypes = {
  getAllUsers: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    users: state.users,
})

export default connect(mapStateToProps, { getAllUsers, deleteUser })(withRouter(EditUser));