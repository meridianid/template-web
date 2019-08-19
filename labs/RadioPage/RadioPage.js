import styles from './RadioPage.module.scss'
import React from 'react'
import cx from 'classnames'

import { RadioGroup, Radio, Radiolabel, Radiomark } from './../Radio/Radio'
import Container from '../../layouts/Container/Container'
import Section from '../../layouts/Section/Section'
import * as tokens from '../../styles/invoker-tokens/index'

const teams = [
  {
    value: 'Ongki Herlambang',
    id: 'asdhsjd',
  },
  {
    value: 'Khairani Ummah',
    id: 'qwew',
  },
  {
    value: 'Husni Munaya',
    id: 'jkji232dwdwd',
  },
  {
    value: 'Hanifan Mohammad',
    id: 'jbbuububu',
  },
]

const RadioPage = ({ className, ...restProps }) => {
  return (
    <Section style={{ paddingBottom: 48 }}>
      <Container>
        <RadioGroup name="dushi" column>
          {teams.map(item => (
            <Radio
              key={item.id}
              id={item.id}
              style={{
                paddingTop: tokens.spaces.sm,
                paddingBottom: tokens.spaces.sm,
                maxWidth: tokens.breakpoints.min.$480,
              }}>
              <Radiomark small id={item.id} style={{ marginRight: tokens.spaces.sm }} />
              <Radiolabel>
                <p style={{ color: tokens.dark.alpha.primary }}>
                  {item.value} qhgd h Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio a
                  est nobis iste, tenetur quasi at quibusdam quas velit obcaecati, reprehenderit autem
                  adipisci? Accusamus odio voluptatum tenetur necessitatibus beatae atque? ⭐⭐⭐⭐⭐
                </p>
              </Radiolabel>
            </Radio>
          ))}
        </RadioGroup>
      </Container>
    </Section>
  )
}

export default RadioPage
