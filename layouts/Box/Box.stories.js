import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import '../../assets/fonts/fonts
import './../../base.scss'

import Box, { BoxNoModifier as BoxComponent } from './Box'
import { directions } from '../../components/__private/withDirectionProps'
import { alignes } from '../../components/__private/withAlignProps'
import { justifys } from '../../components/__private/withJustifyProps'

const BoxItemForStorybookOnly = props => {
  return (
    <Box
      alignCenter
      justifyCenter
      style={{
        backgroundColor: props.bg,
        width: 40,
        height: 40,
        padding: 8,
        color: 'white',
        fontWeight: 700,
      }}>
      {props.children}
    </Box>
  )
}

storiesOf('Box', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [BoxComponent],
      propTablesExclude: [Box, BoxItemForStorybookOnly],
    })
  )
  .add('default', () => (
    <div style={{ padding: '40px', backgroundColor: '#e4e5e6', height: 360 }}>
      <Box
        style={{ width: '100%', height: '100%' }}
        as="main"
        direction={select('direction', directions, 'row')}
        align={select('align', alignes, 'alignStart')}
        justify={select('justify', justifys, 'justifyStart')}>
        <BoxItemForStorybookOnly bg="rebeccapurple">1</BoxItemForStorybookOnly>
        <BoxItemForStorybookOnly bg="coral">2</BoxItemForStorybookOnly>
        <BoxItemForStorybookOnly bg="teal">3</BoxItemForStorybookOnly>
        <BoxItemForStorybookOnly bg="hotpink">4</BoxItemForStorybookOnly>
        <BoxItemForStorybookOnly bg="skyblue">5</BoxItemForStorybookOnly>
      </Box>
    </div>
  ))
