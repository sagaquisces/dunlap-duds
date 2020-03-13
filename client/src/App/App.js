import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Header from '../components/Header/header.component'
import Spinner from '../components/Spinner/spinner.component'
import { GlobalStyle } from '../global.styles'

import { selectCurrentUser } from '../redux/user/user.selectors'
import { checkUserSession } from '../redux/user/user.actions'

const Home = lazy(() => import('../pages/Home/home.page'))
const Shop = lazy(() => import('../pages/Shop/shop.page'))
const SignInSignUp = lazy(() => import('../pages/SignInSignUp/sign-in-sign-up.page'))
const Checkout = lazy(() => import('../pages/Checkout/checkout.page'))

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component = { Home } />
          <Route path='/shop' component = { Shop } />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInSignUp />} />
        </Suspense>
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
