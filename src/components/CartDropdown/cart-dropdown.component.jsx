import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CustomButton from '../CustomButton/custom-button.component'
import CartItem from '../CartItem/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'


import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems }) =>
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
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default connect(mapStateToProps)(CartDropdown)
