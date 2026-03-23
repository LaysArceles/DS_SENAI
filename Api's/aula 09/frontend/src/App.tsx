import { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/login'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Carrossel from "./pages/carrosell"


function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
          <div className='flex justify-between items-center w-full h-20 bg-blue-600 text-amber-50 '>
              <span className="font-bold ml-20 ">
                Home
              </span>
      
            <div className='space-x-10 '>
              <button onClick={Login}>Login</button>
              <h1>register</h1>
            </div>
          </div>

        </nav>
        <div className='h-screen bg-linear-to-t from-blue-200 to-blue-400'>
          <div className='h-full '>
            <div className='flex justify-center '>
              <div> <Carrossel /></div>
            </div>
          </div>
        </div>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
} export default App
