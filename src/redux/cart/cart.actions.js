import { CartActionTypes } from './cart.types'

export const toggleCartShow = () => ({
  type: CartActionTypes.TOGGLE_CART_SHOW
})

export const addItem = item => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item
})
