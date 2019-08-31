import styles from './RectanglePage.module.scss'
import React from 'react'
import cx from 'classnames'
import Section from '../../layouts/Section/Section'
import Text from '../../components/Text/Text'
import Container from '../../layouts/Container/Container'
import { useRect } from '../../hooks'

const RectanglePage = ({ children, className, ...restProps }) => {
  const ref = React.useRef()
  const rect = useRect(ref)
  return (
    <Section ref={ref}>
      <Container>
        <Text heading1={rect.width > 700} heading5={rect.width <= 700} as="h2">
          This is a heading1 text
        </Text>
        <Text large as="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea veniam praesentium reiciendis
          molestias. Sit voluptatum quas reiciendis incidunt similique, aut ducimus quo neque quam facilis
          nesciunt vel maiores, iure nemo.
        </Text>
        <pre>{JSON.stringify(rect, null, 2)}</pre>
      </Container>
    </Section>
  )
}

export default RectanglePage
