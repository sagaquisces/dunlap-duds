import React from 'react'

import MenuItem from '../MenuItem/menu-item.component.jsx'
import DIRECTORY_DATA from './directory.data.js'

import './directory.styles.scss'

const Directory = () =>

    <div className='directory-menu'>
      {
        DIRECTORY_DATA.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </div>

export default Directory
