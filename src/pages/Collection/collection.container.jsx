import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/withSpinner/with-spinner.component'
import Collection from './collection.page'

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state)
})

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection)

export default CollectionContainer
