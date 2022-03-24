import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { BrowserRouter } from 'react-router-dom'
import { LayoutProvider } from './context/LayoutContext'
import { ListProvider } from './context/ListContext'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href')
const rootElement = document.getElementById('root')

ReactDOM.render(
  <BrowserRouter basename={baseUrl}>
    <LayoutProvider>
      <ListProvider>
        <App />
      </ListProvider>
    </LayoutProvider>
  </BrowserRouter>,
  rootElement
)
