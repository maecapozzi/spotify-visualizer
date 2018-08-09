import React from 'react'
import axios from 'axios'

const selectArtist = (uri, accessToken) => {
  axios
    .get(uri, {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    })
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
      throw new Error('Something went wrong. Please try searching again.')
    })
}

export const SearchResults = ({ results, accessToken }) => {
  return results.map(result => {
    return (
      <h3
        onClick={() => selectArtist(result.href, accessToken)}
        key={result.name}
      >
        {result.name}
      </h3>
    )
  })
}
