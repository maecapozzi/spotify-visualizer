import React from 'react'
import { withRouter } from 'react-router'
import { Search } from '../../Search'
import { hashCredentials } from '../../authentication/hashCredentials'
import { redirectToSpotify } from '../../authentication/redirectToSpotify'
import { LoginButton } from '../styled-components/Button/LoginButton'
import { LargeText } from '../styled-components/Text/LargeText'
import { MediumText } from '../styled-components/Text/MediumText'
import { Page, PageContainer } from '../styled-components/Page/Page'

class Home extends React.Component {
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
      return <Search {...this.props} hashParams={hashParams} />
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

export default withRouter(Home)
