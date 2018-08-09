import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { LoginButton } from '../components/styled-components/Button/LoginButton'

import { LargeText } from '../components/styled-components/Text/LargeText'
import { MediumText } from '../components/styled-components/Text/MediumText'
import { SmallText } from '../components/styled-components/Text/SmallText'

storiesOf('Button', module).add('Login Button', () => (
  <LoginButton onClick={action('clicked')}>Log In to Spotify</LoginButton>
))

storiesOf('Text', module)
  .add('Large Text', () => <LargeText>Large Text</LargeText>)
  .add('Medium Text', () => <MediumText>Medium Text</MediumText>)
  .add('Small Text', () => <SmallText>Small Text</SmallText>)
