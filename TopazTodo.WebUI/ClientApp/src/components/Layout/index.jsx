import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../Header'
import SideMenu from '../SideMenu'
import Login from '../../pages/Login'

export default ({ history }) => {
  return (
    <div
      sx={{
        display: 'flex',
        maxWidth: '100vw',
        overflowX: 'hidden',
        height: '100vh',
      }}
    >
      <Routes>
        <Route
          path='/'
          exact
          element={
            <>
              <Header />
              <SideMenu />
            </>
          }
        />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}
