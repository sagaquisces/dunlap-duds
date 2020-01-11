import React from 'react'
import { connect } from 'react-redux'

import { toggleCartShow } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

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

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
