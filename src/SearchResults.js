import React from 'react'
import axios from 'axios'
import { List } from './components/styled-components/List/List'
import { ListItem } from './components/styled-components/List/ListItem'
import { SmallText } from './components/styled-components/Text/SmallText'
import { selectTrack } from './services/selectTrack'
import { Link } from 'react-router-dom'

export const SearchResults = ({ results, accessToken }) => {
  return (
    <List>
      {results.map(result => {
        return (
          <ListItem
            onClick={() => selectTrack(result.href, accessToken)}
            key={result.id}
          >
            <Link to='/track'>
              <SmallText>{result.name}</SmallText>
            </Link>
          </ListItem>
        )
      })}
    </List>
  )
}
