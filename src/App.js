import React from 'react'
import './App.css'
import Home from './components/container-components/Home'
import { TrackContainer } from './components/container-components/TrackContainer'
import { Search } from './Search'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = props => (
  <Router>
    <Switch>
      <Route
        exact
        path='/track'
        render={props => <TrackContainer {...props} />}
      />
      <Route path='/' component={Home} />
      <Route exact path='/search' component={Search} />
    </Switch>
  </Router>
)

export default App
