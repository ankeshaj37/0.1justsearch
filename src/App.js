import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import ViweData from './Components/ViweData'
import AddServices from './Dashboard/AddServices'

import Dashboard from './Dashboard/Dashboard'

const App = () => {
  return (
    <div className='app'>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/dash' element={<Dashboard />} />
          <Route path='/' element={<Home />} />
          <Route path='/dash/addservices' element={<AddServices />} />
          <Route path='/page/:id' element={<ViweData />} />
          
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}

export default App
