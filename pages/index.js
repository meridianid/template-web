import React from 'react'

import Default from './../layouts/Default/Default'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import WhoWeAre from '../components/WhoWeAre/WhoWeAre'
import ScrollAlt from '../labs/ScrollAlt/ScrollAlt'
import TableView from '../labs/TableView/TableView'
import Scroll from '../labs/Scroll/Scroll'
import CheckboxPage from '../labs/CheckboxPage/CheckboxPage'
import RadioPage from '../labs/RadioPage/RadioPage'
import DropdownPage from '../labs/DropdownPage/DropdownPage'
import DialogPage from '../labs/DialogPage/DialogPage'
import ComboboxPage from '../labs/ComboboxPage/ComboboxPage'
import RectanglePage from '../labs/RectanglePage/RectanglePage'
import Matrix from '../labs/Matrix/Matrix'

const HomePage = ({ className, ...restProps }) => {
  return (
    <Default>
      <Intro />
      <Matrix />
      <TableView />
      <CheckboxPage />
      <RadioPage />
      <DropdownPage />
      <DialogPage />
      <ComboboxPage />
      <RectanglePage />
      <Scroll />
      <ScrollAlt />
      <WhoWeAre />
      <Footer />
    </Default>
  )
}

export default HomePage
