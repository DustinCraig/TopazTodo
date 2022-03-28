import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import DiamondIcon from '@mui/icons-material/Diamond'
import Divider from '@mui/material/Divider'
import Box from '@mui/material/Box'

export default () => {
  return (
    <Box>
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
      <Divider variant='middle' />
    </Box>
  )
}
