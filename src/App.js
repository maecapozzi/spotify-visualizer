import React from 'react'
import { withRouter } from 'react-router'
import './App.css'
import { Search } from './Search'
import { hashCredentials } from './authentication/hashCredentials'
import { redirectToSpotify } from './authentication/redirectToSpotify'

class App extends React.Component {
  static defaultProps = {
    isLoggedIn: false,
    toSearch: false
  }

  state = {
    isLoggedIn: this.props.isLoggedIn,
    toSearch: this.props.toSearch,
    hashParams: ''
  }

  componentDidMount () {
    if (this.props.history.location.pathname === '/callback/') {
      this.setState({
        isLoggedIn: true,
        toSearch: true,
        hashParams: hashCredentials()
      })
    }
  }

  render () {
    const { isLoggedIn, toSearch, hashParams } = this.state
    if (isLoggedIn && toSearch) {
      return <Search hashParams={hashParams} />
    } else {
      return <button onClick={redirectToSpotify}>Login</button>
    }
  }
}

export default withRouter(App)
