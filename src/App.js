import React from 'react'
import { withRouter } from 'react-router'
import './App.css'
import { Search } from './Search'
import { hashCredentials } from './authentication/hashCredentials'
import { redirectToSpotify } from './authentication/redirectToSpotify'
import { LoginButton } from './components/styled-components/Button/LoginButton'
import { LargeText } from './components/styled-components/Text/LargeText'
import { MediumText } from './components/styled-components/Text/MediumText'
import { Page, PageContainer } from './components/styled-components/Page/Page'

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
      return (
        <PageContainer>
          <Page>
            <LargeText>earworm</LargeText>
            <MediumText>
              An app to help users understand why they love a song via granular
              insights, while aiding and encouraging exploration and discovery.
            </MediumText>
            <LoginButton onClick={redirectToSpotify}>Login</LoginButton>
          </Page>
        </PageContainer>
      )
    }
  }
}

export default withRouter(App)
