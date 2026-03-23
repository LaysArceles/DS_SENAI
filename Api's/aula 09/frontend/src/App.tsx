import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Carrossel from "./pages/carrosell"


function App() {

  return (
    <>
      <nav>
        <div className='flex justify-center items-center w-full h-20 bg-blue-600 text-amber-50'>
          <h1>
            Home
          </h1>

        </div>
      </nav>
      <div className='h-screen bg-linear-to-t from-blue-200 to-blue-400'>
        <div className='h-full '>
        <div className='flex justify-center '>
          <div> <Carrossel/></div>
          </div>
        </div>
      </div>
    </>
  )
} export default App
