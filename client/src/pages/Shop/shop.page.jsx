import React from 'react'
import { Route } from 'react-router-dom'

import { default as CollectionsOverview } from '../../components/CollectionsOverview/collections-overview.container'
import { default as Collection } from '../Collection/collection.container'

const Shop = ({ match }) =>
  <div className='shop-page'>
    <Route
      exact
      path={`${match.path}`}
      component={CollectionsOverview}
    />
    <Route
      path={`${match.path}/:collectionId`}
      component={Collection}
    />
  </div>

export default Shop
