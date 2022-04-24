import React, { useState } from 'react'
import { SIDE_MENU_WIDTH } from '../../constants'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import CheckIcon from '@mui/icons-material/Check'
import CancelIcon from '@mui/icons-material/Cancel'

export default () => {
  const [editingTitle, setEditingTitle] = useState(false)
  const [title, setTitle] = useState('Topaz Todo')

  const handleBeginEditingTitle = () => setEditingTitle(true)
  const handleCancelEditingTitle = () => setEditingTitle(false)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${SIDE_MENU_WIDTH}px)` },
          ml: { sm: `${SIDE_MENU_WIDTH}px` },
        }}
      >
        <Toolbar>
          {!editingTitle && (
            <Typography
              variant='h6'
              component='div'
              sx={{ flexGrow: 1, cursor: 'pointer' }}
              onClick={handleBeginEditingTitle}
            >
              Topaz Todo
            </Typography>
          )}
          {editingTitle && (
            <Input
              label={title}
              autoFocus
              defaultValue={title}
              variant='standard'
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton>
                    <CheckIcon />
                  </IconButton>
                  <IconButton>
                    <CancelIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
