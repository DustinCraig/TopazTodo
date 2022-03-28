import React from 'react'
import Drawer from '@mui/material/Drawer'
import TodoList from './components/TodoList'
import Header from './components/Header'
import NewList from './components/NewList'
import { useLayout } from '../../context/LayoutContext'

export default () => {
  const [{ isSideMenuOpen }, layoutDispatch] = useLayout()

  return (
    <Drawer
      variant='permanent'
      anchor={'left'}
      open
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}
    >
      <div>
        <Header />
        <TodoList />
        <NewList />
      </div>
    </Drawer>
  )
}
