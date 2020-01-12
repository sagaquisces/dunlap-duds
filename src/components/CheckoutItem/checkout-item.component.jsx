import React from 'react'

import './checkout-item.styles.scss'

const CheckoutItem = ({ cartItem: { name, imageUrl, price, qty } }) =>
  <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='item' />
    </div>
    <span className='name'>{name}</span>
    <span className='qty'>{qty}</span>
    <span className='price'>${price}</span>
    <div className='remove-button'>&#10005;</div>
  </div>

  export default CheckoutItem