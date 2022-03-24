import { createTheme } from '@mui/material/styles'
import defaultTheme from './default'

const themes = {
  default: createTheme({
    palette: {
      mode: 'dark',
    },
  }),
}

export default themes
