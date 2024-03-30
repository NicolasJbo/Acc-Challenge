import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/hero/hero.jsx'
import Workers from './components/woloxWorker/workers.jsx'
import './index.css'
import Navbar from './components/navbar/navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar>  </Navbar>
  <Hero></Hero>
  <Workers></Workers>
  </React.StrictMode>,
)
