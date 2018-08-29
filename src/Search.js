import React from 'react'

import { SearchBar } from './components/base-components/SearchBar/SearchBar'
import { SearchResults } from './SearchResults'
import { searchTracks } from './services/searchTracks'
import { PageContainer, Page } from './components/styled-components/Page/Page'
import { LargeText } from './components/styled-components/Text/LargeText'
import { MediumText } from './components/styled-components/Text/MediumText'

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
    this.setState({ accessToken: localStorage.getItem('accessToken') })
  }

  handleSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    searchTracks(
      `${baseUrl}${encodeURIComponent(this.state.value)}&type=track`,
      this.collectResults
    )
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
