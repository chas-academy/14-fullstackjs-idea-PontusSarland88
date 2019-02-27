import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerProduct } from '../../actions/productActions';

class AddProduct extends Component {
  constructor() {
    super();
    this.state = {
        name: '',
        image: '',
        description: '',
        ingredients: '',
        price: '',
        weight:'',
        available: false,
        errors: {},
    }
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  checkboxCheck = (e) => {
    this.setState({[e.target.name]: this.refs.availableCheck.checked});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      name: this.state.name,
      image: this.state.image,
      description: this.state.description,
      ingredients: this.state.ingredients,
      price: this.state.price,
      weight: this.state.weight,
      available: this.state.available,
    }
    this.props.registerProduct(newProduct, this.props.history);
  }

  render() {
    const { user } = this.props.auth;
    return (
        <div className="container is-center">
        {!user.userRole ? "Du behöver admin rättigheter för att kunna se denna sida" : 
          <div>
            <h2 className="title">Lägg till en produkt</h2>
            <form onSubmit={this.onSubmit}>    {/** TODO: noValidate ?*/}
              <div className="field">
                <p className="control">
                  <input className="input" name="name" type="text" placeholder="Namn" 
                    value={this.state.name} onChange={this.onChange}/>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input className="input" name="image" type="url" placeholder="länk till bild" 
                    value={this.state.image} onChange={this.onChange}/>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input className="input" name="description" type="text" 
                    placeholder="Beskrivning" value={this.state.description} onChange={this.onChange}/>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input className="input" name="ingredients" type="text" 
                    placeholder="Lägg till varje ingrediens med ett ','" value={this.state.ingredients} onChange={this.onChange}/>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input className="input" name="price" type="number" 
                    placeholder="Pris" value={this.state.price} onChange={this.onChange}/>
                </p>
              </div>
              <div className="field">
                <p className="control">
                  <input className="input" name="weight" type="number" 
                    placeholder="Vikt (gram)" value={this.state.weight} onChange={this.onChange}/>
                </p>
              </div>
              <div className="field control">
                <label className="checkbox"> 
                  Aktiv produkt
                  <input className="checkbox" name="available" type="checkbox" 
                    ref="availableCheck" onChange={this.checkboxCheck}/>
                </label>
              </div>
              <div className="field is-grouped">
                <div className="control">
                    <button className="button is-success is-link">Spara produkt</button>
                </div>
                <div className="control">
                    <Link className="button is-danger is-text" to="/">
                        Avbryt
                    </Link>
                </div>
              </div>
            </form>
          </div>
        }
      </div>
    )
  }
}

AddProduct.propTypes = {
  registerProduct: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
  }
  
  const mapStateToProps = (state) => ({
    auth: state.auth,
  })

export default connect(mapStateToProps, {registerProduct} )(withRouter(AddProduct));