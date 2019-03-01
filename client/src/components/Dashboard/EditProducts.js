import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateProduct, getAllProducts } from '../../actions/productActions';
import EditProduct from './EditProduct';


function checkValue(value) {
  return value ? value : "";
}
class EditProducts extends Component {
  constructor() {
    super();
    this.state = {
      allProducts: [],
      name: '',
      image: '',
      description: '',
      ingredients: '',
      price: '',
      weight:'',
      available: false,
      errors: {},
    };
  }

  componentWillMount() {
    this.props.getAllProducts();
    this.setState({
      allProducts: this.props.products.products,
    });
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
    // this.props.registerProduct(newProduct, this.props.history);
  }

  onChange = (e, key) => {
    console.log(e.target);
    console.log(key);
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    // const productView = 
    return (
      <div className="section">
        <div className="container">
          <h2 className="title">Produkter</h2>
        </div>
        <div>
          {this.state.allProducts ? 
            this.state.allProducts.map((val, i) => {
              return <EditProduct key={i} productData={val} />
                // (
                // <form onSubmit={this.onSubmit} key={i}>
                //   <div className="box" key={i} id={i}>
                //     <input className="input" type="text" name="name" value={this.state.allProducts[i].name} onChange={(e) => { this.onChange(e, i) }}/>
                //     <input className="input" onChange={this.onChange} name="image" value={checkValue(val.image)} />
                //     <input className="input" onChange={this.onChange} name="description" value={checkValue(val.description)} />
                //     <input className="input" onChange={this.onChange} name="ingredients" value={checkValue(val.ingredients)} />
                //     <input className="input" onChange={this.onChange} name="price" value={checkValue(val.price)} />
                //     <input className="input" onChange={this.onChange} name="weight" value={checkValue(val.weight)} />
                //     <input className="checkbox" type="checkbox" name="available" value={val.available} />
                //   </div>
                //   <div className="field is-grouped">
                //     <div className="control">
                //         <button className="button is-success is-link">Spara produkt</button>
                //     </div>
                //   </div>
                // </form>
              // )
            })
        : <div><p>in produkter hittade, testa att gå tillbaka till dashboarden.</p></div> } 
        </div>
      </div>
    )
  }
}

EditProducts.propTypes = {
  updateProduct: PropTypes.func.isRequired,
  getAllProducts: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    products: state.products,
})

export default connect(mapStateToProps, { updateProduct, getAllProducts })(withRouter(EditProducts));