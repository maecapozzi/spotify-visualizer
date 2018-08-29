import React from 'react'
import { List } from './components/styled-components/List/List'
import { ListItem } from './components/styled-components/List/ListItem'
import { SmallText } from './components/styled-components/Text/SmallText'
import { Link } from 'react-router-dom'

export const SearchResults = ({ results }) => {
  return (
    <List>
      {results.map(result => {
        return (
          <ListItem key={result.id}>
            <Link
              to={{
                pathname: '/track',
                state: { id: result.id }
              }}
            >
              <SmallText>{result.name}</SmallText>
            </Link>
          </ListItem>
        )
      })}
    </List>
  )
}
