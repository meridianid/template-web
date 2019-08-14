import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import './../../assets/fonts/fonts'
import './../../base.scss'

import Text, { TextNoModifier as TextComponent } from './Text'
import { sizes } from '../__private/withTextProps'
import { modifiers } from '../__private/withTextModifierProps'

storiesOf('Text', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [TextComponent],
      propTablesExclude: [Text],
    })
  )
  .add('All props', () => (
    <div style={{ padding: '40px', backgroundColor: '#e4e5e6' }}>
      <Text
        as={'h2'}
        align={select('align', ['left', 'right', 'center', 'justify'], 'left')}
        size={select('size', sizes, 'heading1')}
        truncate={boolean('truncate', false)}
        breakWord={boolean('breakWord', false)}
        light={boolean('light', false)}
        strong={boolean('strong', false)}
        modifier={select('modifier', modifiers, false)}>
        The reward for work well done is the opportunity to do more.
      </Text>
    </div>
  ))
// .add('Sizes', () => (
//   <div style={{ padding: '40px', backgroundColor: '#e4e5e6' }}>
//     <Text as={'h1'} size={select('size', sizes, 'heading1')}>
//       The reward for work well done is the opportunity to do more.
//     </Text>
//   </div>
// ))
// .add('Overflow', () => (
//   <div style={{ padding: '40px', width: '400px', backgroundColor: '#e4e5e6' }}>
//     <Text as="h2" heading1 truncate={boolean('truncate', true)} breakWord={boolean('breakWord', false)}>
//       The reward for work well done is the opportunity to do more.
//     </Text>
//   </div>
// ))
