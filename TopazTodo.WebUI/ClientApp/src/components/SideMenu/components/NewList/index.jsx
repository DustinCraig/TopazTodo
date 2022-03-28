import React from 'react'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import AddCircleIcon from '@mui/icons-material/AddCircle'

export default () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        marginBottom: 5,
      }}
    >
      <Button size='small' variant='outlined' startIcon={<AddCircleIcon />}>
        Create List
      </Button>
    </Box>
  )
}
