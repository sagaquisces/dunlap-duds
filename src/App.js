import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './App.css';

import Home from './pages/Home/home.page'
import Shop from './pages/Shop/shop.page'
import SignInSignUp from './pages/SignInSignUp/sign-in-sign-up.page'
import Checkout from './pages/Checkout/checkout.page'

import Header from './components/Header/header.component'
import { selectCurrentUser } from './redux/user/user.selectors'

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth)
    //
    //     userRef.onSnapshot(snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       })
    //     })
    //   }
    //   setCurrentUser(userAuth)
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component = { Home } />
          <Route path='/shop' component = { Shop } />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => (this.props.currentUser) ? <Redirect to='/' /> : <SignInSignUp />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

export default connect(mapStateToProps)(App);
