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
    accessToken: null
  }

  componentDidMount () {
    if (this.props.history.location.pathname === '/callback/') {
      const hashParams = hashCredentials()
      this.setState({ accessToken: hashParams.access_token })
      localStorage.setItem('accessToken', hashParams.access_token)
    }
  }

  render () {
    const { accessToken } = this.state
    if (accessToken) {
      return <Search {...this.props} />
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
