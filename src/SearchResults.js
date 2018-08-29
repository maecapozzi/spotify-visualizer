import React from 'react'
import { List } from './components/styled-components/List/List'
import { ListItem } from './components/styled-components/List/ListItem'
import { SmallText } from './components/styled-components/Text/SmallText'
import { StyledLink } from '../src/components/styled-components/Link/Link'

export const SearchResults = ({ results }) => {
  return (
    <List>
      {results.map(result => {
        const { id, name } = result
        return (
          <ListItem key={id}>
            <StyledLink
              to={{
                pathname: '/track',
                state: { id: id, name: name }
              }}
            >
              <SmallText>{name}</SmallText>
            </StyledLink>
          </ListItem>
        )
      })}
    </List>
  )
}
