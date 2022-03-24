import React from 'react'
import { SIDE_MENU_WIDTH } from '../../constants'
import { useLayout } from '../../context/LayoutContext'
import Header from '../Header'
import SideMenu from '../SideMenu'

export default ({ history }) => {
  const [layoutState, layoutDispatch] = useLayout()

  return (
    <div sx={{ display: 'flex', maxWidth: '100vw', overflowX: 'hidden' }}>
      <Header />
      <SideMenu />
    </div>
  )
}
