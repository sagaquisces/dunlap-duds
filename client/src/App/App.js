import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Home from '../pages/Home/home.page'
import Shop from '../pages/Shop/shop.page'
import SignInSignUp from '../pages/SignInSignUp/sign-in-sign-up.page'
import Checkout from '../pages/Checkout/checkout.page'
import Header from '../components/Header/header.component'

import { GlobalStyle } from '../global.styles'

import { selectCurrentUser } from '../redux/user/user.selectors'
import { checkUserSession } from '../redux/user/user.actions'

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component = { Home } />
        <Route path='/shop' component = { Shop } />
        <Route exact path='/checkout' component={Checkout} />
        <Route exact path='/signin' render={() => currentUser ? <Redirect to='/' /> : <SignInSignUp />} />
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
