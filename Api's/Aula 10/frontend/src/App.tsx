
import './App.css'
import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/Registrer'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element = {<Home/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
} export default App
