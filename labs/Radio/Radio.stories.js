import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import '../../assets/fonts/fonts'
import './../../base.scss'
import './../../styles/invoker-base/storybook.base.css'

import Box from '../../layouts/Box/Box'
import { Checkbox, Checkmark, Checklabel } from './Checkbox'
import StoryPreview from '../../utils/StoryPreview'

const items = ['Look at the stars!', 'Look at their shine for you', 'Everything you do', "It's all yellow"]

storiesOf('Container', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [Checkbox, Checkmark, Checklabel],
      propTablesExclude: [StoryPreview, Box],
    })
  )
  .add('default', () => (
    <StoryPreview>
      {items.map(item => (
        <Checkbox id="item">
          <Checkmark />
          <Checklabel>{item}</Checklabel>
        </Checkbox>
      ))}
    </StoryPreview>
  ))
