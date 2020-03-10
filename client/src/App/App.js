import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css';

import Home from '../pages/Home/home.page'
import Shop from '../pages/Shop/shop.page'
import SignInSignUp from '../pages/SignInSignUp/sign-in-sign-up.page'
import { default as Checkout } from '../pages/Checkout/checkout.container'

import { default as Header } from '../components/Header/header.container'

import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    console.log("Current User: ", this.props)
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component = { Home } />
          <Route path='/shop' component = { Shop } />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/signin' render={() => this.props.currentUser ? <Redirect to='/' /> : <SignInSignUp />} />
        </Switch>
      </div>
    )
  }
}

export default App;
