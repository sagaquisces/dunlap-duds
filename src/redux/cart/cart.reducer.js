import { CartActionTypes } from './cart.types'

const INITIAL_STATE = {
  show: false
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_SHOW:
      return {
        ...state,
        show: !state.show
      }
    default:
      return state
  }
}

export default cartReducer
