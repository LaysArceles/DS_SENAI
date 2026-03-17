import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Carrossel from "./pages/carrosell"


function App() {

  return (
    <>
      <nav>
        <div className='flex justify-center items-center w-full h-20 bg-black text-amber-50'>
          <h1>
            Home
          </h1>

        </div>
      </nav>
      <div className='h-screen bg-linear-to-t from-emerald-900 to-green-900'>
        <div className='h-full '>
        <div className='flex justify-center '>
          <div> <Carrossel/></div>
          </div>
        </div>
      </div>
    </>
  )
} export default App
