import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'bulma-extensions';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// TODO: remove and show correct image.
import pralin from '../../pralin.jpg';

function SelectList() {
  var rows = [];
  for (let i = 0; i  < 16; i ++) {
    rows.push(<option key={i}>{i}</option>)
  }
  return (<select>{rows}</select>);
}
export default class Products extends Component {    
    constructor(props) {
        super(props);
        
      }
    componentDidMount() {
      console.log(this.props);
    }

    render() {
        return (
          <div className="box">
            <article className="media">
              <figure className="media-left image">
                  <img className="figure" src={pralin} alt={this.props.productData.name}/>
              </figure>
              <div className="media-content box">
                <div className="content">
                  <h3> 
                  {this.props.productData.name}
                  </h3>
                    {this.props.productData.description ?
                    <p>Beskrivning: {this.props.productData.description}. </p> : null}
                    {this.props.productData.ingredients ? 
                    <p>Ingredienser: {this.props.productData.ingredients}. </p> : null}
                    {this.props.productData.weight ? 
                    <p>Vikt: {this.props.productData.weight} g. </p> : null}
                    {this.props.productData.price ? 
                    <p>Pris: {this.props.productData.price} kr/st. </p> : null}
                    <div className="control has-icons-left is-rounded">
                    <div className="select">
                    <SelectList />
                    </div>
                      <button className="button is-right">
                        <FontAwesomeIcon icon="shopping-cart" />
                      </button>
                    </div>
                  </div>
                </div>
            </article>
          </div>
        )
    }
}
