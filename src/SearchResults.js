import React from 'react'
import axios from 'axios'
import { List } from './components/styled-components/List/List'
import { ListItem } from './components/styled-components/List/ListItem'
import { SmallText } from './components/styled-components/Text/SmallText'

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
  return (
    <List>
      {results.map(result => {
        return (
          <ListItem
            onClick={() => selectArtist(result.href, accessToken)}
            key={result.name}
          >
            <SmallText>{result.name}</SmallText>
          </ListItem>
        )
      })}
    </List>
  )
}
