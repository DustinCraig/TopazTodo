import React from 'react'

const ListContext = React.createContext()

const initialState = {
  list: [],
  activeIndex: 0,
}

const listReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ACTIVE':
      return { ...state, activeIndex: action.activeIndex }
  }
}

const ListProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(listReducer, initialState)
  const value = { state, dispatch }
  return <ListContext.Provider value={value}>{children}</ListContext.Provider>
}

const useList = () => {
  const { state, dispatch } = React.useContext(ListContext)
  if (!state) throw new Error('useList must be used within a ListProvider')
  return [state, dispatch]
}

export { ListProvider, useList }
