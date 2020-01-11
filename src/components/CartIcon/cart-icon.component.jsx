import React from 'react'
import { connect } from 'react-redux'

import { toggleCartShow } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartShow, itemCount }) =>
  <div className='cart-icon' onClick={toggleCartShow}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>

const mapDispatchToProps = dispatch => ({
  toggleCartShow: () => dispatch(toggleCartShow())
})

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce(
    (accQty, cartItem) => accQty + cartItem.qty, 0
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
