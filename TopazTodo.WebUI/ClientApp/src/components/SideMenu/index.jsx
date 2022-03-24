import React from 'react'
import Drawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import TodoList from './components/TodoList'
import Typography from '@mui/material/Typography'
import DiamondIcon from '@mui/icons-material/Diamond'
import Box from '@mui/material/Box'
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
        <Toolbar>
          <Typography
            variant='h5'
            component='div'
            sx={{
              display: 'flex',
              flexGrow: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography variant='h5'>
                <b>
                  Topaz <i>To-Do</i>
                </b>
              </Typography>
            </Box>
            <Box
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 13,
                color: '#ffc87c',
                fontSize: 90,
              }}
            >
              <DiamondIcon
                sx={{
                  '&:svg': {
                    fontSize: 20,
                  },
                  transform: 'scale(1.4)',
                }}
              />
            </Box>
          </Typography>
        </Toolbar>
        <TodoList />
      </div>
    </Drawer>
  )
}
