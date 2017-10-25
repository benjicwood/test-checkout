import React, { Component } from 'react';
import ProductComponent from '../Product';
import Product from '../../models/Product';
import './ProductList.css';

class ProductListComponent extends Component {
  render () {
    return (
      <div className='ProductList'>
        <h2 className='ProductList-title'>Our Products</h2>
        {this.props.products.map(x =>
          <ProductComponent product={x} key={x.code} />
        )}
      </div>
    );
  }
}

ProductListComponent.propTypes = {
  products: React.PropTypes.arrayOf(
    React.PropTypes.instanceOf(Product)
  )
};

export default ProductListComponent;
