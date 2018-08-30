import React from 'react'

import { SearchBar } from './components/base-components/SearchBar/SearchBar'
import { SearchResults } from './SearchResults'
import { searchTracks } from './services/searchTracks'
import { PageContainer, Page } from './components/styled-components/Page/Page'
import { LargeText } from './components/styled-components/Text/LargeText'
import { MediumText } from './components/styled-components/Text/MediumText'
import { Input } from './components/styled-components/Input/Input'
import { SearchButton } from './components/styled-components/Button/SearchButton'
import { StyledLink } from './components/styled-components/Link/Link'

const baseUrl = 'https://api.spotify.com/v1/search?q='

const SearchInput = ({ value, handleChange, handleSubmit }) => (
  <div style={{ display: 'flex', padding: '20px' }}>
    <Input
      placeholder='Search for an artist'
      type='text'
      value={value}
      onChange={handleChange}
    />
    <SearchButton onClick={handleSubmit}>
      <StyledLink to='/search'>Search</StyledLink>
    </SearchButton>
  </div>
)
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
              searchBarProps={({ value, handleChange, handleSubmit }) => (
                <SearchInput
                  value={value}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              )}
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
              searchBarProps={({ value, handleChange, handleSubmit }) => (
                <SearchInput
                  value={value}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              )}
            />
            <SearchResults getId={this.getId} results={results} />
          </Page>
        </PageContainer>
      )
    }
  }
}
