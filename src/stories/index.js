import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { BaseButton } from '../components/base-components/Button/index'

storiesOf('Button', module)
  .add('with text', () => (
    <BaseButton onClick={action('clicked')}>Hello BaseButton</BaseButton>
  ))
  .add('with some emoji', () => (
    <BaseButton onClick={action('clicked')}>
      <span role='img' aria-label='so cool'>
        😀 😎 👍 💯
      </span>
    </BaseButton>
  ))
