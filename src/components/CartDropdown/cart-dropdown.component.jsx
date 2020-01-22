import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CartItem from '../CartItem/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartShow } from '../../redux/cart/cart.actions'

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer
} from './cart-dropdown.styles'

const CartDropdown = ({ cartItems, history, dispatch }) =>
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        cartItems.map(cartItem =>
          <CartItem key={cartItem.id} item={cartItem} />
        ) :
        <span className='empty-message'>Cart is empty.</span>
      }
    </CartItemsContainer>
    <CartDropdownButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartShow())
    }}>
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))
