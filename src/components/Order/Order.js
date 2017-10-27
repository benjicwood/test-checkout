import React, { Component } from 'react';
import './Order.css';
import { formattedPrice, discountedPrice } from '../../helpers/price';

class OrderComponent extends Component {
  render () {
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
        <h4>
          Total: {formattedPrice(this.props.total.reduce((prev, curr) => prev + curr))}
        </h4>
        <h4>
          Discount: {discountedPrice(this.props.total.reduce((prev, curr) => prev + curr))}
        </h4>
      </div>
    );
  }
}

OrderComponent.propTypes = {

};

export default OrderComponent;
