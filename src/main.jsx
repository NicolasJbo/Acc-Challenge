import React from 'react'
import ReactDOM from 'react-dom/client'
import Hero from './components/hero/hero.jsx'
import Workers from './components/woloxWorker/workers.jsx'
import './index.css'
import Navbar from './components/navbar/navbar.jsx'
import Footer from './components/footer/footer.jsx'
import Benefit from './components/benefit/benefit.jsx'
import Login from './components/login/login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="container">
     {/*  <Navbar></Navbar>
      <Hero></Hero>
      <Workers></Workers>
      <Benefit></Benefit>
      <Footer></Footer> */}
    </div>
    <Login></Login>
  </React.StrictMode>,
)
