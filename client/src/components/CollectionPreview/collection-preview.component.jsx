import React from 'react'
import { withRouter } from 'react-router-dom'

import CollectionItem from '../CollectionItem/collection-item.component'

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer
} from './collection-preview.styles'

const CollectionPreview = ({ title, items, history, match }) =>
  <CollectionPreviewContainer>
    <TitleContainer
      className='title'
      onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
    >
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {
        items
          .filter((item, index) => index < 4)
          .map((item) =>
            <CollectionItem key={item.id} item={item} />
          )
      }
    </PreviewContainer>
  </CollectionPreviewContainer>

export default withRouter(CollectionPreview);
