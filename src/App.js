import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Login from './components/Login'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App
