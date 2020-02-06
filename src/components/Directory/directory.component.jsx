import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import { DirectoryMenuContainer } from './directory.styles'

import MenuItem from '../MenuItem/menu-item.component.jsx'

const Directory = ({ sections }) =>

    <DirectoryMenuContainer>
      {
        sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))
      }
    </DirectoryMenuContainer>

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)
