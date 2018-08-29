import React from 'react'
import './App.css'
import Home from './components/container-components/Home'
import { TrackContainer } from './components/container-components/TrackContainer'
import { Search } from './Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Nav } from './components/styled-components/Nav/Nav'
import { NavLink } from './components/styled-components/Link/NavLink'

const router = (
  <Router>
    <Switch>
      <Route
        exact
        path='/track'
        render={props => <TrackContainer {...props} />}
      />
      <Route exact path='/' component={Home} />
      <Route exact path='/search' component={Search} />
    </Switch>
  </Router>
)

const isLoggedIn = () => {
  return localStorage.getItem('accessToken') !== null
}

const logOut = () => {
  localStorage.removeItem('accessToken')
  window.location.href = '/'
}

const nav = (
  <Nav>
    <NavLink onClick={logOut}>Logout</NavLink>
  </Nav>
)

const App = props => {
  if (isLoggedIn()) {
    return (
      <div>
        {nav}
        {router}
      </div>
    )
  } else {
    return <div>{router}</div>
  }
}

export default App
