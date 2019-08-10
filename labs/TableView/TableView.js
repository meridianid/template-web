import styles from './TableView.module.scss'
import React from 'react'
import cx from 'classnames'

import Container from '../../layouts/Container/Container'
import Section from '../../layouts/Section/Section'
import Box from '../../layouts/Box/Box'
import Text from '../../components/Text/Text'
import Button from '../../components/Button/Button'

const TableViewItem = props => {
  return (
    <div className={styles.itemWrapper}>
      <Box as="li" justifyBetween alignCenter className={styles.item}>
        {props.children}
      </Box>
    </div>
  )
}

const TableView = ({ className, ...restProps }) => {
  return (
    <Section>
      <Container>
        <ul className={cx(styles.root)} {...restProps}>
          <TableViewItem>
            <Box as="header" column>
              <Text positive heading5 as="h3">
                Title goes here
              </Text>
              <Text small as="p">
                Description goes here
              </Text>
            </Box>
            <Button small primary>
              Action
            </Button>
          </TableViewItem>
          <TableViewItem>
            <Box as="header" column>
              <Text critical heading5 as="h3">
                Title goes here
              </Text>
              <Text small as="p">
                Description goes here
              </Text>
            </Box>
            <Button small primary>
              Action
            </Button>
          </TableViewItem>
          <TableViewItem>
            <Box as="header" column>
              <Text info heading5 as="h3">
                Title goes here
              </Text>
              <Text small as="p">
                Description goes here
              </Text>
            </Box>
            <Button small primary>
              Action
            </Button>
          </TableViewItem>
          <TableViewItem>
            <Box as="header" column>
              <Text highlight heading5 as="h3">
                Title goes here
              </Text>
              <Text small as="p">
                Description goes here
              </Text>
            </Box>
            <Button small primary>
              Action
            </Button>
          </TableViewItem>
          <TableViewItem>
            <Box as="header" column style={{ width: '100%' }}>
              <Text as="h3" link heading5 right>
                The Title of Item Goes Here
              </Text>
              <Text small as="p">
                Description goes here
              </Text>
            </Box>
            <Button small primary>
              Action
            </Button>
          </TableViewItem>
        </ul>
      </Container>
    </Section>
  )
}

export default TableView
