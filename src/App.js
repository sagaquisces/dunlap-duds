import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Home from './pages/Home/home.page'
import Shop from './pages/Shop/shop.page'
import SignInSignUp from './pages/SignInSignUp/sign-in-sign-up.page'
import Header from './components/Header/header.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      createUserProfileDocument(user)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component = { Home }/>
          <Route path='/shop' component = { Shop }/>
          <Route path='/signin' component = { SignInSignUp }/>
        </Switch>
      </div>
    )
  }
}

export default App;
