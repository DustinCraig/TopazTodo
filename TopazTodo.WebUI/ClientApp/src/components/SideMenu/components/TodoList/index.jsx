import React from 'react'
import { useList } from '../../../../context/ListContext'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'

export default () => {
  const [{ list, activeIndex }, listDispatch] = useList()

  return (
    <List>
      {list.map((listItem) => (
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemText>{listItem.text}</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  )
}
