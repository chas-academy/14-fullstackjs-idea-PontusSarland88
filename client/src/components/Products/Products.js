import React, { Component } from 'react';


export default class Products extends Component {    
    constructor() {
        super();
        this.state = {
          productList: []
        };
      }
    componentDidMount() {
        const now = this;
        fetch("/api/products/all")
          .then(function(response) {
            return response.json();
          })
          .then(function(products) {
            now.setState({ productList: products }); console.log(now.state.productList);
          })
          .catch(function(error) {
            console.log(error);
          });

    }
    render() {
        return (
        <div>
            
        </div>
        )
    }
}
