import React, { Component } from 'react';
import ProductList from '../ProductList';
import Order from '../Order';
import aProducts from '../../config/products';
import './App.css';

class AppComponent extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to the Checkout</h1>
        </div>
        <div className="App-body">
          <ProductList products={aProducts} />
          <Order />
        </div>
      </div>
    );
  }
}

export default AppComponent;
