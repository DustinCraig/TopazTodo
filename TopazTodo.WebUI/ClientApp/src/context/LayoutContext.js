import React from 'react'

const LayoutContext = React.createContext()

const initialState = {
  isSideMenuOpen: true,
}

const layoutReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDE_MENU':
      return { ...state, isSideMenuOpen: !state.isSideMenuOpen }
  }
}

const LayoutProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(layoutReducer, initialState)
  const value = { state, dispatch }
  return (
    <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>
  )
}

const useLayout = () => {
  const { state, dispatch } = React.useContext(LayoutContext)
  if (!state) throw new Error('useLayout must be used within a LayoutProvider')
  return [state, dispatch]
}

export { LayoutProvider, useLayout }
