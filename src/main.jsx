import React from 'react'
import ReactDOM from 'react-dom/client'
import { Nav } from './components/Nav/Nav'
import { Subscribe } from './components/Subscribe/Subscribe'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Subscribe />
  </React.StrictMode>,
)
