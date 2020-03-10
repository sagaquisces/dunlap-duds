import React from 'react'
import { graphql } from 'react-apollo'
import { flowRight } from 'lodash'
import { gql } from 'apollo-boost'

import CartIcon from './cart-icon.component'

const TOGGLE_CART_SHOW = gql`
  mutation ToggleCartShow {
    toggleCartShow @client
  }
`

const GET_ITEM_COUNT = gql`
 {
   itemCount @client
 }
`

const CartIconContainer = ({ data: { itemCount }, toggleCartShow }) =>
  <CartIcon
    toggleCartShow={toggleCartShow}
    itemCount={itemCount}
  />


export default flowRight(
  graphql(GET_ITEM_COUNT),
  graphql(TOGGLE_CART_SHOW, {name: 'toggleCartShow'})
)(CartIconContainer)
