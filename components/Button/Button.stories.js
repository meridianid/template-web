import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import './../../assets/fonts/fonts'
import './../../base.scss'

import Button, { NoModifierButton as UndecoratedButton } from './Button'
import { types } from '../__private/withTypeProps'
import { sizes } from '../__private/withSizeProps'

storiesOf('Button', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [UndecoratedButton],
      propTablesExclude: [Button],
    })
  )
  .add('default', () => (
    <div style={{ padding: '40px' }}>
      <Button
        as={select('as', ['button', 'submit', 'link'], 'button')}
        type={select('type', types, 'normal')}
        size={select('size', sizes, 'regular')}
        disabled={boolean('disabled', false)}
        onClick={action('clicked')}>
        I am a Button
      </Button>
    </div>
  ))
