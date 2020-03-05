import React from 'react'
import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/CollectionsOverview/collections-overview.component'
import Collection from '../Collection/collection.page'

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
