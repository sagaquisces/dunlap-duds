import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

import CartDropdown from './cart-dropdown.component'

const TOGGLE_CART_SHOW = gql`
  mutation ToggleCartShow {
    toggleCartShow @client
  }
`

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`

const CartDropDownContainer = () => (
  <Mutation mutation={TOGGLE_CART_SHOW}>
    {
      toggleCartShow => (
        <Query query={GET_CART_ITEMS}>
          {
            ({ data: { cartItems} }) => (
              <CartDropdown
                cartItems={cartItems}
                toggleCartShow = {toggleCartShow}
              />
            )
          }
        </Query>
      )
    }
  </Mutation>
)

export default CartDropDownContainer
