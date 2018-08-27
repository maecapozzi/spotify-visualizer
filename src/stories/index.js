import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { LoginButton } from '../components/styled-components/Button/LoginButton'
import { LargeText } from '../components/styled-components/Text/LargeText'
import { MediumText } from '../components/styled-components/Text/MediumText'
import { SmallText } from '../components/styled-components/Text/SmallText'
import { SearchBar } from '../components/base-components/SearchBar/SearchBar'
import { Input } from '../components/styled-components/Input/Input'
import { List } from '../components/styled-components/List/List'
import { ListItem } from '../components/styled-components/List/ListItem'
import { SimpleBarChart } from '../components/base-components/Chart/BarChart'
import { Card } from '../components/styled-components/Card/Card'

storiesOf('Button', module).add('Login Button', () => (
  <LoginButton onClick={action('clicked')}>Log In to Spotify</LoginButton>
))

storiesOf('Text', module)
  .add('Large Text', () => <LargeText>Large Text</LargeText>)
  .add('Medium Text', () => <MediumText>Medium Text</MediumText>)
  .add('Small Text', () => <SmallText>Small Text</SmallText>)

storiesOf('Search Bar', module).add('Search Bar', () => <SearchBar />)
storiesOf('Input', module).add('Input', () => <Input />)

storiesOf('List', module)
  .add('ListItem', () => <ListItem>Jay Z</ListItem>)
  .add('List', () => {
    const items = ['Justin Bieber', 'Lady Gaga', 'Beyoncé', 'Jay Z']
    return (
      <List>
        {items.map(item => {
          return <ListItem>{item}</ListItem>
        })}
      </List>
    )
  })

storiesOf('Chart', module).add('SimpleBarChart', () => <SimpleBarChart />)
storiesOf('Card', module).add('Card', () => (
  <Card>
    <LargeText>Time Signature: 4/4</LargeText>
  </Card>
))
