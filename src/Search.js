import React from 'react'
import { SearchBar } from './components/base-components/SearchBar/SearchBar'
import { SearchResults } from './SearchResults'
import { searchArtists } from './services/searchArtists'
import { PageContainer, Page } from './components/styled-components/Page/Page'

const baseUrl = 'https://api.spotify.com/v1/search?q='
export class Search extends React.Component {
  static defaultProps = { showResults: false }

  state = {
    value: '',
    results: [],
    showResults: this.props.showResults
  }

  handleSubmit = e => {
    e.preventDefault()
    const uri = `${baseUrl}${encodeURIComponent(this.state.value)}&type=artist`
    searchArtists(uri, this.props.hashParams.access_token, this.collectResults)
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
            <SearchBar
              value={value}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Page>
        </PageContainer>
      )
    } else {
      return (
        <PageContainer>
          <Page>
            <SearchResults
              results={results}
              accessToken={this.props.hashParams.access_token}
            />
          </Page>
        </PageContainer>
      )
    }
  }
}
