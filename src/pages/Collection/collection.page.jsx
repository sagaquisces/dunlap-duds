import React from 'react'
import { connect } from 'react-redux'

import CollectionItem from '../../components/CollectionItem/collection-item.component'

import { selectCollection } from '../../redux/shop/shop.selectors'

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles'

const Collection = ({ collection }) => {

  if (collection) {
    const { title, items } = collection

    return (
      <CollectionPageContainer>
        <CollectionTitle>{ title }</CollectionTitle>
        <CollectionItemsContainer>
          {
            items.map(item =>
              <CollectionItem key={item.id} item={item} />
            )
          }
        </CollectionItemsContainer>
      </CollectionPageContainer>
    )
  }
  return <div>Loading...</div>

}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)
