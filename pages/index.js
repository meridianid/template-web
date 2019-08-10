import React from 'react'

import Default from './../layouts/Default/Default'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import ScrollAlt from '../labs/ScrollAlt/ScrollAlt'
import TableView from '../labs/TableView/TableView'
import Scroll from '../labs/Scroll/Scroll'

const HomePage = ({ className, ...restProps }) => {
  return (
    <Default>
      <Intro />
      <TableView />
      <Scroll />
      <ScrollAlt />
      <WhoWeAre />
      <Footer />
    </Default>
  )
}

export default HomePage
