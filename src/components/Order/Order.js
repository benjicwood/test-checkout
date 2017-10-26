import React, { Component } from 'react';
import './Order.css';
import { formattedPrice } from '../../helpers/price';

class OrderComponent extends Component {
  render () {
    console.log(this.props.basket);
    return (
      <div className='ProductList'>
        <h2 className='Order-title'>Your Order</h2>
        {this.props.basket.map((product, i) => {
          return <div className='Product' key={i}>
            <div className='Order-name'>
              {product.name} x{product.qty}
            </div>
            <div className='Order-price'>
              £{formattedPrice(product.price * product.qty)}
            </div>
          </div>;
        })}
      </div>
    );
  }
}

OrderComponent.propTypes = {

};

export default OrderComponent;
