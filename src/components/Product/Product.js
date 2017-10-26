import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../../models/Product';
import './Product.css';

import { selectItem } from '../../actions/actions';

class ProductComponent extends Component {
  handleClick (productCode) {
    this.props.dispatch(selectItem(productCode));
  }
  render () {
    return (
      <div className='Product' onClick={() => this.handleClick(this.props.product.code)}>
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

export default connect()(ProductComponent);
