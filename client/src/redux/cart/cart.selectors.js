import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartShow = createSelector(
  [selectCart],
  cart => cart.show
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accQty, cartItem) => accQty + cartItem.qty, 0
  )
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accQty, cartItem) => accQty + cartItem.qty * cartItem.price, 0
  )
)
