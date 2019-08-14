import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import './../../assets/fonts/fonts'
import './../../base.scss'

import Box, { BoxNoModifier as BoxComponent } from './Box'
import { directions } from '../components/__private/withDirectionProps'
import { alignes } from '../components/__private/withAlignProps'
import { justifys } from '../components/__private/withJustifyProps'

storiesOf('Text', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [BoxComponent],
      propTablesExclude: [Text],
    })
  )
  .add('All props', () => (
    <div style={{ padding: '40px', backgroundColor: '#e4e5e6' }}>
      <Box
        as="div"
        direction={select('direction', directions, 'row')}
        align={select('align', alignes, 'alignStart')}
        justify={select('justify', justifys, 'justifyStart')}>
        The reward for work well done is the opportunity to do more.
      </Box>
    </div>
  ))
