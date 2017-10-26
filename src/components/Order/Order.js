import React, { Component } from 'react';
import './Order.css';

class OrderComponent extends Component {
  render () {
    console.log(this.props.basket);
    return (
      <div className='Order'>
        <h2 className='Order-title'>Your Order</h2>
        {this.props.basket.map((product, i) => {
          return <p key={i}>{product.name}</p>;
        })}
      </div>
    );
  }
}

OrderComponent.propTypes = {

};

export default OrderComponent;
