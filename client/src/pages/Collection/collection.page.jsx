import React from 'react'

import {default as CollectionItem} from '../../components/CollectionItem/collection-item.container'


import './collection.styles.scss'

const Collection = ({ collection }) => {

  const { title, items } = collection

  return (
    <div className='collection'>
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {
          items.map(item =>
            <CollectionItem key={item.id} item={item} />
          )
        }
      </div>
    </div>
  )


}

export default Collection
