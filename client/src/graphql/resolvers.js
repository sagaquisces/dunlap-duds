import { gql } from 'apollo-boost'

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
  getCartTotal,
  getCartItemCount
} from './cart.utils'

export const typeDefs = gql`
  extend type Item {
    quantity: Int
  }

  extend type DateTime {
    nanoseconds: Int!
    seconds: Int!
  }

  extend type User {
    id: ID!
    displayName: String!
    email: String!
    createdAt: DateTime!
  }

  extend type Mutation {
    ToggleCartShow: Boolean!
    AddItemToCart(item: Item!): [Item]!
    SetCurrentUser(user: User!): User!
    RemoveItemFromCart(item: Item!): [Item]!
    ClearItemFromCart(item: Item!): [Item]!
  }
`

const GET_CART_SHOW = gql`
  {
    cartShow @client
  }
`

const GET_CART_ITEMS = gql`
  {
    cartItems @client
  }
`

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`

const GET_CART_TOTAL = gql`
  {
    cartTotal @client
  }
`

const GET_CURRENT_USER = gql`
  {
    currentUser @client
  }
`


const updateCartItemsRelatedQueries = (cache, newCartItems) => {
  cache.writeQuery({
    query: GET_ITEM_COUNT,
    data: { itemCount: getCartItemCount(newCartItems)}
  })

  cache.writeQuery({
    query: GET_CART_TOTAL,
    data: { cartTotal: getCartTotal(newCartItems)}
  })

  cache.writeQuery({
    query: GET_CART_ITEMS,
    data: { cartItems: newCartItems }
  })
}

export const resolvers = {
  Mutation: {
    toggleCartShow: (_root, _args, { cache }) => {
      const { cartShow } = cache.readQuery({
        query: GET_CART_SHOW,
      })

      cache.writeQuery({
        query: GET_CART_SHOW,
        data: { cartShow: !cartShow }
      })

      return !cartShow
    },

    addItemToCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      })

      const newCartItems = addItemToCart(cartItems, item)

      updateCartItemsRelatedQueries(cache, newCartItems)

      return newCartItems
    },

    removeItemFromCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      })

      const newCartItems = removeItemFromCart(cartItems, item)

      updateCartItemsRelatedQueries(cache, newCartItems)

      return newCartItems
    },

    clearItemFromCart: (_root, { item }, { cache }) => {
      const { cartItems } = cache.readQuery({
        query: GET_CART_ITEMS
      })

      const newCartItems = clearItemFromCart(cartItems, item)

      updateCartItemsRelatedQueries(cache, newCartItems)

      return newCartItems
    },

    setCurrentUser: (_root, { user }, { cache }) => {
      cache.writeQuery({
        query: GET_CURRENT_USER,
        data: { currentUser: user }
      })

      return user
    }
  }
}
