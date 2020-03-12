import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { toggleCartShow } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles'

const CartIcon = ({ toggleCartShow, itemCount }) =>
  <CartContainer onClick={toggleCartShow}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>

const mapDispatchToProps = dispatch => ({
  toggleCartShow: () => dispatch(toggleCartShow())
})

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartIcon)
