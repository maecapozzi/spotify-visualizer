import React from 'react'

import { SearchBar } from './components/base-components/SearchBar/SearchBar'
import { SearchResults } from './SearchResults'
import { searchTracks } from './services/searchTracks'
import { PageContainer, Page } from './components/styled-components/Page/Page'
import { LargeText } from './components/styled-components/Text/LargeText'
import { MediumText } from './components/styled-components/Text/MediumText'
import { TrackContainer } from './components/container-components/TrackContainer'

const baseUrl = 'https://api.spotify.com/v1/search?q='
export class Search extends React.Component {
  static defaultProps = { showResults: false }

  state = {
    value: '',
    results: [],
    showResults: this.props.showResults,
    accessToken: null
  }

  componentDidMount () {
    sessionStorage.setItem('accessToken', this.props.hashParams.access_token)
  }

  handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ accessToken: this.props.hashParams.access_token })

    const uri = `${baseUrl}${encodeURIComponent(this.state.value)}&type=track`
    searchTracks(uri, this.props.hashParams.access_token, this.collectResults)
  }

  collectResults = items => {
    let results = []
    items.map(artist => results.push(artist))

    this.setState({ results, showResults: true })
  }

  handleChange = e => {
    this.setState({ value: e.target.value })
  }

  render () {
    const { value, showResults, results } = this.state
    if (!showResults) {
      return (
        <PageContainer>
          <Page>
            <LargeText>Get Started</LargeText>
            <MediumText>Search for your favorite artists</MediumText>
            <SearchBar
              value={value}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Page>
        </PageContainer>
      )
    } else if (showResults) {
      return (
        <PageContainer>
          <Page>
            <LargeText>Get Started</LargeText>
            <MediumText>Search for your favorite artists</MediumText>
            <SearchBar
              value={value}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <SearchResults getId={this.getId} results={results} />
          </Page>
        </PageContainer>
      )
    }
  }
}
