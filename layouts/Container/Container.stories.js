import React from 'react'
import { storiesOf, setAddon } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withInfo } from '@storybook/addon-info'
import { boolean, select } from '@storybook/addon-knobs'

import '../../assets/fonts/fonts'
import './../../base.scss'
import './../../styles/invoker-base/storybook.base.css'

import ContainerComponent from './Container'
import StoryPreview from '../../utils/StoryPreview'

storiesOf('Container', module)
  .addDecorator(
    withInfo({
      inline: true,
      propTables: [ContainerComponent],
      propTablesExclude: [StoryPreview],
    })
  )
  .add('default', () => (
    <StoryPreview>
      <ContainerComponent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis doloribus omnis eos.
          Consectetur architecto obcaecati voluptas, facilis libero distinctio saepe quia aut repudiandae
          nam fugit pariatur eos maiores, deleniti consequatur?
        </p>
      </ContainerComponent>
    </StoryPreview>
  ))
