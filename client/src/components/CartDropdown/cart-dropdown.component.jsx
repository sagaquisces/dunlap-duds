import React from 'react'

import { withRouter } from 'react-router-dom'

import CustomButton from '../CustomButton/custom-button.component'
import CartItem from '../CartItem/cart-item.component'

import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, toggleCartShow }) =>
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.length ?
        cartItems.map(cartItem =>
          <CartItem key={cartItem.id} item={cartItem} />
        ) :
        <span className='empty-message'>Cart is empty.</span>
      }
    </div>
    <CustomButton onClick={() => {
      history.push('/checkout')
      toggleCartShow()
    }}>
      GO TO CHECKOUT
    </CustomButton>
  </div>

export default withRouter(CartDropdown)
