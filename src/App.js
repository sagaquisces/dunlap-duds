import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Home from './pages/Home/home.page'

const Hats = () =>
  <div>
    <h1>Hats Page</h1>
  </div>

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component = { Home }/>
        <Route path='/hats' component = { Hats }/>
      </Switch>
    </div>
  );
}

export default App;
