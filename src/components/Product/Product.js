import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from '../../models/Product';
import './Product.css';

class ProductComponent extends Component {
  render () {
    return (
      <div className='Product'>
        <div className='Product-name'>
          {this.props.product.name}
        </div>
        <div className='Product-price'>
          £{this.props.product.getFormattedPrice()}
        </div>
      </div>
    );
  }
}

ProductComponent.propTypes = {
  product: PropTypes.instanceOf(Product)
};

export default ProductComponent;
