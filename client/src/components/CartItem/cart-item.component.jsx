import React from 'react'

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage
} from './cart-item.styles'

const CartItem = ({ item: {imageUrl, price, name, qty} }) =>
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt='item' />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {qty} X ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>

export default CartItem
