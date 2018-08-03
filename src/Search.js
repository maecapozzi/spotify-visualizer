import React from "react";
import { SearchBar } from "./SearchBar";
import { SearchResults } from "./SearchResults";
import { searchArtists } from "./services/searchArtists";

export class Search extends React.Component {
  static defaultProps = { showResults: false };

  state = {
    value: "",
    results: [],
    showResults: this.props.showResults
  };

  handleSubmit = e => {
    e.preventDefault();
    const uri = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      this.state.value
    )}&type=artist`;
    searchArtists(uri, this.props.hashParams.access_token, this.collectResults);
  };

  collectResults = items => {
    let results = [];
    items.map(artist => results.push(artist));

    this.setState({ results, showResults: true });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value, showResults, results } = this.state;
    if (!showResults) {
      return (
        <SearchBar
          value={value}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      );
    } else {
      return (
        <SearchResults
          results={results}
          accessToken={this.props.hashParams.access_token}
        />
      );
    }
  }
}
