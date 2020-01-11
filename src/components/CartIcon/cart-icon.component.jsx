import React from 'react'
import { connect } from 'react-redux'

import { toggleCartShow } from '../../redux/cart/cart.actions'

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartShow }) =>
  <div className='cart-icon' onClick={toggleCartShow}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>

const mapDispatchToProps = dispatch => ({
  toggleCartShow: () => dispatch(toggleCartShow())
})

export default connect(null, mapDispatchToProps)(CartIcon)
